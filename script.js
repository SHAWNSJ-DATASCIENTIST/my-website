const button = document.getElementById("themeButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  message.textContent = document.body.classList.contains("dark")
    ? "Dark mode enabled."
    : "Light mode enabled.";
});