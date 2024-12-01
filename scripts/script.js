const mainContent = document.querySelector(".container");
const readMores = document.querySelectorAll(".readMore");
const pageNavEnvir = document.querySelector("#enviroment");
const pageNavScien = document.querySelector("#science");
const details = document.querySelectorAll(".detail");
const detailEnvor = details[0];
const detailScien = details[1];

for (let i = 0; i < readMores.length; i++) {
  readMores[i].addEventListener("click", function () {
    // Toggle the 'active' class for the clicked button
    this.classList.toggle("active");

    // Add 'fading' class to slide up and fade the container
    mainContent.classList.add("fading");

    // Smoothly scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Optionally, hide completely after the slide and fade
    setTimeout(() => {
      mainContent.classList.add("d-none"); // Fully hide after animation
      document.body.style.display = "block";
      document.querySelector(".details").classList.remove("d-none");
      document
        .querySelector(".description-text .pt-5")
        .classList.toggle("pt-5");
      document.querySelector(".description .pt-5")?.classList.remove("pt-5");
    }, 2000); // Ensure this matches or is slightly longer than the slide/fade duration

    // Handle specific detail content based on the button clicked
    if (i === 0) {
      // Envor section
      console.log("xxx 0");

      if (this.classList.contains("active")) {
        readMores[i + 1]?.classList.remove("active"); // Safely access next button
        detailScien.classList.add("d-none");
        detailEnvor.classList.remove("d-none");
      } else {
        detailEnvor.classList.add("d-none");
      }
    } else if (i === 1) {
      // Scien section
      console.log("xxx 1");

      if (this.classList.contains("active")) {
        detailScien.classList.remove("d-none");
        // Ensure the other section is hidden
        readMores[i - 1]?.classList.remove("active"); // Safely access previous button
        detailEnvor.classList.add("d-none");
      } else {
        detailScien.classList.add("d-none");
      }
    }
  });
}

pageNavEnvir.addEventListener("click", () => {
  detailEnvor.classList.add("fire-effect");

  setTimeout(() => {
    mainContent.classList.remove("d-none");
    detailEnvor.classList.add("d-none");
    location.reload();
  }, 2000); // Matches the animation duration
});

pageNavScien.addEventListener("click", function () {
  detailScien.classList.add("fire-effect");

  setTimeout(function () {
    mainContent.classList.remove("d-none");
    detailScien.classList.add("d-none");
    location.reload();
  }, 2000); // Adjust delay as needed (optional)
});

document
  .querySelector(".description img")
  .addEventListener("click", function () {
    this.style.animation = "none"; // Reset animation
    this.offsetHeight; // Trigger reflow (necessary for reapplying animation)
    this.style.animation = "shakeEffect 3s ease-in-out forwards"; // Reapply the animation
    setTimeout(() => {
      this.style.animation = "none"; // Clear animation after 1.5s
    }, 3000); // Match the duration of the animation
  });

document
  .querySelectorAll(".description")[1]
  ?.querySelector("img")
  .addEventListener("click", function () {
    this.style.animation = "none"; // Reset animation
    this.offsetHeight; // Trigger reflow (necessary for reapplying animation)
    this.style.animation = "heartbeat 1.5s ease-in-out infinite"; // Reapply the animation
  });
