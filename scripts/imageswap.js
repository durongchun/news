document.addEventListener("DOMContentLoaded", () => {
  // Select the main article and the list of articles
  const mainArticle = document.querySelector(".main-article");
  const mainArticleImage = mainArticle.querySelector(".main-article-image"); // Hidden image
  const listArticles = document.querySelectorAll(".left-list article");

  listArticles.forEach((article) => {
    article.addEventListener("click", () => {
      // Swap images (main article background vs. article <img>)
      const mainBgImage = mainArticle.style.backgroundImage; // Get main article's background image
      const articleImage = article.querySelector("img"); // Get the clicked article's <img> element

      // Swap background image and <img> src
      mainArticle.style.backgroundImage = `url("${articleImage.src}")`;
      if (mainArticleImage) {
        articleImage.src = mainArticleImage.src; // Swap with hidden main article image
        mainArticleImage.src = mainBgImage
          .replace(/^url\(["']?/, "")
          .replace(/["']?\)$/, ""); // Sync hidden image with background
      }

      // Swap category
      const mainCategory = mainArticle.querySelector(".category-main");
      const articleCategory = article.querySelector(".category span");

      if (mainCategory && articleCategory) {
        const tempCategory = mainCategory.textContent;
        mainCategory.textContent = articleCategory.textContent;
        // articleCategory.textContent = tempCategory;
      }

      // Swap title
      const mainTitle = mainArticle.querySelector("h1");
      const articleTitle = article.querySelector("h2");

      const tempTitle = mainTitle.textContent;
      mainTitle.textContent = articleTitle.textContent;
      // articleTitle.textContent = tempTitle;

      // Swap author
      const mainAuthor = mainArticle.querySelector(".author-main");
      const articleAuthor = article.querySelector(".author");

      const tempAuthor = mainAuthor.textContent;
      mainAuthor.textContent = articleAuthor.textContent;
      // articleAuthor.textContent = tempAuthor;

      // Swap tags
      const mainTagsContainer = mainArticle.querySelector(".tags");
      const articleTagsContainer = article.querySelector(".tag");

      const tempTagsHTML = mainTagsContainer.innerHTML;
      mainTagsContainer.innerHTML = articleTagsContainer.innerHTML;
      // articleTagsContainer.innerHTML = tempTagsHTML;
    });
  });
});
