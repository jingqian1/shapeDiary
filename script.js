

// document.addEventListener('DOMContentLoaded', function() {
//     hidePhotoGallery();
// });


// document.querySelector('#myTextarea').addEventListener('input', function(event) {
//     let textarea = document.getElementById("myTextarea"); // Get the text area element
//     let inputText = textarea.value.toLowerCase().trim(); // Convert input to lowercase and remove leading/trailing whitespace
//     console.log("Input value:", inputText); // Log the input value to verify its contents

//     // Regular expressions with word boundaries and variations for exact matches
//     if (inputText === "" || !document.activeElement || document.activeElement !== textarea) {
//         console.log("Text area is inactive or empty"); // Log if the text area is inactive or empty
//         hidePhotoGallery(); // Hide the gallery
//         return; // Exit the event handler early
//     }

//     // If the input text is not empty and the text area is active, continue with keyword detection
//     let joyDetected = /\b(?:joy|happy)\b/.test(inputText);
//     let sadDetected = /\b(?:sad|sadness)\b/.test(inputText);
//     let angryDetected = /\b(?:angry|anger)\b/.test(inputText);
//     let trustDetected = /\b(?:trust|trusted)\b/.test(inputText);
//     let fearDetected = /\b(?:fear|afraid)\b/.test(inputText);
//     let surpriseDetected = /\b(?:surprise)\b/.test(inputText);
//     let disgustDetected = /\b(?:disgust|ew)\b/.test(inputText);
//     let anticipationDetected = /\b(?:anticipation|hope)\b/.test(inputText);

//     if (joyDetected) {
//         console.log("Joy detected"); // Log if "joy" is detected
//         highlightKeyword("joy");
//         showPhotoGallery("joy.gif");
//     } 
//     if (sadDetected) {
//         console.log("Sad detected"); // Log if "sad" or "sadness" is detected
//         highlightKeyword("sad");
//         showPhotoGallery("sad.gif");
//     } 
//     if (angryDetected) {
//         console.log("Angry detected"); // Log if "angry" or "anger" is detected
//         highlightKeyword("angry");
//         showPhotoGallery("angry.gif");
//     } 
//     if (trustDetected) {
//         console.log("Trust detected"); // Log if "trust" or "trusted" is detected
//         highlightKeyword("trust");
//         showPhotoGallery("trust.gif");
//     } 
//     if (fearDetected) {
//         console.log("Fear detected"); // Log if "fear" is detected
//         highlightKeyword("fear");
//         showPhotoGallery("fear.gif");
//     } 
//     if (surpriseDetected) {
//         console.log("Surprise detected"); // Log if "surprise" is detected
//         highlightKeyword("surprise");
//         showPhotoGallery("surprise.gif");
//     } 
//     if (disgustDetected) {
//         console.log("Disgust detected"); // Log if "disgust" is detected
//         highlightKeyword("disgust");
//         showPhotoGallery("disgust.gif");
//     } 
//     if (anticipationDetected) {
//         console.log("Anticipation detected"); // Log if "anticipation" is detected
//         highlightKeyword("anticipation");
//         showPhotoGallery("anticipation.gif");
//     }

    
// });

// function highlightKeyword(keyword) {
//     let textarea = document.getElementById("myTextarea"); // Get the text area element
//     let inputText = textarea.value; // Get the input text
//     let highlightedText = inputText.replace(new RegExp('\\b(' + keyword + ')\\b', 'gi'), '<span class="keyword-' + keyword + '">$1</span>'); // Highlight the keyword using a span element with a class specific to the keyword
//     textarea.innerHTML = highlightedText; // Update the text area with the highlighted text
// }


// function showPhotoGallery(imageSrc) {
//     var photoGallery = document.getElementById("photoGallery");
//     photoGallery.innerHTML = ""; // Clear existing content

//     // Create and append the .gif image to the photoGallery container
//     var gifImage = document.createElement("img");
//     gifImage.src = imageSrc; // Set the source to the specified .gif image
//     photoGallery.appendChild(gifImage); // Append the .gif image to the container

//     photoGallery.style.display = "block"; // Show the photo gallery
// }

// function hidePhotoGallery() {
//     var photoGallery = document.getElementById("photoGallery");
//     photoGallery.innerHTML = ""; // Clear existing content
//     photoGallery.style.display = "none"; // Hide the photo gallery
// }


//new version
window.onload = function() {
    document.getElementById("myTextarea").value = "";
};
document.addEventListener('DOMContentLoaded', function() {
    hidePhotoGallery();
});

let currentKeyword = "";
let previousKeyword = "";
let currentPhoto = null;

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

    let joyDetected = /\b(?:joy|happy)\b/.test(inputText);
    let sadDetected = /\b(?:sad|sadness)\b/.test(inputText);
    let angryDetected = /\b(?:angry|anger|mad)\b/.test(inputText);
    let trustDetected = /\b(?:trust|trusted)\b/.test(inputText);
    let fearDetected = /\b(?:fear|afraid|scared)\b/.test(inputText);
    let surpriseDetected = /\b(?:surprise)\b/.test(inputText);
    let disgustDetected = /\b(?:disgust|ew)\b/.test(inputText);
    let anticipationDetected = /\b(?:anticipation|hope|look forward to)\b/.test(inputText);

    if (joyDetected) {
        console.log("Joy detected");
        highlightKeyword("joy");
        showPhotoGallery("joy.gif");
        currentKeyword = "joy";
    } 
    if (sadDetected) {
        console.log("Sad detected");
        highlightKeyword("sad");
        showPhotoGallery("sad.gif");
        currentKeyword = "sad";
    } 
    if (angryDetected) {
        console.log("Angry detected");
        highlightKeyword("angry");
        showPhotoGallery("angry.gif");
        currentKeyword = "angry";
    } 
    if (trustDetected) {
        console.log("Trust detected");
        highlightKeyword("trust");
        showPhotoGallery("trust.gif");
        currentKeyword = "trust";
    } 
    if (fearDetected) {
        console.log("Fear detected");
        highlightKeyword("fear");
        showPhotoGallery("fear.gif");
        currentKeyword = "fear";
    } 
    if (surpriseDetected) {
        console.log("Surprise detected");
        highlightKeyword("surprise");
        showPhotoGallery("surprise.gif");
        currentKeyword = "surprise";
    } 
    if (disgustDetected) {
        console.log("Disgust detected");
        highlightKeyword("disgust");
        showPhotoGallery("disgust.gif");
        currentKeyword = "disgust";
    } 
    if (anticipationDetected) {
        console.log("Anticipation detected");
        highlightKeyword("anticipation");
        showPhotoGallery("anticipation.gif");
        currentKeyword = "anticipation";
    }

    checkKeywordPair();
    highlightKeyword(currentKeyword);
});

function checkKeywordPair() {
    console.log("Checking keyword pair:", previousKeyword, currentKeyword);
    if (currentKeyword !== "" && previousKeyword !== "") {
        let keywordPair = previousKeyword + currentKeyword;
        console.log("Detected keyword pair:", keywordPair);
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
    previousKeyword = currentKeyword;
}

function highlightKeyword(keyword) {
    let textarea = document.getElementById("myTextarea");
    let inputText = textarea.value;
    let highlightedText = inputText.replace(new RegExp('\\b(' + keyword + ')\\b', 'gi'), '<span class="keyword-' + keyword + '">' + keyword + '</span>');
    textarea.innerHTML = highlightedText;
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



//new 2
// window.onload = function() {
//     document.getElementById("myTextarea").value = "";
// };
// document.addEventListener('DOMContentLoaded', function() {
//     hidePhotoGallery();
// });

// let currentKeyword = "";
// let previousKeyword = "";
// let currentPhoto = null;

// document.querySelector('#myTextarea').addEventListener('input', function(event) {
//     let textarea = document.getElementById("myTextarea");
//     let inputText = textarea.value.toLowerCase().trim();

//     if (inputText === "" || !document.activeElement || document.activeElement !== textarea) {
//         hidePhotoGallery();
//         console.log("Text area is inactive or empty");
//         return;
//     }

//     let joyDetected = /\b(?:joy|happy)\b/.test(inputText);
//     let sadDetected = /\b(?:sad|sadness)\b/.test(inputText);
//     let angryDetected = /\b(?:angry|anger)\b/.test(inputText);
//     let trustDetected = /\b(?:trust|trusted)\b/.test(inputText);
//     let fearDetected = /\b(?:fear|afraid)\b/.test(inputText);
//     let surpriseDetected = /\b(?:surprise)\b/.test(inputText);
//     let disgustDetected = /\b(?:disgust|ew)\b/.test(inputText);
//     let anticipationDetected = /\b(?:anticipation|hope)\b/.test(inputText);

//     if (joyDetected) {
//         currentKeyword = "joy";
//     } else if (sadDetected) {
//         currentKeyword = "sad";
//     } else if (angryDetected) {
//         currentKeyword = "angry";
//     } else if (trustDetected) {
//         currentKeyword = "trust";
//     } else if (fearDetected) {
//         currentKeyword = "fear";
//     } else if (surpriseDetected) {
//         currentKeyword = "surprise";
//     } else if (disgustDetected) {
//         currentKeyword = "disgust";
//     } else if (anticipationDetected) {
//         currentKeyword = "anticipation";
//     } else {
//         currentKeyword = ""; // Reset current keyword if no keyword is detected
//     }

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
//                 showPhotoGallery("courage.gif");
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

// function highlightKeyword(keyword) {
//     let textarea = document.getElementById("myTextarea");
//     let inputText = textarea.value;
//     let highlightedText = inputText.replace(new RegExp('\\b(' + keyword + ')\\b', 'gi'), '<span class="keyword-' + keyword + '">' + keyword + '</span>');
//     textarea.innerHTML = highlightedText;
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
//
