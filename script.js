const scroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
document.addEventListener('DOMContentLoaded', function () {
    var designerElement = document.getElementById('designer');
    var developerElement = document.getElementById('developer');

    
    setTimeout(function () {
        animateText(designerElement, 'Web-Designer', developerElement, 'Web-Developer');
    }, 1000);
});

function animateText(elementOut, textOut, elementIn, textIn) {
    
    function revealLetter(index) {
        elementIn.innerHTML = textIn.slice(0, index);

        if (index < textIn.length) {
            setTimeout(function () {
                revealLetter(index + 1);
            }, 100); // Adjust the delay between letters as needed
        }
    }

    // Function to remove letters one by one
    function removeLetter(index) {
        elementOut.innerHTML = textOut.slice(0, index);

        if (index < textOut.length) {
            setTimeout(function () {
                removeLetter(index + 1);
            }, 100); // Adjust the delay between letters as needed
        } else {
            // Start revealing letters after removing all letters
            revealLetter(0);
        }
    }

    // Start the animation by removing letters
    removeLetter(0);
}
