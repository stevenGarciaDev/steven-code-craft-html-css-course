console.log('dropdown-menu.js loaded');

const navMenu = document.querySelector('.nav-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navListItemsContainer = document.querySelector('nav ul');

navMenu.addEventListener('click', function (event) {
    // Toggle icon visibility
    if (menuIcon.style.display === 'none') {
        // Close the dropdown menu
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        navListItemsContainer.classList.toggle('hidden');
    } else {
        // Open the dropdown menu
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navListItemsContainer.classList.toggle('hidden');
    }
});