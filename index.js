let darkIsActive =
  localStorage.getItem("darkIsActive") !== null
    ? localStorage.getItem("darkIsActive")
    : false;
console.log(darkIsActive);
const bodyTag = document.body;
if (darkIsActive) {
  bodyTag.classList.add("bg-dark-mode");
} else {
  bodyTag.classList.remove("bg-dark-mode");
}

const darkModeTrigger = document.querySelector("#dark-mode-trigger");
darkModeTrigger.addEventListener("change", (e) => {
  darkIsActive = e.target.checked;
  localStorage.setItem("darkIsActive", darkIsActive);
  if (darkIsActive) {
    bodyTag.classList.add("bg-dark-mode");
  } else {
    bodyTag.classList.remove("bg-dark-mode");
  }
});

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

const blinkingElement = document.querySelector(".blinking-js");

let visible = true;

setInterval(() => {
  visible = !visible;
  blinkingElement.style.opacity = visible ? "1" : "0";
}, 1000);
