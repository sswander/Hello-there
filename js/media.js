jQuery(document).ready(function ($) {
    var images = [{
        url: "img/media/img1.jpg",
		ref: "blog.html#first-night",
        alt: "img1"
    }, {
        url: "img/media/img2.jpg",
		ref: "blog.html#meiji-kino-onsen",
        alt: "img2"
    }, {
        url: "img/media/img3.jpg",
		ref: "blog.html#meiji-kino-onsen",
        alt: "img3"
    }, {
        url: "img/media/img4.jpg",
		ref: "blog.html#ueno-zoo",
        alt: "img4"
    }, {
        url: "img/media/img5.jpg",
		ref: "blog.html#ueno-zoo",
        alt: "img5"
    }, {
        url: "img/media/img6.jpg",
		ref: "blog.html#meiji-kino-onsen",
        alt: "img6"
    }, {
        url: "img/media/img7.jpg",
		ref: "blog.html#meiji-kino-onsen",
        alt: "img7"
    }, {
        url: "img/media/img8.jpg",
		ref: "blog.html#meiji-kino-onsen",
        alt: "img8"
    }, {
        url: "img/media/img9.jpg",
		ref: "blog.html#ueno-zoo",
        alt: "img9"
    }, {
        url: "img/media/img10.jpg",
		ref: "blog.html#ueno-zoo",
        alt: "img10"
    }, {
        url: "img/media/img11.jpg",
		ref: "blog.html#ueno-zoo",
        alt: "img11"
    }];

    $.each(images, function (index, image) {
		var element = $('<div class="media-img"><a href="' + image.ref + '"><img src="' + image.url + '" alt="' + image.alt + '" /></a></div>')
		var col = index%3;

		if(col == 0){
			element.appendTo("#reel-col1");
		} else if(col == 1) {
			element.appendTo("#reel-col2");
		} else {
			element.appendTo("#reel-col3");
		}
	});
});