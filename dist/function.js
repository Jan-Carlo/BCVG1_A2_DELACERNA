const bgMusic = document.getElementById('bg-music');

window.onload = function() {
  bgMusic.play();
};


document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
