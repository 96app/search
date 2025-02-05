// Toggle the visibility of the buttons when the Google Icon Button is clicked
document.getElementById('googleIconBtn').addEventListener('click', function() {
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.style.display = (buttonContainer.style.display === 'none' || buttonContainer.style.display === '') ? 'block' : 'none';
});

// Open Register form

// Open the form when the button is clicked
document.getElementById('addBusinessBtn').addEventListener('click', function() {
    document.getElementById('addBusinessFormContainer').style.display = 'flex';
});

// Close the form when the close button is clicked
document.querySelector('.close-form-btn').addEventListener('click', function() {
    document.getElementById('addBusinessFormContainer').style.display = 'none';
});

