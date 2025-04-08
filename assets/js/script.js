var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleCaptions'), {
    interval: 3000,
    wrap: true
});


function toggleMenu() {
    const nav = document.getElementById('burgerNav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}