$('.carousel-1').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        920: {
            items: 3
        },
        1300: {
            items: 4
        }
    }
})

$('.owl-three').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})

$('.owl-two').owlCarousel({
    loop: true,
    margin: 32,
    nav: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        620: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})

var myModal = document.getElementyId('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("nav-shrink");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.addEventListener("scroll", function () {
    toggleBacktop();
});


