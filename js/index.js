jQuery(document).ready(function ($) {
    var images = [{
        url: "img/media/img1.jpg",
        alt: "img1"
    }, {
        url: "img/media/img2.jpg",
        alt: "img2"
    }, {
        url: "img/media/img3.jpg",
        alt: "img3"
    }, {
        url: "img/media/img4.jpg",
        alt: "img4"
    }, {
        url: "img/media/img5.jpg",
        alt: "img5"
    }, {
        url: "img/media/img6.jpg",
        alt: "img6"
    }, {
        url: "img/media/img7.jpg",
        alt: "img7"
    }, {
        url: "img/media/img8.jpg",
        alt: "img8"
    }, {
        url: "img/media/img9.jpg",
        alt: "img9"
    }, {
        url: "img/media/img10.jpg",
        alt: "img10"
    }, {
        url: "img/media/img11.jpg",
        alt: "img11"
    }];

    // http://css-tricks.com/snippets/javascript/shuffle-array/
    images.sort(function () { return 0.5 - Math.random(); });

    $.each(images, function (index, image) {

        var element = $('<div class="item"><a href="media.html"><img src="' + image.url + '" alt="' + image.alt + '" /></a></div>')

        if (index === 0) {
            element.addClass("active");   
        }

        element.appendTo("div.carousel-inner");
    });

    $('.carousel').carousel({
      interval: 2000,
    })
});