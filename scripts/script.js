//------------(Bottom article)Lucy-------------
const mainContent = document.querySelector('.container');
const readMores = document.querySelectorAll('.readMore');
const pageNavEnvir = document.querySelector('#enviroment');
const pageNavScien = document.querySelector('#science');
const details = document.querySelectorAll('.detail');
const detailEnvor = details[0];
const detailScien = details[1];

for (let i = 0; i < readMores.length; i++) {
  readMores[i].addEventListener('click', function () {
    // Toggle the 'active' class for the clicked button
    this.classList.toggle('active');

    // Add 'fading' class to slide up and fade the container
    mainContent.classList.add('fading');

    // Smoothly scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Optionally, hide completely after the slide and fade
    setTimeout(() => {
      mainContent.classList.add('d-none'); // Fully hide after animation
      document.body.style.display = 'block';
      document.querySelector('.details').classList.remove('d-none');
      document
        .querySelector('.description-text .pt-5')
        .classList.toggle('pt-5');
      document.querySelector('.description .pt-5')?.classList.remove('pt-5');
    }, 2000); // Ensure this matches or is slightly longer than the slide/fade duration

    // Handle specific detail content based on the button clicked
    if (i === 0) {
      // Envor section
      console.log('xxx 0');

      if (this.classList.contains('active')) {
        readMores[i + 1]?.classList.remove('active'); // Safely access next button
        detailScien.classList.add('d-none');
        detailEnvor.classList.remove('d-none');
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

pageNavEnvir.addEventListener('click', () => {
  detailEnvor.classList.add('fire-effect');

  setTimeout(() => {
    mainContent.classList.remove('d-none');
    detailEnvor.classList.add('d-none');
    location.reload();
  }, 2000); // Matches the animation duration
});

pageNavScien.addEventListener('click', function () {
  detailScien.classList.add('fire-effect');

  setTimeout(function () {
    mainContent.classList.remove('d-none');
    detailScien.classList.add('d-none');
    location.reload();
  }, 2000); // Adjust delay as needed (optional)
});

// ------------Nav bar(Siyuan)-------------
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
      mainContent.style.marginRight = '160px';
    }
  });
});

// ------------Image swap(Tatiana)-------------
document.addEventListener('DOMContentLoaded', () => {
  // Select the main article and the list of articles
  const mainArticle = document.querySelector('.main-article');
  const mainArticleImage = mainArticle.querySelector('.main-article-image'); // Hidden image
  const listArticles = document.querySelectorAll('.left-list article');

  listArticles.forEach((article) => {
    article.addEventListener('click', () => {
      // Swap images (main article background vs. article <img>)
      const mainBgImage = mainArticle.style.backgroundImage; // Get main article's background image
      const articleImage = article.querySelector('img'); // Get the clicked article's <img> element

      // Swap background image and <img> src
      mainArticle.style.backgroundImage = `url("${articleImage.src}")`;
      if (mainArticleImage) {
        articleImage.src = mainArticleImage.src; // Swap with hidden main article image
        mainArticleImage.src = mainBgImage
          .replace(/^url\(["']?/, '')
          .replace(/["']?\)$/, ''); // Sync hidden image with background
      }

      // Swap category
      const mainCategory = mainArticle.querySelector('.category-main');
      const articleCategory = article.querySelector('.category span');

      if (mainCategory && articleCategory) {
        const tempCategory = mainCategory.textContent;
        mainCategory.textContent = articleCategory.textContent;
        // articleCategory.textContent = tempCategory;
      }

      // Swap title
      const mainTitle = mainArticle.querySelector('h1');
      const articleTitle = article.querySelector('h2');

      const tempTitle = mainTitle.textContent;
      mainTitle.textContent = articleTitle.textContent;
      // articleTitle.textContent = tempTitle;

      // Swap author
      const mainAuthor = mainArticle.querySelector('.author-main');
      const articleAuthor = article.querySelector('.author');

      const tempAuthor = mainAuthor.textContent;
      mainAuthor.textContent = articleAuthor.textContent;
      // articleAuthor.textContent = tempAuthor;

      // Swap tags
      const mainTagsContainer = mainArticle.querySelector('.tags');
      const articleTagsContainer = article.querySelector('.tag');

      const tempTagsHTML = mainTagsContainer.innerHTML;
      mainTagsContainer.innerHTML = articleTagsContainer.innerHTML;
      // articleTagsContainer.innerHTML = tempTagsHTML;
    });
  });
});
