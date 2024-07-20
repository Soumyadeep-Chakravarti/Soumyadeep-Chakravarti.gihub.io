function fetchBlogPreviews() {
  fetch("/feed.xml")
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      const items = data.querySelectorAll("item");
      const blogPreviews = document.getElementById("blog-previews");

      items.forEach((el, index) => {
        if (index >= 3) return; // Show only the latest 3 posts
        const title = el.querySelector("title").textContent;
        const link = el.querySelector("link").textContent;
        const description =
          el
            .querySelector("description")
            .textContent.split(" ")
            .slice(0, 30)
            .join(" ") + "...";

        const previewElement = document.createElement("div");
        previewElement.innerHTML = `
          <h3><a href="${link}">${title}</a></h3>
          <p>${description}</p>
        `;
        blogPreviews.appendChild(previewElement);
      });
    });
}

document.addEventListener("DOMContentLoaded", fetchBlogPreviews);
