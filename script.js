
// document.querySelector('#myTextarea').addEventListener('input', function(event){

//     let textarea = document.getElementById("myTextarea").value;
//     if(textarea.includes("HI")){

//         document.getElementById("test").innerHTML="HI";
//     } 

// });

// Hide the photo gallery when the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    hidePhotoGallery();
});


document.querySelector('#myTextarea').addEventListener('input', function(event) {
    let textarea = document.getElementById("myTextarea"); // Get the text area element
    let inputText = textarea.value.toLowerCase().trim(); // Convert input to lowercase and remove leading/trailing whitespace
    console.log("Input value:", inputText); // Log the input value to verify its contents

    // Regular expressions with word boundaries and variations for exact matches
    if (inputText === "" || !document.activeElement || document.activeElement !== textarea) {
        console.log("Text area is inactive or empty"); // Log if the text area is inactive or empty
        hidePhotoGallery(); // Hide the gallery
        return; // Exit the event handler early
    }

    // If the input text is not empty and the text area is active, continue with keyword detection
    let joyDetected = /\b(?:joy|happy)\b/.test(inputText);
    let sadDetected = /\b(?:sad|sadness)\b/.test(inputText);
    let angryDetected = /\b(?:angry|anger)\b/.test(inputText);
    let trustDetected = /\b(?:trust|trusted)\b/.test(inputText);
    let fearDetected = /\b(?:fear|afraid)\b/.test(inputText);
    let surpriseDetected = /\b(?:surprise)\b/.test(inputText);
    let disgustDetected = /\b(?:disgust|ew)\b/.test(inputText);
    let anticipationDetected = /\b(?:anticipation|hope)\b/.test(inputText);

    if (joyDetected) {
        console.log("Joy detected"); // Log if "joy" is detected
        highlightKeyword("joy");
        showPhotoGallery("joy.gif");
    } 
    if (sadDetected) {
        console.log("Sad detected"); // Log if "sad" or "sadness" is detected
        highlightKeyword("sad");
        showPhotoGallery("sad.gif");
    } 
    if (angryDetected) {
        console.log("Angry detected"); // Log if "angry" or "anger" is detected
        highlightKeyword("angry");
        showPhotoGallery("angry.gif");
    } 
    if (trustDetected) {
        console.log("Trust detected"); // Log if "trust" or "trusted" is detected
        highlightKeyword("trust");
        showPhotoGallery("trust.gif");
    } 
    if (fearDetected) {
        console.log("Fear detected"); // Log if "fear" is detected
        highlightKeyword("fear");
        showPhotoGallery("fear.gif");
    } 
    if (surpriseDetected) {
        console.log("Surprise detected"); // Log if "surprise" is detected
        highlightKeyword("surprise");
        showPhotoGallery("surprise.gif");
    } 
    if (disgustDetected) {
        console.log("Disgust detected"); // Log if "disgust" is detected
        highlightKeyword("disgust");
        showPhotoGallery("disgust.gif");
    } 
    if (anticipationDetected) {
        console.log("Anticipation detected"); // Log if "anticipation" is detected
        highlightKeyword("anticipation");
        showPhotoGallery("anticipation.gif");
    }
});

function highlightKeyword(keyword) {
    let textarea = document.getElementById("myTextarea"); // Get the text area element
    let inputText = textarea.value; // Get the input text
    let highlightedText = inputText.replace(new RegExp('\\b(' + keyword + ')\\b', 'gi'), '<span class="keyword-' + keyword + '">$1</span>'); // Highlight the keyword using a span element with a class specific to the keyword
    textarea.innerHTML = highlightedText; // Update the text area with the highlighted text
}


function showPhotoGallery(imageSrc) {
    var photoGallery = document.getElementById("photoGallery");
    photoGallery.innerHTML = ""; // Clear existing content

    // Create and append the .gif image to the photoGallery container
    var gifImage = document.createElement("img");
    gifImage.src = imageSrc; // Set the source to the specified .gif image
    photoGallery.appendChild(gifImage); // Append the .gif image to the container

    photoGallery.style.display = "block"; // Show the photo gallery
}

function hidePhotoGallery() {
    var photoGallery = document.getElementById("photoGallery");
    photoGallery.innerHTML = ""; // Clear existing content
    photoGallery.style.display = "none"; // Hide the photo gallery
}
