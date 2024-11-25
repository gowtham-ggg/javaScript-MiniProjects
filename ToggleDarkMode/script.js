const checkbox = document.getElementById('toggle');
const body = document.body;

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.style.backgroundColor = 'black'; // Dark mode
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white'; 
        body.style.color = 'black';
    }
});