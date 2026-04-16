const greatCarousel = document.getElementById('mainCarousel');

const mainCarouselRadio = document.getElementsByClassName('mainCarouselRadio')

var viwerWidth = window.innerWidth;

function greatCarouselMove() {

    mainCarouselRadio[0].checked = true;

    setTimeout(() => { greatCarousel.scrollTo({ left: viwerWidth }); viwerWidth = window.innerWidth; mainCarouselRadio[1].checked = true; }, 5000)

    setTimeout(() => { greatCarousel.scrollTo({ left: viwerWidth * 2 }); viwerWidth = window.innerWidth; mainCarouselRadio[2].checked = true; }, 10000)

    setTimeout(() => { greatCarousel.scrollTo({ left: viwerWidth * 3 }); viwerWidth = window.innerWidth; mainCarouselRadio[3].checked = true; }, 15000)

    setTimeout(() => { greatCarousel.scrollTo({ left: 0 }); viwerWidth = window.innerWidth; greatCarouselMove() }, 20000)

}

greatCarouselMove();




