
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
    let textarea = document.getElementById("myTextarea").value.toLowerCase().trim(); // Convert input to lowercase and remove leading/trailing whitespace
    console.log("Input value:", textarea); // Log the input value to verify its contents

    // Check if the input text is empty or if the text area is inactive
    if (textarea === "" || !document.activeElement || document.activeElement !== event.target) {
        console.log("Text area is inactive or empty"); // Log if the text area is inactive or empty
        hidePhotoGallery(); // Hide the gallery
        return; // Exit the event handler early
    }

    // If the input text is not empty, continue with keyword detection
    if (/\b(?:joy|happy|glad)\b/.test(textarea)) {
        console.log("Joy detected"); // Log if "joy" is detected
        showPhotoGallery("joy.gif");
    } else if (/\b(?:sad|sadness)\b/.test(textarea)) {
        console.log("Sad detected"); // Log if "sad" or "sadness" is detected
        showPhotoGallery("sad.gif");
    } else if (/\b(?:angry|anger)\b/.test(textarea)) {
        console.log("Angry detected"); // Log if "angry" or "anger" is detected
        showPhotoGallery("angry.gif");
    } else if (/\b(?:trust|trusted)\b/.test(textarea)) {
        console.log("Trust detected"); // Log if "trust" or "trusted" is detected
        showPhotoGallery("trust.gif");
    } else if (/\b(?:fear|scare|scared)\b/.test(textarea)) {
        console.log("Fear detected"); // Log if "fear" is detected
        showPhotoGallery("fear.gif");
    } else if (/\b(?:surprise)\b/.test(textarea)) {
        console.log("Surprise detected"); // Log if "surprise" is detected
        showPhotoGallery("surprise.gif");
    } else if (/\b(?:disgust|ew)\b/.test(textarea)) {
        console.log("Disgust detected"); // Log if "disgust" is detected
        showPhotoGallery("disgust.gif");
    } else if (/\b(?:anticipation|hope)\b/.test(textarea)) {
        console.log("Anticipation detected"); // Log if "anticipation" is detected
        showPhotoGallery("anticipation.gif");
    }
});



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
