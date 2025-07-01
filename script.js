// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Define actions for each tab
  const tabActions = {
    "Home": () => alert("Welcome to the Home page!"),
    "About Us": () => alert("Learn more About Us."),
    "Academics": () => alert("Explore our Academic programs."),
    "Admissions": () => alert("Admissions are now open!"),
    "Gallery": () => alert("Check out our School Gallery."),
    "Contact": () => alert("Contact us for more information."),
  };

  // Select all navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Add event listeners
  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent link navigation
      const tabName = link.textContent.trim(); // Get the tab text
      if (tabActions[tabName]) {
        tabActions[tabName](); // Call the associated function
      } else {
        alert(`Clicked on: ${tabName}`);
      }
    });
  });
});
