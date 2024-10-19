document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    const button = document.getElementById('clickButton');
    const countDisplay = document.getElementById('count');

    button.addEventListener('click', function() {
        count += 1;
        countDisplay.textContent = count;
    });
});
