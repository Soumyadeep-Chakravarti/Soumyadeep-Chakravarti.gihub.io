const skills = [
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 80 },
  { name: "React", level: 85 },
  // Add more skills
];

function createSkillsChart() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "300");

  skills.forEach((skill, index) => {
    const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute("x", index * 100);
    bar.setAttribute("y", 300 - skill.level * 3);
    bar.setAttribute("width", "80");
    bar.setAttribute("height", skill.level * 3);
    bar.setAttribute("fill", `hsl(${(index * 360) / skills.length}, 70%, 50%)`);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", index * 100 + 40);
    text.setAttribute("y", "295");
    text.setAttribute("text-anchor", "middle");
    text.textContent = skill.name;

    svg.appendChild(bar);
    svg.appendChild(text);
  });

  document.getElementById("skills-chart").appendChild(svg);
}

document.addEventListener("DOMContentLoaded", createSkillsChart);
