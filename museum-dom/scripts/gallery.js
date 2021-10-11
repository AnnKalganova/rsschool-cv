// const galleryPictureContainer =  document.querySelector(".picture-inner-container")

// function randomGalleryPic() {
//   let imgArray = []
//   for (let i = 0; i < 15; i++) {
//     if (i < 2) {
//       imgArray.push(`<img class="galery-img horizontal gallery-grid-nonvisible" src="./assets/img/gallery-pictures/galery${i+1}.jpg" alt="gallery img${i+1}">`)
//     } else if (i < 7) {
//       imgArray.push(`<img class="galery-img square gallery-grid-nonvisible" src="./assets/img/gallery-pictures/galery${i+1}.jpg" alt="gallery img${i+1}">`)
//     } else {
//       imgArray.push(`<img class="galery-img vertical gallery-grid-nonvisible" src="./assets/img/gallery-pictures/galery${i+1}.jpg" alt="gallery img${i+1}">`)
//     }
//   }

//   imgArray.sort((a, b) => Math.random() - 0.5)

//   imgArray.forEach(item => galleryPictureContainer.innerHTML += item)
// }

// randomGalleryPic()

const galleryFullGridPic = document.querySelectorAll('.gallery-img')

function imgIsVisible(item) {

  let coordinates = item.getBoundingClientRect()
  let windowHeight = document.documentElement.clientHeight

  let topVisible = coordinates.top > 0 && coordinates.top < windowHeight
  let bottomVisible = coordinates.bottom < windowHeight && coordinates.bottom > 0;

  return topVisible || bottomVisible;
}

function imgShowVisible() {
  galleryFullGridPic.forEach(item => {
    if (imgIsVisible(item)) {
      item.classList.remove('gallery-grid-nonvisible')
    } else {
      item.classList.add('gallery-grid-nonvisible')
    }  
  })
}

imgShowVisible();
window.onscroll = imgShowVisible;