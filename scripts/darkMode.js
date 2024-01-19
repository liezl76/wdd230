document.addEventListener('DOMContentLoaded', function () {
    const modeButton = document.getElementById('mode');
    const main = document.querySelector('main');
    const body = document.body;

    modeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            main.style.background = '#000';
            main.style.color = '#fff';
            modeButton.textContent = '🔆';
        } else {
            main.style.background = '#eee';
            main.style.color = '#000';
            modeButton.textContent = '🕶️';
        }
    });
});