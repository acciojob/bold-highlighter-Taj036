// Store the NodeList outside the functions
const strongTags = document.querySelectorAll('strong');

function highlight() {
    // Use the stored NodeList
    strongTags.forEach(tag => {
        tag.addEventListener('mouseover', (e) => {
            e.target.style.color = 'green';
        });
    });
}

function return_normal() {
    // Use the stored NodeList
    strongTags.forEach(tag => {
        tag.addEventListener('mouseout', (e) => {
            e.target.style.color = 'black';
        });
    });
}
