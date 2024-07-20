const timelineEvents = [
  {
    date: "2015",
    title: "Graduated University",
    description: "Earned my degree in Computer Science",
  },
  {
    date: "2015",
    title: "Started First Job",
    description: "Joined XYZ Corp as a Junior Developer",
  },
  {
    date: "2018",
    title: "Promoted to Senior Developer",
    description: "Took on leadership responsibilities",
  },
  // Add more events
];

function createTimeline() {
  const timeline = document.getElementById("myTimeline");
  timelineEvents.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.className = "timeline-event";
    eventElement.innerHTML = `
      <div class="timeline-date">${event.date}</div>
      <div class="timeline-content">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </div>
    `;
    timeline.appendChild(eventElement);
  });
}

document.addEventListener("DOMContentLoaded", createTimeline);
