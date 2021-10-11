const explorePictOverlay = document.querySelector(".explore-pict-overlay");
const explorePicResize = window.matchMedia('(max-width: 767px)')

var h = 700
var w = 720
let posCorrection = 20

explorePicResize.addListener(checkExploreSize)

function checkExploreSize (e) {
    if (e.media === '(max-width: 767px)') {
        h = 400
        w = 388
        posCorrection = 10
        console.log('3');
    } else {
        h = 700
        w = 720
        posCorrection = 20
    }
}


function initComparisons() {
    
    compareImages(explorePictOverlay);

    function compareImages(img) {
        var slider, img, clicked = 0;
        // img.style.width = (w / 2) + "px";
        img.style.width = w * 0.61 + "px";
        //положение оверлея согласно макету

        slider = document.querySelector('.img-comp-slider')
        //выбираем картинку слайдера

        slider.style.left = w * 0.58 + 3 + "px";
        //положение ползунка слайдера согласно макету

        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchstop", slideFinish);

        //запрет других действий во время перемещения
        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        //слайдер не активен
        function slideFinish() {
            clicked = 0;
        }
      
        function slideMove(e) {
            var pos;
            if (clicked == 0) return false;
            pos = getCursorPos(e)
            //позиция Х курсора

            if (pos < posCorrection) pos = posCorrection;
            if (pos > w - posCorrection) pos = w - posCorrection;
            // Крайние положения слайдера с учетом его ширины

            slide(pos);
            //двигаем оверлей
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            //позиция Х картинки
            a = img.getBoundingClientRect();
            //расчет Х координат курсора относительно картинки
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            img.style.width = x + "px";
            //изменяе размер картинки
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
            //расчет позиции слайдера
        }
    }
  }

  initComparisons();