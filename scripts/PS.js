document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.btn-menu');
  const navBar = document.querySelector('#nav-bar');
  const navList = navBar.querySelector('ul');
  const mainContent = document.querySelector('.wrapper');

  // Toggle menu functionality
  menuButton.addEventListener('click', () => {
    if (navList.classList.contains('slide-out')) {
      // Close menu
      navList.classList.remove('slide-out');
      mainContent.style.marginRight = '0';
    } else {
      // Open menu
      navList.style.display = 'flex';
      navList.classList.add('slide-out');
      mainContent.style.marginRight = '200px';
    }
  });
});
