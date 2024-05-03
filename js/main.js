// Get all the navigation links
const navLinks = document.querySelectorAll('nav li a');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior

    // Remove the 'active' class from all links
    navLinks.forEach(l => l.classList.remove('active'));

    // Add the 'active' class to the clicked link
    e.target.classList.add('active');
  });
});




function toggleNav() {
  var navMenu = document.getElementById("mainNav");
  var navButton = document.getElementById("hideButton");
  
  if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
      navButton.style.display = "block";
  } else {
      navMenu.style.display = "block";
      navButton.style.display = "none";
  }
}


function closeBut(){
  var navMenu = document.getElementById("mainNav");
  var navButton = document.getElementById("closeButton");
  var burgerButton = document.getElementById("hideButton");
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

document.addEventListener("DOMContentLoaded", function() {
  var moreDetailButton = document.querySelector(".more-detail");
  var servicesSection = document.querySelector(".services");

  moreDetailButton.addEventListener("click", function() {
    // Scroll to the services section with smooth animation
    servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
