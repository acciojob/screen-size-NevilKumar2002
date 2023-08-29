//your JS code here. If required.

const sizeInfoDiv = document.getElementById('sizeInfo');
const sizeHeading = sizeInfoDiv.querySelector('h1');

function updateSizeInfo() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizeHeading.textContent = `Width: ${width} and Height: ${height}`;
}

// Initial update
updateSizeInfo();

// Attach the updateSizeInfo function to the window resize event
window.addEventListener('resize', updateSizeInfo);
