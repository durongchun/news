document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".btn-menu");
  const navBar = document.querySelector("#nav-bar");
  const navList = navBar.querySelector("ul");
  const mainContent = document.querySelector(".wrapper");
  const detailsContent = document.querySelector(".details");

  // Toggle menu functionality
  menuButton.addEventListener("click", () => {
    if (navList.classList.contains("slide-out")) {
      // Close menu
      navList.classList.remove("slide-out");
      mainContent.style.marginRight = "0";
      document.body.style.overflow = ""; // UnLock scrolling
    } else {
      // Open menu
      navList.style.display = "flex";
      navList.classList.add("slide-out");
      mainContent.style.marginRight = "160px";
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden"; // Lock scrolling
    }
  });
});
