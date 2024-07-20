const tags = [
  { name: "JavaScript", weight: 10 },
  { name: "Python", weight: 8 },
  { name: "React", weight: 9 },
  { name: "Node.js", weight: 7 },
  // Add more tags
];

function createTagCloud() {
  const tagCloud = document.getElementById("tag-cloud");
  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag.name;
    tagElement.style.fontSize = `${tag.weight + 10}px`;
    tagElement.style.padding = "5px";
    tagElement.style.margin = "5px";
    tagElement.style.display = "inline-block";
    tagCloud.appendChild(tagElement);
  });
}

document.addEventListener("DOMContentLoaded", createTagCloud);
