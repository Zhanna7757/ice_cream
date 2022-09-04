let navItems = document.querySelectorAll(".nav_item");
for (nav_item of navItems) {
    let textLength = nav_item.innerText.length;
    console.log(nav_item, textLength);
    nav_item.style = `--tl:${textLength}`;
}

$(document).ready(function () {
    // last-word
    let rewords = document.querySelectorAll('.b_review_text');
    if (rewords.length > 0) {
        rewords.forEach(el => {
            let words = el.innerText.split(' ').filter(w => w.length);
            words[words.length - 1] = `<span>${words[words.length - 1]}</span>`
            el.innerHTML = words.join(' ');
            // console.log(words)
        });
    }

    let slider3 = document.querySelector('.b_reviews_slider2'), slides3 = slider3.children;
    if (slides3.length < 4) {
        let n = slides3.length;
        for (var i = 0; i < n; i++) {
            slider3.appendChild(slides3[i].cloneNode(true))
        }
    }
    let slider = document.querySelector('.b_reviews_slider'), slides = slider.children;
    if (slides.length < 4) {
        let n = slides.length;
        for (var i = 0; i < n; i++) {
            slider.appendChild(slides[i].cloneNode(true))
        }
    }
    $('.b_reviews_slider2').slick({
        slidesToShow: 3, arrows: true,
        asNavFor: '.b_reviews_slider',
        centerPadding: 0,
        centerMode: true,


    });
    $('.b_reviews_slider').slick({
        slidesToShow: 1, arrows: false, asNavFor: '.b_reviews_slider2'

    });

});


