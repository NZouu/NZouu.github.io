document.addEventListener("DOMContentLoaded", function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.close');
  const images = document.querySelectorAll('.lightbox-trigger');

  images.forEach(image => {
      image.addEventListener('click', function() {
          lightbox.style.display = 'flex';
          lightboxImg.src = this.src;
          lightboxCaption.textContent = this.getAttribute('data-caption');
      });
  });

  closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', function(event) {
      if (event.target !== lightboxImg) {
          lightbox.style.display = 'none';
      }
  });
});
