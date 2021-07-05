var backOverlay = document.getElementsByClassName('backOverlay');
var header = document.getElementsByClassName('header');
var mainImage = document.getElementsByClassName('mainImage');
var images = document.getElementsByClassName('images');
var images1 = document.getElementsByClassName('images1');
var images2 = document.getElementsByClassName('images2');
var changeValue;

function showOverlayGallery(n) {
    header[0].style.position = 'relative';
    backOverlay[0].style.display = 'block';

    switch(n) {
        case 0:
            mainImage[0].style.backgroundImage = "url(" + images[0].src + ")";
            for (var i = 0; i < images.length; i++) {
                images1[i].style.display = 'none';
                images2[i].style.display = 'none';
                images[i].style.display = 'block';
            }
            changeValue = 0;
            break;
        case 1:
            mainImage[0].style.backgroundImage = "url(" + images1[0].src + ")";
            for (var i = 0; i < images.length; i++) {
                images[i].style.display = 'none';
                images2[i].style.display = 'none';
                images1[i].style.display = 'block';
            }
            changeValue = 1;
            break;
        case 2:
            mainImage[0].style.backgroundImage = "url(" + images2[0].src + ")";
            for (var i = 0; i < images.length; i++) {
                images[i].style.display = 'none';
                images1[i].style.display = 'none';
                images2[i].style.display = 'block';
            }
            changeValue = 2;
            break;
    }
}

function changeImage(n) {
    if (changeValue == 0) {
        for (var i = 0; i < images.length; i++) {
            if (i == n) {
                mainImage[0].style.backgroundImage = "url(" + images[i].src + ")";
            }
        }
    }
    if (changeValue == 1) {
        for (var i = 0; i < images1.length; i++) {
            if (i == n) {
                mainImage[0].style.backgroundImage = "url(" + images1[i].src + ")";
            }
        }
    }
    if (changeValue == 2) {
        for (var i = 0; i < images2.length; i++) {
            if (i == n) {
                mainImage[0].style.backgroundImage = "url(" + images2[i].src + ")";
            }
        }
    }
}

function hideOverlayGallery() {
    backOverlay[0].style.display = 'none';
    header[0].style.position = 'sticky';
}