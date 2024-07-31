
VANTA.WAVES({
    el: "#vanta-canvas",
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x000018,
    shininess: 17.00,
    waveHeight: 9.50,
    zoom: 1.02
  })
  let lastUpdate = 0;
  const fpsLimit = 30;
  
  function updateAnimation(timestamp) {
    if (timestamp - lastUpdate > 1000 / fpsLimit) {
      lastUpdate = timestamp;
      vantaEffect.update(); // Trigger update if applicable
    }
    requestAnimationFrame(updateAnimation);
  }
  
  requestAnimationFrame(updateAnimation);
  
const imagePaths = [
  "./p2.jpg",
  "./p5.jpg",
  "./p8.jpg",
  "./p6.jpg",
  "./p10.jpg",
  "./p11.jpg",
  "./p12.jpg",
  "./p14.jpg",
  "./p4.jpg",
  "./m10.jpg"
];

const gallery = document.getElementById("slider");
const left = document.getElementsByClassName("left")[0];
left.classList.add("disabled");
const right = document.getElementsByClassName("right")[0];
const images = 10;
// const imagesUrl = "https://picsum.photos/seed/{seed}/500/350";
var selected = 0;

function init() {
  for (var i = 0; i < images; i++) {
    var imageWrapper = document.createElement("div");
    imageWrapper.id = `image_${i}`;
    imageWrapper.classList.add("wrapper");
    if (i === selected) {
      imageWrapper.classList.add("selected");
    }
    var image = document.createElement("img");
    image.src = imagePaths[i];
    imageWrapper.appendChild(image);
    var mirrored = image.cloneNode();
    mirrored.classList.add("flipped");
    imageWrapper.appendChild(mirrored);
    gallery.appendChild(imageWrapper);
  }
}

init();

right.onclick = function () {
  selected++;
  if (selected > images - 1) {
    selected = images - 1;
  }
  handleSelection();
};

left.onclick = function () {
  selected--;
  if (selected < 0) {
    selected = 0;
  }
  handleSelection();
};

function handleSelection() {
  var images = document.getElementsByClassName("wrapper");
  if (selected === images.length - 1) {
    right.classList.add("disabled");
  } else {
    right.classList.remove("disabled");
  }
  if (selected === 0) {
    left.classList.add("disabled");
  } else {
    left.classList.remove("disabled");
  }
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (img.id === `image_${selected}`) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  }
}
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
  });
});