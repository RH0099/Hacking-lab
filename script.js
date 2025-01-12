// 1. New Feature: Add light rays movement in different directions
let rays = document.querySelectorAll('.light-ray');
rays.forEach((ray, index) => {
  let delay = Math.random() * 2;
  ray.style.animationDuration = (Math.random() + 2) + "s";
  ray.style.animationDelay = delay + "s";
});

// 2. New Feature: Create random speed for rays
function randomizeSpeed() {
  rays.forEach(ray => {
    let randomSpeed = (Math.random() + 1) * 3;
    ray.style.animationDuration = randomSpeed + 's';
  });
}

// 3. New Feature: Change color of rays on click
document.getElementById('scene').addEventListener('click', () => {
  rays.forEach(ray => {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    ray.style.backgroundColor = randomColor;
  });
});

// 4. New Feature: Add pulsating effect for rays
function pulsateRays() {
  rays.forEach(ray => {
    ray.style.animation = "pulse 2s infinite alternate";
  });
}

// 5. New Feature: Add scale effect for rays
function scaleRays() {
  rays.forEach(ray => {
    ray.style.transform = "scale(1.5)";
    setTimeout(() => {
      ray.style.transform = "scale(1)";
    }, 1000);
  });
}

// Activate these features
setInterval(randomizeSpeed, 5000);  // Change speed periodically
setInterval(pulsateRays, 3000);    // Add pulsating effect
setInterval(scaleRays, 7000);      // Add scale effect
                                                                                                                
