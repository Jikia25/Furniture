


function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const speed = 100; 

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 10); 
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.6, 
  }
);

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => observer.observe(counter));

const buttons = document.querySelectorAll(".animated-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) {
      window.location.href = link;
    }
  });
});
