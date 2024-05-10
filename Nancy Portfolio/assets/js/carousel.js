const container = document.getElementById('carousel');
const smallContainer = document.getElementById('smallCarousel');
const images = container.getElementsByTagName('img');
let scrollPos = 0;
let scrollDirection = 'right'; // Initial scroll direction for carousel
const speed = 2; // Adjust speed as needed for carousel
let scrollInterval;

function scroll() {
  if (scrollDirection === 'right') {
    scrollPos += speed;
    if (scrollPos >= container.scrollWidth - container.clientWidth) {
      scrollDirection = 'left';
    }
  } else {
    scrollPos -= speed;
    if (scrollPos <= 0) {
      scrollDirection = 'right';
    }
  }

  container.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}

scrollInterval = setInterval(scroll, 75);

// // Stop scrolling on mouse hover
// container.addEventListener('mouseenter', () => {
//   clearInterval(scrollInterval);
// });

// // Resume scrolling on mouse leave
// container.addEventListener('mouseleave', () => {
//   scrollInterval = setInterval(scroll, 50);
// });

// Small Carousel
let smallScrollPos = 0;
let smallScrollDirection = 'right'; // Initial scroll direction for smallCarousel
const smallSpeed = 2; // Adjust speed as needed for smallCarousel
let smallScrollInterval;

function smallScroll() {
  if (smallScrollDirection === 'right') {
    smallScrollPos += smallSpeed;
    if (smallScrollPos >= smallContainer.scrollWidth - smallContainer.clientWidth) {
      smallScrollDirection = 'left';
    }
  } else {
    smallScrollPos -= smallSpeed;
    if (smallScrollPos <= 0) {
      smallScrollDirection = 'right';
    }
  }

  smallContainer.scrollTo({
    left: smallScrollPos,
    behavior: 'smooth'
  });
}

smallScrollInterval = setInterval(smallScroll, 50);

// // Stop scrolling on mouse hover
// smallContainer.addEventListener('mouseenter', () => {
//   clearInterval(smallScrollInterval);
// });

// // Resume scrolling on mouse leave
// smallContainer.addEventListener('mouseleave', () => {
//   smallScrollInterval = setInterval(smallScroll, 50);
// });
