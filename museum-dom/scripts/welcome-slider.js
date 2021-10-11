const wsNext = document.querySelector('.ws-btn-right')
const wsPrev = document.querySelector('.ws-btn-left')
const wsSlides = document.querySelectorAll('.ws-slide')
const wsDots = document.querySelectorAll('.ws-dots')
const wsNumber = document.querySelector('.ws-numbers-wrapper')
const wsMainSlide = document.querySelector('.ws-slider')
let wsIndex = 0;
let wsPrevIndex = 0;
let wsIsSliding = 0;
let xStart = 0;
let xEnd = 0;


//Direction mouse move
function mouseMove() {
    if (xStart - xEnd > 0 && xEnd && xStart && !wsIsSliding) {
        wsNextSlide()
    } else if (xStart - xEnd < 0 && xEnd && xStart && !wsIsSliding) {
        wsPrevSlide()
    }
    xStart = 0
    xEnd = 0
}

//Check mousedows
wsMainSlide.addEventListener('mousedown', e => {
    if (!xStart) {
        xStart = e.offsetX;
    } else {
        xEnd = e.offsetX
        mouseMove()
    }
});
 
//Check mouseout for prevent issue
wsMainSlide.addEventListener('mouseout', e => {
    if (xStart) {
        xEnd = e.offsetX
        mouseMove()
    }
    
})

//Check mouseup
wsMainSlide.addEventListener('mouseup', e => {
    xEnd = e.offsetX;
    mouseMove()
});


const wsActiveSlide = (n, direction) => {
    
    wsIsSliding = 1
    wsSlides[wsPrevIndex].classList.add('ws-super-active')
    for (slide of wsSlides) {
        slide.classList.remove('ws-active')
    }
    wsNumber.innerHTML = `0${n+1}&nbsp;&nbsp;|&nbsp;&nbsp;05`
    wsSlides[n].classList.add('ws-active')
    wsSlides[wsPrevIndex].classList.add(direction)
    wsSlides[wsPrevIndex].addEventListener("animationend", () => {
        wsSlides[wsPrevIndex].classList.add('ws-hidden')
        wsSlides[wsPrevIndex].classList.remove(direction)
        setTimeout(() => {
            wsSlides[wsPrevIndex].classList.remove('ws-super-active')
            wsSlides[wsPrevIndex].classList.remove('ws-hidden')
            wsPrevIndex = n
            wsIsSliding = 0
        }, 0)
    });

}

const wsActiveDot = n => {
    for (dot of wsDots) {
        dot.classList.remove('ws-active')
    }
    wsDots[n].classList.add('ws-active')
}

const wsChangeSlide = (x, direction = 'dot') => {
    wsActiveSlide(x, direction)
    wsActiveDot(x)
}

const wsNextSlide = () => {
    if (wsIndex === wsSlides.length - 1) {
        wsIndex = 0;
        wsChangeSlide(wsIndex, 'go-left')
    } else {
        wsIndex++;
        wsChangeSlide(wsIndex, 'go-left')
    }
}

const wsPrevSlide = () => {
    if (wsIndex === 0) {
        wsIndex = wsSlides.length - 1;
        wsChangeSlide(wsIndex, 'go-right')
    } else {
        wsIndex--;
        wsChangeSlide(wsIndex, 'go-right')
    }
}

wsNext.addEventListener('click', () => {
    if (!wsIsSliding) wsNextSlide()
    }
)

wsPrev.addEventListener('click', () => {
    if (!wsIsSliding) wsPrevSlide()
    }
)

for (let i = 0; i < wsDots.length; i++) {
    wsDots[i].addEventListener('click', () => {
        if (i!== wsPrevIndex && !wsIsSliding) {
            if (i < wsPrevIndex) wsChangeSlide(i, 'go-left')
            else wsChangeSlide(i, 'go-right')
            wsIndex = i
        }
    })
}

