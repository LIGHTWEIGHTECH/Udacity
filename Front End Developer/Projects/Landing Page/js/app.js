/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.querySelector('#navbar__list');
const sect1 = document.querySelector('#section1');
const sect2 = document.querySelector('#section2');
const sect3 = document.querySelector('#section3');
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
const navBuilder = () => {
    for (let section of sections) {
    let temp = `<li class="menu__link">${section.querySelector('h2').innerText}</li>`;
    navbar.innerHTML += temp;
    };
};

navBuilder();

// Scroll to section on link click

// Set sections as active


