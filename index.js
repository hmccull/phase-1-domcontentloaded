// create event listener to detect when the HTML page has loaded
document.addEventListener('DOMContentLoaded', () => replaceText());

// callback function to create p element with id='text' and replace text
function replaceText() {
    // locate p element w/ id='text'
    let targetText = document.getElementById('text');
    // replace text value 
    targetText.textContent = 'This is really cool!';
}