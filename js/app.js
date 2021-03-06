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
const sections = document.querySelectorAll("section");
const Ul = document.getElementById("navbar__list");

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

// build the nav fucnction
function Builder() {
    sections.forEach((section) => {
        const aAttribute = document.createElement("a");
        const newLink = document.createElement("li");
        aAttribute.textContent = section.getAttribute("data-nav");
        aAttribute.setAttribute('linktosec', section.getAttribute("id"));
        newLink.appendChild(aAttribute);
        Ul.appendChild(newLink);
    })
    const activeLi = document.querySelector("a");
    activeLi.setAttribute('class', "your-active-li");
}

// Check if the target section is near top of viewport ?
function viewportChecker(targetSection) {
    const sectionView = targetSection.getBoundingClientRect();
    if (sectionView.top >= -50 && sectionView.top < 394) {
        return true;
    } else {
        return false;
    }
}

// Set active class to target section.
function setActiveClass() {
    for (section of sections) {
        if (viewportChecker(section) == true) {
            if (!section.classList.contains('your-active-class')) {
                const activeSec = document.getElementsByClassName('your-active-class')[0];
                activeSec.classList.remove('your-active-class')
                section.classList.add('your-active-class');
            }
        }
    }
}


// Set active class to target li.
function setActiveLi() {
    const allLinks = document.querySelectorAll("a");
    const activeSection = document.getElementsByClassName('your-active-class')[0];
    console.log(activeSection);
    allLinks.forEach((link) => {
        if (link.getAttribute("linktosec") == activeSection.getAttribute("id")) {
            if (!link.classList.contains('your-active-li')) {
                const activeLi = document.getElementsByClassName('your-active-li')[0];
                activeLi.classList.remove('your-active-li')
                link.classList.add('your-active-li');
            }
        }
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
Builder();

// Scroll to section 
const allLinks = document.querySelectorAll("a");
allLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const targetSection = document.getElementById(link.getAttribute("linkToSec"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    })
})

// Set sections & li as active
document.addEventListener('scroll', setActiveClass);
document.addEventListener('scroll', setActiveLi);