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
