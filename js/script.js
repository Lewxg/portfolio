document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animate');

  // Intersection Observer para animações
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  disableCopy();
});

// Bloquear cópias
function disableCopy() {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  });
}
