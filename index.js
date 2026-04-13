const greatCarousel = document.getElementById('mainCarousel');

function greatCarouselMove() {

    setTimeout(() => { greatCarousel.scrollTo({ left: 2000 }) }, 5000)

    setTimeout(() => { greatCarousel.scrollTo({ left: 3000 }) }, 10000)

    setTimeout(() => { greatCarousel.scrollTo({ left: 50000 }) }, 15000)

    setTimeout(() => { greatCarousel.scrollTo({ left: 0 }); greatCarouselMove() }, 20000)

}

greatCarouselMove()



