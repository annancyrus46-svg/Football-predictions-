const API_KEY = 2a621536be1547389e1f2f3446a71953;

fetch("https://api.football-data.org/v4/matches", {
  headers: {
    "X-Auth-Token": API_KEY
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);

  const container = document.getElementById("matches");

  data.matches.forEach(match => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
      <p>${new Date(match.utcDate).toLocaleString()}</p>
      <hr>
    `;
    container.appendChild(div);
  });
})
.catch(error => console.error(error));