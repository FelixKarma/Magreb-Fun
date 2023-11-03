document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector('a[href="#contact"]');

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();

    const contactSection = document.getElementById("contact");

    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

const images = [
  "../images/image1.jpg",
  "../images/image2.jpg",
  "../images/image3.jpg",
];

let currentImageIndex = 0;
const banniereDyn = document.querySelector(".banniereDyn");
const imgElement = banniereDyn.querySelector("img");

function changeImage() {
  imgElement.src = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imgElement.style.animation = "fade 10s infinite";
}


setInterval(changeImage, 10000);

function maps(pays) {
  switch (pays) {
    case 'maroc':
      document.getElementById("mapmaroc").style.display = 'block';

      document.getElementById("map").style.display = 'none';
      document.getElementById("mapbtn").style.display = 'block';
      document.getElementById("nameCounty").innerText = pays;
      break;
    case 'mauritanie':
      document.getElementById("mapmauritanie").style.display = 'block'
      document.getElementById("map").style.display = 'none';
      document.getElementById("mapbtn").style.display = 'block';
      document.getElementById("nameCounty").innerText = pays;
      break;
    case 'algerie':
      document.getElementById("mapalgerie").style.display = 'block'
      document.getElementById("map").style.display = 'none';
      document.getElementById("mapbtn").style.display = 'block';
      document.getElementById("nameCounty").innerText = pays;
      break;
    case 'tunisie':
      document.getElementById("maptunisie").style.display = 'block'
      document.getElementById("map").style.display = 'none';
      document.getElementById("mapbtn").style.display = 'block';
      document.getElementById("nameCounty").innerText = pays;
      break;
    case 'libye':
      document.getElementById("maplibye").style.display = 'block'
      document.getElementById("map").style.display = 'none';
      document.getElementById("mapbtn").style.display = 'block';
      document.getElementById("nameCounty").innerText = pays;
      break;

    default:
      document.getElementById("mapmaroc").style.display = 'none';
      document.getElementById("mapmauritanie").style.display = 'none';
      document.getElementById("mapalgerie").style.display = 'none';
      document.getElementById("maptunisie").style.display = 'none';
      document.getElementById("maplibye").style.display = 'none';
      document.getElementById("mapbtn").style.display = 'none';
      document.getElementById("map").style.display = 'block';
      document.getElementById("nameCounty").innerText = '';
      break;
  }

}
