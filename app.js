const heroImg = document.getElementById('heroImg');
const heroHeading = document.getElementById('heroHeading');
const heroText = document.getElementById('heroText');

//initial load of hero
if (window.innerWidth > 1024) {
  console.log('desktop');
} else if (window.innerWidth <= 1024) {
  heroHeading.textContent = 'an instock solution coming soon';
  heroText.textContent = 'new website is under construction';
} else if (window.innerWidth <= 375) {
}

//function for changes on resize
//if window size is desktop
//tablet
//phone
// window.addEventListener('resize',);
