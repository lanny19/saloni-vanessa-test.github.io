document.addEventListener("DOMContentLoaded", function() {
    var animateServices = document.querySelector('.animate-services');
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    // Function to handle scroll event
    function handleScroll() {
        if (isInViewport(animateServices)) {
            animateServices.classList.add('animate');
        } else {
            animateServices.classList.remove('animate');
        }
    }
  
    // Call handleScroll on page load
    handleScroll();
  
    // Call handleScroll on scroll event
    window.addEventListener('scroll', handleScroll);
});



function closeNav(){
    var navMenu = document.getElementById("mainNav");
    var navButton = document.getElementById("closeButton");
    var burgerButton = document.getElementById("hideButton");
    document.body.classList.remove('disable-scroll');
    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
      navButton.style.display = "block";
      burgerButton.style.display = "block";
      
  } else {
      navMenu.style.display = "block";
      navButton.style.display = "block";
      burgerButton.style.display = "block";
  }
}

// Get all <a> elements
const links = document.querySelectorAll('a');

// Get the target element
const mainPageLink = document.getElementById('main-page');

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Get the scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Check if scrolling up
  if (scrollPosition === 0) {
    // Remove 'active' class from all <a> elements
    links.forEach(link => {
      link.classList.remove('active');
    });
    // Add 'active' class to the target element
    mainPageLink.classList.add('active');
  }
});


// Get the main-page and welcome elements
const mainLink = document.getElementById('main-page');
const welcomeSection = document.getElementById('welcome');

// Listen for click events on the main-page link
mainLink.addEventListener('click', (event) => {
  // Prevent default link behavior
  event.preventDefault();
  
  // Check if the welcome section is displayed as flex
  if (getComputedStyle(welcomeSection).display === 'flex') {
    // Scroll up to the welcome section
    welcomeSection.scrollIntoView({ behavior: 'smooth' });
  }
});



