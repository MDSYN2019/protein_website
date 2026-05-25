const threshold = document.getElementById("threshold");
const thresholdValue = document.getElementById("threshold-value");
const proteinId = document.getElementById("protein-id");
const mode = document.getElementById("mode");
const list = document.getElementById("pocket-list");
const summaryTitle = document.getElementById("summary-title");
const themeToggle = document.getElementById("theme-toggle");

function buildMockPockets() {
  const t = Number(threshold.value);
  const id = proteinId.value.toUpperCase() || "UNSET";
  const modeBias = { Conservative: 1, Balanced: 2, Exploratory: 3 }[mode.value] ?? 2;
  const pockets = Array.from({ length: modeBias + 2 }, (_, i) => {
    const score = Math.max(0.45, (t / 100) - i * 0.09).toFixed(2);
    return `Pocket ${i + 1}: score ${score} · center (${12 + i}, ${-4 + i}, ${8 - i})`;
  });

  summaryTitle.textContent = `Predicted Pockets · ${id}`;
  list.innerHTML = pockets.map((p) => `<li>${p}</li>`).join("");
}

threshold.addEventListener("input", () => {
  thresholdValue.textContent = `${threshold.value}%`;
  buildMockPockets();
});
proteinId.addEventListener("input", buildMockPockets);
mode.addEventListener("change", buildMockPockets);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

buildMockPockets();
