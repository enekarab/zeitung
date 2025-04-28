var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'), {
    interval: 3000,
    wrap: true
});

var myCarousel2 = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions2'), {
  interval: 3000,
  wrap: true
});

function toggleMenu() {
    const nav = document.getElementById('burgerNav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function showModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('overlay').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('overlay').style.display = 'none';
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
