

document.addEventListener("DOMContentLoaded", () => {
    const mainArticle = document.querySelector(".main-article");
    const listArticles = document.querySelectorAll(".left-list article");
  
    listArticles.forEach((article) => {
      article.addEventListener("click", () => {
        // Add fade-out class to both articles
        mainArticle.classList.add("fade-out");
        article.classList.add("fade-out");
  
        // Wait for fade-out animation to complete before swapping content
        setTimeout(() => {
          // Swap image
          const mainImage = mainArticle.style.backgroundImage.replace(
            /^url\(["']?/, ""
          ).replace(/["']?\)$/, "");
          const articleImage = article.querySelector("img");
  
          const tempImage = mainImage;
          mainArticle.style.backgroundImage = `url("${articleImage.src}")`;
          articleImage.src = tempImage;
  
          // Swap category
          const mainCategory = mainArticle.querySelector(".category-main");
          const articleCategory = article.querySelector(".category span");
  
          const tempCategory = mainCategory.textContent;
          mainCategory.textContent = articleCategory.textContent;
          articleCategory.textContent = tempCategory;
  
          // Swap title
          const mainTitle = mainArticle.querySelector("h1.tip");
          const articleTitle = article.querySelector("h2");
  
          const tempTitle = mainTitle.textContent;
          mainTitle.textContent = articleTitle.textContent;
          articleTitle.textContent = tempTitle;
  
          // Swap author
          const mainAuthor = mainArticle.querySelector(".author-main");
          const articleAuthor = article.querySelector(".author");
  
          const tempAuthor = mainAuthor.textContent;
          mainAuthor.textContent = articleAuthor.textContent;
          articleAuthor.textContent = tempAuthor;
  
          // Swap tags
          const mainTagsContainer = mainArticle.querySelector(".tags");
          const articleTagsContainer = article.querySelector(".tag");
  
          const tempTagsHTML = mainTagsContainer.innerHTML;
          mainTagsContainer.innerHTML = articleTagsContainer.innerHTML;
          articleTagsContainer.innerHTML = tempTagsHTML;
  
          // Add fade-in class to both articles after content swap
          mainArticle.classList.remove("fade-out");
          article.classList.remove("fade-out");
          mainArticle.classList.add("fade-in");
          article.classList.add("fade-in");
  
          // Remove fade-in class after animation
          setTimeout(() => {
            mainArticle.classList.remove("fade-in");
            article.classList.remove("fade-in");
          }, 500);
        }, 500);
      });
    });
  });
