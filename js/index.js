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

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Loop through each <a> element
  links.forEach(link => {
    // Check if the <a> element is the target
    if (link.id === 'main-page') {
      // Add 'active' class to the target element
      link.classList.add('active');
    } else {
      // Remove 'active' class from other elements
      link.classList.remove('active');
    }
  });
});


