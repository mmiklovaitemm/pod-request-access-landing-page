document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("input");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // pasalinam klaidos zinute ir raudona apvada, jei tokie jau egzistuoja
    const existingError = document.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    emailInput.style.border = "";

    if (!email) {
      // Jei laukelis tuscias, parodyti klaidos zinute
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Oops! Please add your email";
      errorMessage.className = "error-message";
      errorMessage.style.color = "rgb(238, 91, 75)";
      errorMessage.style.fontSize = "0.8rem";

      emailInput.style.border = "2px solid rgb(238, 91, 75)";

      // prideti klaidos zinute po ivesties laukeliu
      emailInput.parentElement.appendChild(errorMessage);
    } else if (!emailPattern.test(email)) {
      // jei ivestas el. pastas neteisingas, parodyti atitinkama klaidos zinute
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Oops! Please check your email";
      errorMessage.className = "error-message";
      errorMessage.style.color = "rgb(238, 91, 75)";
      errorMessage.style.fontSize = "0.8rem";

      emailInput.style.border = "2px solid rgb(238, 91, 75)";

      emailInput.parentElement.appendChild(errorMessage);
    }
  });
});
