const username = "Soumyadeep-Chakravarti";

async function fetchProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await response.json();
    const ownRepos = repos.filter((repo) => !repo.fork);

    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";

    ownRepos.forEach((repo) => {
      const projectElement = document.createElement("div");
      projectElement.className = "project";
      projectElement.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || "No description available."}</p>
        <p>Language: ${repo.language || "Not specified"}</p>
        <p>Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectsContainer.appendChild(projectElement);
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    document.getElementById("projects-container").innerHTML =
      "Error loading projects. Please try again later.";
  }
}

document.addEventListener("DOMContentLoaded", fetchProjects);
