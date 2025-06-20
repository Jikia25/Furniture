// const first = {name: "kristi"}
// const second = {name: "kristi"}

const darkModeTrigger = document.querySelector("#dark-mode-trigger");
const bodyTag = document.body;
// სტეიტს ვკითხულობ ლოკალური საცავიდან
let darkIsActive =
  localStorage.getItem("darkIsActive") !== null
    ? JSON.parse(localStorage.getItem("darkIsActive"))
    : false;

const applyDarkMode = (isDark) => {
  if (isDark) {
    bodyTag.classList.add("bg-dark-mode");
    darkModeTrigger.checked = isDark;
  } else {
    bodyTag.classList.remove("bg-dark-mode");
  }
};

applyDarkMode(darkIsActive);

darkModeTrigger.addEventListener("change", (e) => {
  darkIsActive = e.target.checked; // სტეიტის სინქრონიზაცია
  console.log(e.target.checked);
  localStorage.setItem("darkIsActive", JSON.stringify(darkIsActive));

  applyDarkMode(darkIsActive);
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
