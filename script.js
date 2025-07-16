const imageFiles = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const images = imageFiles.map(file => ({
  src: "assets/images/" + file,
}));

window.onload = function () {
  const random = images[Math.floor(Math.random() * images.length)];
  document.getElementById("art-image").src = random.src;
  document.getElementById("art-title").textContent = random.title;
};

const popup = document.getElementById("bio-popup");
const name = document.getElementById("name");
const close = document.querySelector(".close");

name.onclick = () => (popup.style.display = "block");
close.onclick = () => (popup.style.display = "none");
window.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};
