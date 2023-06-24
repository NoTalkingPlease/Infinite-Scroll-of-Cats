const catContainer = document.getElementById('cat-container');
const loadingSpinner = document.getElementById('loading-spinner');
const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

function createCatImage(imageUrl) {
  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.className = 'cat-image';
  catContainer.appendChild(imgElement);
}

async function loadCatImages() {
  try {
    loadingSpinner.style.display = 'block';

    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach(cat => {
      createCatImage(cat.url);
    });

    loadingSpinner.style.display = 'none';
  } catch (error) {
    console.error('Error:', error);
    loadingSpinner.style.display = 'none';
  }
}

loadCatImages();
