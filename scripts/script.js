const mainContent = document.querySelector('.container');
const readMores = document.querySelectorAll('.readMore');
const pageNavs = document.querySelectorAll('.page-nav');
const details = document.querySelectorAll('.detail');
const detailEnvor = details[0];
const detailScien = details[1];

pageNavs.forEach((navItem) => {
  navItem.addEventListener('clcik', function () {
    this.classList.toggle('active');
  });
});

for (let i = 0; i < readMores.length; i++) {
  readMores[i].addEventListener('click', function () {
    // Toggle the 'active' class for the clicked button
    this.classList.toggle('active');

    // Add 'fading' class to slide up and fade the container
    mainContent.classList.add('fading');

    // Optionally, hide completely after the slide and fade
    setTimeout(() => {
      mainContent.classList.add('d-none'); // Fully hide after animation
    }, 2000); // Ensure this matches or is slightly longer than the slide/fade duration

    // Handle specific detail content based on the button clicked
    if (i === 0) {
      // Envor section
      console.log('xxx 0');

      if (this.classList.contains('active')) {
        detailEnvor.classList.remove('d-none');
        // Ensure the other section is hidden
        readMores[i + 1]?.classList.remove('active'); // Safely access next button
        detailScien.classList.add('d-none');
      } else {
        detailEnvor.classList.add('d-none');
      }
    } else if (i === 1) {
      // Scien section
      console.log('xxx 1');

      if (this.classList.contains('active')) {
        detailScien.classList.remove('d-none');
        // Ensure the other section is hidden
        readMores[i - 1]?.classList.remove('active'); // Safely access previous button
        detailEnvor.classList.add('d-none');
      } else {
        detailScien.classList.add('d-none');
      }
    }
  });
}
