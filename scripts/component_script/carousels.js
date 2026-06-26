
// ADding borders to the prev-img buttons as the bootstrap only works with the carousel-indicators class to give the active class when the image is actually active,
// so this script manually using script adds and removes active class so the border  is added to image
const carousel = document.getElementById('fund-image-slider');

carousel.addEventListener('slid.bs.carousel', function (e) {
    document.querySelectorAll('.img-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document
        .querySelector(`.img-btn[data-bs-slide-to="${e.to}"]`)
        .classList.add('active');
});


