var bgOverlayGallery = document.getElementsByClassName('overlay-gallery');
var header = document.getElementsByClassName('navbar');
var expandedImg = document.getElementById("expanded-img");
var stockImg;

function showOverlayGallery(n) {
    header[0].style.position = 'relative';
    bgOverlayGallery[0].style.display = 'block';

    switch(n) {
        case 0:
            stockImg = document.getElementsByClassName("stock-img__blue");
            expandedImg.src = stockImg[0].src;

            for (var i = 0; i < stockImg.length; i++) {
                stockImg[i].style.display = 'block';
            }

            break;
        case 1:
            stockImg = document.getElementsByClassName("stock-img__green");
            expandedImg.src = stockImg[0].src;

            for (var i = 0; i < stockImg.length; i++) {
                stockImg[i].style.display = 'block';
            }

            break;
        case 2:
            stockImg = document.getElementsByClassName("stock-img__sunburst");
            expandedImg.src = stockImg[0].src;

            for (var i = 0; i < stockImg.length; i++) {
                stockImg[i].style.display = 'block';
            }

            break;
    }
}

function changeImage(imgClicked) {
    expandedImg.src = imgClicked.src;
}

function hideOverlayGallery() {
    header[0].style.position = 'sticky';
    bgOverlayGallery[0].style.display = 'none';
    for (var i = 0; i < stockImg.length; i++) {
        stockImg[i].style.display = 'none';
    }
}