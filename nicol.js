const sections = document.querySelectorAll('.time');
const images = document.querySelectorAll('.photo-frame img');
// im not too confident in using => but i can change it if needed
// big section
sections.forEach(function(section) {
  section.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.01)';
    this.style.transition = 'transform 0.3s';
  });
  section.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});
 
// big image
images.forEach(function(image) {
  image.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s';
  });
  image.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});