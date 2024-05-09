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

document.getElementById('hideButton').addEventListener('click', function() {
  document.body.classList.add('disable-scroll');
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.body.classList.remove('disable-scroll');
});



document.addEventListener("DOMContentLoaded", function() {
  // Get the button element
  var footerActiveBtn = document.getElementById('footer-active');
  
  // Get the footer element
  var footer = document.querySelector('.footer');

  // Add click event listener to the button
  footerActiveBtn.addEventListener('click', function() {
      // Calculate the offset of the footer from the top of the page
      var footerOffset = footer.offsetTop;

      // Scroll smoothly to the footer
      window.scrollTo({
          top: footerOffset,
          behavior: 'smooth'
      });
  });
});



//other pages...
document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.sent-apply');
  var welcome = document.querySelector('.welcome');
  var services = document.querySelector('.services');

  button.addEventListener('click', function() {
    if (welcome.style.display === 'none' && services.style.display === 'none') {
      welcome.style.display = 'block';
      services.style.display = 'block';
    } else {
      welcome.style.display = 'none';
      services.style.display = 'none';
    }
  });
});



function hideSections() {
  var welcomeSection = document.getElementById("welcome");
  var servicesSection = document.getElementById("services");
  var applySection = document.getElementById("enter-apply");
  var slideSection = document.getElementById("slide");

  // Hide the welcome and services sections
  welcomeSection.style.display = "none !important";
  servicesSection.style.display = "none";
  applySection.style.display = "flex";
  applySection.style.backgroundColor = "#1E2329";
  slideSection.style.display = "none";
}

function showSections() {
  var welcomeSection = document.getElementById("welcome");
  var servicesSection = document.getElementById("services");
  var applySection = document.getElementById("enter-apply");
  var slideSection = document.getElementById("slide")
  // Show the welcome and services sections
  welcomeSection.style.display = "flex ";
  servicesSection.style.display = "block ";
  applySection.style.display = "none ";
  slideSection.style.display = "block";
  
}


document.addEventListener("DOMContentLoaded", function() {
  var moreDetailButton = document.getElementById("serv");
  var servicesSection = document.querySelector(".services");

  moreDetailButton.addEventListener("click", function() {
    // Scroll to the services section with smooth animation
    servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


