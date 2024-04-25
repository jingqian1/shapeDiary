

//new version
let detectedKeywords = [];

let prevKeyword = "";
let currentPhoto = null;

window.onload = function() {
    document.getElementById("myTextarea").value = "";
    currentKeyword = "";
};
document.addEventListener('DOMContentLoaded', function() {
    hidePhotoGallery();
});



const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

document.querySelector('#myTextarea').addEventListener('input', function(event) {
    let textarea = document.getElementById("myTextarea");
    let inputText = textarea.value.toLowerCase().trim();

    if (inputText === "" || !document.activeElement || document.activeElement !== textarea) {
        hidePhotoGallery();
        console.log("Text area is inactive or empty");
        return;
    }

    const keywords = 
        ["joy","happy", "sad", "mad","anger", "angry", "surprise", "hope", 
        "anticipation", "disgust", "ew", "fear", "afarid", "trust", "look forward to"];
    let keywordsIndex = [];

    // TODO : handle -1 
    const isKeywordPresent = keywords.some(keyword => inputText.includes(keyword));

    if (!isKeywordPresent) {
        hidePhotoGallery();
        console.log("No keyword detected");
        return;
    }

    for(let i=0; i< keywords.length; i++){
        keywordsIndex[i] = inputText.lastIndexOf(keywords[i]);
    }

    const maxKeywordIndex = keywordsIndex.indexOf(Math.max(...keywordsIndex));
    // fix this!!!
    // Remove the index of the latest word from the keywordsIndex array
    keywordsIndex.splice(maxKeywordIndex, 1);
    const prevKeywordIndex = keywordsIndex.indexOf(Math.max(...keywordsIndex));

    lastKeyword = keywords[maxKeywordIndex];
   // prevKeyword = keywords[prevKeywordIndex];

    //Handle the case when the keywordsIndex array is empty or the second latest word is not found
    let prevKeyword;
    if (prevKeywordIndex !== -1) {
    // Use prevKeywordIndex to access the index of the second latest word in the keywords array
      
        prevKeyword = keywords[prevKeywordIndex];
        console.log("Latest keyword:", lastKeyword);
        console.log("previous keyword:", prevKeyword);
    } else {
        console.log("previous keyword not found or keywordsIndex array is empty");
    }

    // if (!lastKeyword || !inputText.endsWith(lastKeyword)) {
    //     hidePhotoGallery();
    //     return;
    // }


    // console.log("prevKeywordIndex: "+ prevKeywordIndex)
    // console.log("prevKeyword: "+ prevKeyword)

    detectedKeywords = [];

    switch (lastKeyword) {
        case "joy":
        case "happy":
            showPhotoGallery("joy.gif");
            break;
        case "sad":
        case "sadness":
            showPhotoGallery("sad.gif");
            break;
        case "angry":
        case "anger":
        case "mad":
            showPhotoGallery("angry.gif");
            break;
        case "trust":
        case "trusted":
            showPhotoGallery("trust.gif");
            break;
        case "fear":
        case "afraid":
        case "scared":
            showPhotoGallery("fear.gif");
            break;
        case "surprise":
            showPhotoGallery("surprise.gif");
            break;
        case "disgust":
        case "ew":
            showPhotoGallery("disgust.gif");
            break;
        case "anticipation":
        case "hope":
        case "look forward to":
            showPhotoGallery("anticipation.gif");
            break;
        default:
            break;
    }

    checkKeywordPair(lastKeyword, prevKeyword);

    highlightKeyword(currentKeyword);
});

function checkKeywordPair(lastKeyword, prevKeyword) {
    console.log("Checking keyword pair:", prevKeyword, lastKeyword);
    if (prevKeyword !== "") {
        let keywordPair = prevKeyword + lastKeyword;
        console.log("Detected keyword pair:", keywordPair);

        // TODO: deal with happy case
        switch (keywordPair) {
            case "trustjoy":
            case "joytrust":
                console.log("Trust and Joy detected in order");
                showPhotoGallery("love.gif");
                break;
            case "trustfear":
            case "feartrust":
                console.log("Trust and Fear detected in order");
                showPhotoGallery("submission.gif");
                break;
            case "surprisefear":
            case "fearsurprise":
                console.log("surprise and Fear detected in order");
                showPhotoGallery("awe.gif");
                break;
            case "surprisesad":
            case "sadsurprise":
                console.log("surprise and sad detected in order");
                showPhotoGallery("disapproval.gif");
                break;
            case "saddisgust":
            case "disgustsad":
                console.log("sad and Fear disgust in order");
                showPhotoGallery("remorse.gif");
                break;
            case "disgustangry":
            case "angrydisgust":
                console.log("angry and disgust detected in order");
                showPhotoGallery("contempt.gif");
                break;
            case "angryanticipation":
            case "anticipationangry":
                console.log("angry and anticipation detected in order");
                showPhotoGallery("aggressive.gif");
                break;
            case "anticipationjoy":
            case "joyanticipation":
                console.log("joy and anticipation detected in order");
                showPhotoGallery("optimism.gif");
                break;
            // Add cases for other keyword pairs...
            default:
                console.log("No specific keyword pair detected");
                break;
        }
    } else {
        console.log("No keyword pair detected");
    }

}

function highlightKeyword(keyword, color) {
    let textarea = document.getElementById("myTextarea");
    let inputText = textarea.value;

    // Create a regular expression to match the keyword
    let regex = new RegExp('\\b(' + keyword + ')\\b', 'gi');

    // Replace each occurrence of the keyword with a span element having the keyword class
    let highlightedText = inputText.replace(regex, '<span class="keyword-' + keyword + '">' + keyword + '</span>');

    // Apply the highlighted text to the textarea
    textarea.innerHTML = highlightedText;

    // Set the color for the keyword class
    let keywordElements = document.querySelectorAll('.keyword-' + keyword);
    keywordElements.forEach(element => {
        element.style.color = color;
    });
}




function showPhotoGallery(imageSrc) {
    console.log("Showing photo gallery with image source:", imageSrc);
    var photoGallery = document.getElementById("photoGallery");
    photoGallery.innerHTML = "";
    var gifImage = document.createElement("img");
    gifImage.src = imageSrc;
    photoGallery.appendChild(gifImage);
    photoGallery.style.display = "block";
}

function hidePhotoGallery() {
    var photoGallery = document.getElementById("photoGallery");
    photoGallery.innerHTML = "";
    photoGallery.style.display = "none";
}








// //new 2
// window.onload = function() {
//     document.getElementById("myTextarea").value = "";
//     currentKeyword = "";
// };
// document.addEventListener('DOMContentLoaded', function() {
//     hidePhotoGallery();
// });

// let detectedKeywords = [];

// let previousKeyword = "";
// let currentPhoto = null;

// const debounce = (func, delay) => {
//     let timeoutId;
//     return (...args) => {
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         timeoutId = setTimeout(() => {
//             func(...args);
//         }, delay);
//     };
// };

// document.querySelector('#myTextarea').addEventListener('input', function(event) {
//     let textarea = document.getElementById("myTextarea");
//     let inputText = textarea.value.toLowerCase().trim();

//     if (inputText === "" || !document.activeElement || document.activeElement !== textarea) {
//         hidePhotoGallery();
//         console.log("Text area is inactive or empty");
//         return;
//     }

//     previousKeyword = currentKeyword;

//     let joyDetected = /\b(?:joy|happy)\b/.test(inputText);
//     let sadDetected = /\b(?:sad|sadness)\b/.test(inputText);
//     let angryDetected = /\b(?:angry|anger|mad)\b/.test(inputText);
//     let trustDetected = /\b(?:trust|trusted)\b/.test(inputText);
//     let fearDetected = /\b(?:fear|afraid|scared)\b/.test(inputText);
//     let surpriseDetected = /\b(?:surprise)\b/.test(inputText);
//     let disgustDetected = /\b(?:disgust|ew)\b/.test(inputText);
//     let anticipationDetected = /\b(?:anticipation|hope|look forward to)\b/.test(inputText);

//     // Reset detectedKeywords array
//     detectedKeywords = [];

//     if (joyDetected) {
//         console.log("Joy detected");
//         highlightKeyword("joy", "rgb(255, 0, 0)");
//         showPhotoGallery("joy.gif");
//         currentKeyword = "joy";
//         detectedKeywords.push("joy");
//     } 
//     if (sadDetected) {
//         console.log("Sad detected");
//       //  highlightKeyword("sad", "red");
//         showPhotoGallery("sad.gif");
//         currentKeyword = "sad";
//         detectedKeywords.push("sad");
//     } 
//     if (angryDetected) {
//         console.log("Angry detected");
//         // highlightKeyword("angry");
//         showPhotoGallery("angry.gif");
//         currentKeyword = "angry";
//         detectedKeywords.push("angry");
//     } 
//     if (trustDetected) {
//         console.log("Trust detected");
//         // highlightKeyword("trust");
//         showPhotoGallery("trust.gif");
//         currentKeyword = "trust";
//         detectedKeywords.push("trust");
//     } 
//     if (fearDetected) {
//         console.log("Fear detected");
//         // highlightKeyword("fear");
//         showPhotoGallery("fear.gif");
//         currentKeyword = "fear";
//         detectedKeywords.push("fear");
//     } 
//     if (surpriseDetected) {
//         console.log("Surprise detected");
//         // highlightKeyword("surprise");
//         showPhotoGallery("surprise.gif");
//         currentKeyword = "surprise";
//         detectedKeywords.push("surprise");
//     } 
//     if (disgustDetected) {
//         console.log("Disgust detected");
//         // highlightKeyword("disgust");
//         showPhotoGallery("disgust.gif");
//         currentKeyword = "disgust";
//         detectedKeywords.push("disgust");
//     } 
//     if (anticipationDetected) {
//         console.log("Anticipation detected");
//         // highlightKeyword("anticipation");
//         showPhotoGallery("anticipation.gif");
//         // currentKeyword = "anticipation";
//         detectedKeywords.push("anticipation");
//     }

//     currentKeyword = detectedKeywords[detectedKeywords.length - 1];

//     checkKeywordPair();
//     highlightKeyword(currentKeyword);
// });

// function checkKeywordPair() {
//     console.log("Checking keyword pair:", previousKeyword, currentKeyword);
//     if (currentKeyword !== "" && previousKeyword !== "") {
//         let keywordPair = previousKeyword + currentKeyword;
//         console.log("Detected keyword pair:", keywordPair);
//         switch (keywordPair) {
//             case "trustjoy":
//             case "joytrust":
//                 console.log("Trust and Joy detected in order");
//                 showPhotoGallery("love.gif");
//                 break;
//             case "trustfear":
//             case "feartrust":
//                 console.log("Trust and Fear detected in order");
//                 showPhotoGallery("submission.gif");
//                 break;
//             case "surprisefear":
//             case "fearsurprise":
//                 console.log("surprise and Fear detected in order");
//                 showPhotoGallery("awe.gif");
//                 break;
//             case "surprisesad":
//             case "sadsurprise":
//                 console.log("surprise and sad detected in order");
//                 showPhotoGallery("disapproval.gif");
//                 break;
//             case "saddisgust":
//             case "disgustsad":
//                 console.log("sad and Fear disgust in order");
//                 showPhotoGallery("remorse.gif");
//                 break;
//             case "disgustangry":
//             case "angrydisgust":
//                 console.log("angry and disgust detected in order");
//                 showPhotoGallery("contempt.gif");
//                 break;
//             case "angryanticipation":
//             case "anticipationangry":
//                 console.log("angry and anticipation detected in order");
//                 showPhotoGallery("aggressive.gif");
//                 break;
//             case "anticipationjoy":
//             case "joyanticipation":
//                 console.log("joy and anticipation detected in order");
//                 showPhotoGallery("optimism.gif");
//                 break;
//             // Add cases for other keyword pairs...
//             default:
//                 console.log("No specific keyword pair detected");
//                 break;
//         }
//     } else {
//         console.log("No keyword pair detected");
//     }
//     previousKeyword = currentKeyword;
// }

// function highlightKeyword(keyword, color) {
//     let textarea = document.getElementById("myTextarea");
//     let inputText = textarea.value;

//     // Create a regular expression to match the keyword
//     let regex = new RegExp('\\b(' + keyword + ')\\b', 'gi');

//     // Replace each occurrence of the keyword with a span element having the keyword class
//     let highlightedText = inputText.replace(regex, '<span class="keyword-' + keyword + '">' + keyword + '</span>');

//     // Apply the highlighted text to the textarea
//     textarea.innerHTML = highlightedText;

//     // Set the color for the keyword class
//     let keywordElements = document.querySelectorAll('.keyword-' + keyword);
//     keywordElements.forEach(element => {
//         element.style.color = color;
//     });
// }




// function showPhotoGallery(imageSrc) {
//     console.log("Showing photo gallery with image source:", imageSrc);
//     var photoGallery = document.getElementById("photoGallery");
//     photoGallery.innerHTML = "";
//     var gifImage = document.createElement("img");
//     gifImage.src = imageSrc;
//     photoGallery.appendChild(gifImage);
//     photoGallery.style.display = "block";
// }

// function hidePhotoGallery() {
//     var photoGallery = document.getElementById("photoGallery");
//     photoGallery.innerHTML = "";
//     photoGallery.style.display = "none";
// }