// Your JS code here.

function slideIn(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}

const slideInElements = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(slideIn, {
  rootMargin: '-200px 0px',
});

slideInElements.forEach(element => {
  observer.observe(element);
});


