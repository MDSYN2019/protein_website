const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const counters = document.querySelectorAll(".kpi");

function animateKpis() {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    const increment = Math.max(1, Math.floor(target / 32));
    let value = 0;

    const timer = setInterval(() => {
      value += increment;
      if (value >= target) {
        value = target;
        clearInterval(timer);
      }
      counter.textContent = String(value);
    }, 35);
  });
}

animateKpis();
