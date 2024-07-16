// document.addEventListener("DOMContentLoaded", function() {
//     const slideshowContainer = document.getElementById('slideshow');
//     const images = slideshowContainer.getElementsByTagName('img');
//     let currentIndex = 0;

//     function showImage(index) {
//         for (let i = 0; i < images.length; i++) {
//             images[i].classList.remove('active');
//         }
//         images[index].classList.add('active');
//     }

//     function nextImage() {
//         currentIndex = (currentIndex + 1) % images.length;
//         showImage(currentIndex);
//     }

//     // Initialize the slideshow
//     showImage(currentIndex);
//     setInterval(nextImage, 3000); // Change image every 3 seconds
// });


document.addEventListener("DOMContentLoaded", function() {
    const slideshowContainer = document.getElementById('slideshow');
    const images = slideshowContainer.getElementsByTagName('img');
    let currentIndex = 0;
    let intervalId;

    function showImage(index) {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
        }
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startSlideshow() {
        intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    }

    function stopSlideshow() {
        clearInterval(intervalId);
    }

    // Initialize the slideshow
    showImage(currentIndex);
    startSlideshow();

    // Add event listeners to the buttons
    document.getElementById('nextBtn').addEventListener('click', function() {
        stopSlideshow();
        nextImage();
        startSlideshow();
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        stopSlideshow();
        prevImage();
        startSlideshow();
    });
});




function createBackground() {
    const container = document.getElementById('background-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const divSize = 90;
    const spacing = 10;

    for (let y = 0; y < containerHeight; y += divSize + spacing) {
      for (let x = 0; x < containerWidth; x += divSize + spacing) {
        const div = document.createElement('div');
        div.className = 'background-div';
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-heart fa-beat';
        icon.style.setProperty('--fa-beat-scale', '1.2');
        div.appendChild(icon);

        container.appendChild(div);
      }
    }
  }

  window.onload = createBackground;
  window.onresize = () => {
    const container = document.getElementById('background-container');
    container.innerHTML = '';
    createBackground();
  };

  function changeText() {
    var button = document.getElementById('giftButton');
    button.innerHTML = 'arrived but not wrapped up yet <:)';
    button.classList.add('giftText');
    button.disabled = true;
}