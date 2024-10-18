// JS code for css animations 
window.onload = function () {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    const elements = document.getElementsByClassName('sequence');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const lines = element.innerHTML.trim().split('<br>'); // Split lines by <br>
        let str = '';
        let delay = 100;

        for (let line of lines) {
            // Wrap each line in a span
            str += `<span style="display: block; opacity: 0;">${line}</span>`;
        }

        element.innerHTML = str;

        // Animate each line
        const spans = element.getElementsByTagName('span');
        for (let j = 0; j < spans.length; j++) {
            spans[j].style.animationDelay = `${delay}ms`;
            spans[j].style.animationName = 'leFadeInBottom'; // Apply the animation
            spans[j].style.opacity = 1; // Set opacity to 1 for the fade effect
            delay += 500; // Increment delay for the next line
        }
    }
}


function animateRandom() {
    const elements = document.getElementsByClassName('random');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const text = element.innerHTML.trim();
        let delay = 50;
        let delayArray = [];
        let randLetters = [];
        for (let j = 0; j < text.length; j++) {
            let randomIndex;
            do {
                randomIndex = getRandomInt(0, text.length - 1);
            } while (delayArray.includes(randomIndex));
            delayArray[j] = randomIndex;
        }
        for (let index of delayArray) {
            if (text[index] !== ' ') {
                randLetters[index] = `<span style="animation-delay:${delay}ms;">${text[index]}</span>`;
            } else {
                randLetters[index] = text[index];
            }
            delay += 60;
        }
        element.innerHTML = randLetters.join("");
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function toggleNavbarItemsList() {
    const navbarItems = document.getElementById("navbarItemsList");
    if (navbarItems.style.display === "none" || navbarItems.style.display === "") {
        navbarItems.style.display = "flex";  // Show the items as a flexbox (you can change this if you use another layout)
    } else {
        navbarItems.style.display = "none";  // Hide the items
    }
} 
// navbar items hover changes 
// Select the list items
const workItem = document.querySelector('.item-work');
const studiosItem = document.querySelector('.item-studios');
const recognitionItem = document.querySelector('.item-recognition');

// Store the original text
const originalTexts = {
    work: workItem.textContent,
    studios: studiosItem.textContent,
    recognition: recognitionItem.textContent,
};

// Change text on hover
workItem.addEventListener('mouseover', () => {
    workItem.textContent = 'Hard';
});
workItem.addEventListener('mouseout', () => {
    workItem.textContent = originalTexts.work;
});

studiosItem.addEventListener('mouseover', () => {
    studiosItem.textContent = 'Play Harder';
});
studiosItem.addEventListener('mouseout', () => {
    studiosItem.textContent = originalTexts.studios;
});

recognitionItem.addEventListener('mouseover', () => {
    recognitionItem.textContent = 'Yeah!';
});
recognitionItem.addEventListener('mouseout', () => {
    recognitionItem.textContent = originalTexts.recognition;
});

// Array of texts to display
const texts = ["Ignore", "Zzz", "Scroll", "Move", "Run", "Travel"];
let currentIndex = 0;

function changeText() {
    const textElement = document.getElementById("text-display");

    // Update the text content
    textElement.innerHTML = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length; // Loop through array

    // Trigger the next change after 0.2 seconds (200ms)
    setTimeout(changeText, 1000);
}

// Start the text rotation
changeText();
//JavaScript to toggle video play/pause and cursor changes
const reelText = document.getElementById('reel-text');
const reelVideo = document.getElementById('reel-video');
const reelContainer = document.querySelector('.reel-container');

// Event listener for the text to enter full screen
reelText.addEventListener('click', function() {
    // Check if the page is already in fullscreen
    if (!document.fullscreenElement) {
        // Request fullscreen for the reel container
        if (reelContainer.requestFullscreen) {
            reelContainer.requestFullscreen();
        } else if (reelContainer.webkitRequestFullscreen) { /* Safari */
            reelContainer.webkitRequestFullscreen();
        } else if (reelContainer.msRequestFullscreen) { /* IE11 */
            reelContainer.msRequestFullscreen();
        }

        // Ensure the video plays and cursor changes to indicate close
        reelVideo.play();
        reelText.innerText = "";  // Hide text while video is playing
        reelText.style.cursor = "close";  // Change to close-like cursor
    } else {
        exitFullScreen(); // Call function to exit fullscreen if already in fullscreen
    }
});

// Function to exit fullscreen when clicked anywhere in the reel container
reelContainer.addEventListener('click', function() {
    if (document.fullscreenElement) {
        exitFullScreen();
    }
});

// Function to exit full screen and reset text
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }

    // Restore original state
    reelText.innerText = "Cool. Play it again?";
    reelText.style.cursor = "pointer";
}

// Global Projects 
// Select all project videos
const projectVideos = document.querySelectorAll('.project-video');

// Add hover event listeners
projectVideos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play(); // Play the video on mouse over
    });

    video.addEventListener('mouseout', () => {
        video.pause(); // Pause the video on mouse out
    });
});
