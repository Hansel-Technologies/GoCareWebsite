// Open Image in Overlay
const gridItems = document.querySelectorAll('.grid-item');
const overlay = document.querySelector('.overlay');
const imageContainer = document.querySelector('.image-container');
const controls = document.querySelector('.controls');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const closeBtn = document.querySelector('.close-btn');

let currentImageIndex = 0;

gridItems.forEach((gridItem, index) => {
  gridItem.addEventListener('click', () => {
    currentImageIndex = index;
    const imgSrc = gridItem.querySelector('img').getAttribute('src');
    imageContainer.innerHTML = `<img src="${imgSrc}" alt="Opened Image" />`;
    overlay.style.display = 'flex';
  });
});

// Close Overlay
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Navigation
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + gridItems.length) % gridItems.length;
  const imgSrc = gridItems[currentImageIndex].querySelector('img').getAttribute('src');
  imageContainer.innerHTML = `<img src="${imgSrc}" alt="Opened Image" />`;
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % gridItems.length;
  const imgSrc = gridItems[currentImageIndex].querySelector('img').getAttribute('src');
  imageContainer.innerHTML = `<img src="${imgSrc}" alt="Opened Image" />`;
});
