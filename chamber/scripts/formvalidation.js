document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    const currentTimestamp = new Date().toISOString();
    timestampField.value = currentTimestamp;
});

function validateForm() {
    // Existing form validation logic

    // If validation passes, redirect to record.html
    window.location.href = 'record.html';

    return false; // To prevent the default form submission
}