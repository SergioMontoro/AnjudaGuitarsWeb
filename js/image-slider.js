showImage1(0);
showImage2(0);

var counter1 = 0;
var counter2 = 0;

function plusSlides1(n) {
    showImage1(counter1 += n);
}

function showImage1(n) {
    var i;
    var image1 = document.getElementsByClassName('imageSlider1');

    for (i = 0; i < image1.length; i++) {
        image1[i].style.display = 'none';
    }

    if (n > 2) {counter1 = 0; n = 0;}
    if (n < 0) {counter1 = 2; n = 2}

    image1[n].style.display = 'block';
}


function plusSlides2(n) {
    showImage2(counter2 += n);
}

function showImage2(n) {
    var i;
    var image2 = document.getElementsByClassName('imageSlider2');

    for (i = 0; i < image2.length; i++) {
        image2[i].style.display = 'none';
    }

    if (n > 2) {counter2 = 0; n = 0;}
    if (n < 0) {counter2 = 2; n = 2}

    image2[n].style.display = 'block';

}