const hero = document.querySelector('.hero-section');
const images = [
  "hero2.png",
  "amazonhero1.png",
 "amazonhero3.png",
 
];
let index = 0;

function showSlide() {
  hero.style.backgroundImage = `url(${images[index]})`;
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

setInterval(nextSlide, 5000); // auto-slide every 5 sec
showSlide(); // Add this line just after defining functions
setInterval(nextSlide, 5000);


function openProduct(img) {
    let image = img.src;
    let name = img.dataset.name;
    let desc = img.dataset.desc;
    let price = img.dataset.price;

    // Save values
    localStorage.setItem("selectedImage", image);
    localStorage.setItem("selectedName", name);
    localStorage.setItem("selectedDesc", desc);
    localStorage.setItem("selectedPrice", price);

    // Redirect to product page
    window.location.href = "products.html";
}


 


