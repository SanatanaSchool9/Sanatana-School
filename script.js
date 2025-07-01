document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-btn");

  const actions = {
    "Home": () => alert("Welcome to the Home page!"),
    "About Us": () => alert("Learn more About Us."),
    "Academics": () => alert("Explore our Academic programs."),
    "Admissions": () => alert("Admissions are now open!"),
    "Gallery": () => alert("Check out our School Gallery."),
    "Contact": () => alert("Contact us for more information.")
  };

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const label = this.textContent.trim();
      if (actions[label]) {
        actions[label]();
      }
    });
  });
});
