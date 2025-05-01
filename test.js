document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("greetButton").addEventListener("click", function () {
      const name = document.getElementById("nameInput").value.trim();
      const message = name ? `Hello, ${name}! Nice to meet you.` : "Please enter your name.";
      document.getElementById("greeting").innerText = message;
    });
  });  