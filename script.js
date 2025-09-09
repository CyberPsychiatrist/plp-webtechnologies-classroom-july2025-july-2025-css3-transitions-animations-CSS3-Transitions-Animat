// script.js
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    // Function to scale the container
    function scaleContainer() {
        container.style.transform = 'scale(1.1)';
    }

    // Event listener for hover effect
    container.addEventListener('mouseover', scaleContainer);

    // Event listener for click effect
    container.addEventListener('click', () => {
        container.style.transform = 'scale(1.0)';
    });
});