function openDoor() {
  document.getElementById("lock").classList.add("open");
  document.querySelector(".centerBtn").style.display = "none";


  // 🎵 Play song on click
  let song = document.getElementById("birthdaySong");
  song.play().catch(err => console.log(err));

  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("lock").style.display = "none";
  }, 600);
}


function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/* SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

/* GALLERY */
const images = [
  "./images-and-icons/IMG-20260209-WA0005.jpg",
"./images-and-icons/IMG-20260209-WA0006.jpg",
"./images-and-icons/IMG-20260209-WA0007.jpg",
"./images-and-icons/IMG-20260209-WA0012.jpg",
"./images-and-icons/IMG-20260209-WA0016.jpg",
"./images-and-icons/IMG-20260209-WA0017.jpg",
"./images-and-icons/IMG-20260209-WA0018.jpg",
"./images-and-icons/IMG-20260209-WA0024.jpg",
"./images-and-icons/IMG-20260209-WA0026.jpg",
"./images-and-icons/IMG-20260209-WA0027.jpg",
"./images-and-icons/IMG-20260209-WA0030.jpg",
"./images-and-icons/IMG-20260209-WA0034.jpg",
"./images-and-icons/IMG-20260209-WA0042.jpg",
"./images-and-icons/IMG-20260209-WA0044.jpg",
"./images-and-icons/IMG-20260209-WA0045.jpg",
"./images-and-icons/IMG-20260209-WA0052.jpg",
"./images-and-icons/IMG-20260209-WA0056.jpg",
"./images-and-icons/IMG-20260209-WA0062.jpg",
"./images-and-icons/IMG-20260209-WA0064.jpg",
"./images-and-icons/IMG-20260209-WA0068.jpg",
"./images-and-icons/IMG-20260209-WA0070.jpg",
"./images-and-icons/IMG-20260209-WA0076.jpg",
"./images-and-icons/IMG-20260209-WA0077.jpg",
"./images-and-icons/IMG-20260209-WA0078.jpg",
"./images-and-icons/IMG-20260209-WA0079.jpg",
"./images-and-icons/IMG-20260209-WA0080.jpg",
"./images-and-icons/IMG-20260209-WA0081.jpg",
"./images-and-icons/IMG-20260209-WA0084.jpg",
"./images-and-icons/IMG-20260209-WA0085.jpg",
"./images-and-icons/IMG-20260209-WA0090.jpg",
"./images-and-icons/IMG-20260209-WA0091.jpg",
"./images-and-icons/IMG-20260209-WA0095.jpg",
"./images-and-icons/IMG-20260209-WA0097.jpg",
"./images-and-icons/IMG-20260209-WA0098.jpg",
"./images-and-icons/IMG-20260209-WA0100.jpg",
"./images-and-icons/IMG-20260209-WA0103.jpg",
"./images-and-icons/IMG-20260209-WA0108.jpg",
"./images-and-icons/IMG-20260209-WA0110.jpg",
"./images-and-icons/IMG-20260209-WA0115.jpg",
"./images-and-icons/IMG-20260209-WA0117.jpg",
"./images-and-icons/IMG-20260209-WA0119.jpg",
"./images-and-icons/IMG-20260209-WA0120.jpg"

];

const uniquePopup = document.getElementById("uniquePopup");
const uniquePopupThumbs = document.getElementById("uniquePopupThumbs");
const uniqueLightbox = document.getElementById("uniqueLightbox");
const uniqueLightImg = document.getElementById("uniqueLightImg");

let currentImageIndex = 0;

images.forEach((src, i) => {
  let img = document.createElement("img");
  img.src = src;
  img.onclick = () => openUniqueLightbox(i);
  uniquePopupThumbs.appendChild(img);
});

function openUniquePopup() {
  uniquePopup.style.display = "flex";
}

function closeUniquePopup() {
  uniquePopup.style.display = "none";
}

function openUniqueLightbox(i) {
  currentImageIndex = i;
  uniqueLightImg.src = images[i];
  uniqueLightbox.style.display = "flex";
}

function closeUniqueLightbox() {
  uniqueLightbox.style.display = "none";
}

function nextUniqueImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  uniqueLightImg.src = images[currentImageIndex];
}

function prevUniqueImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  uniqueLightImg.src = images[currentImageIndex];
}

