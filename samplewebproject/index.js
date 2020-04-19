document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const { value } = document.querySelector('input');
    const header = document.querySelector('h1');
    if (value.includes('@')) {
        // must be valid
        header.innerHTML = 'looks good';
    } else {
        // must be invalid
        header.innerHTML = 'invalid email';
    }
});
