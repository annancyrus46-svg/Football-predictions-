const API_KEY = 2a621536be1547389e1f2f3446a71953;

fetch("https://api.football-data.org/v4/matches", {
  headers: {
    "X-Auth-Token": API_KEY
  }
})
.then(response => response.json())
.then(data => {
  const container = document.getElementById("matches");

  container.innerHTML = "";

  data.matches.forEach(match => {
    const home = match.homeTeam.name;
    const away = match.awayTeam.name;
    const time = new Date(match.utcDate).toLocaleString();

    container.innerHTML += `
      <div style="border:1px solid #ddd;padding:10px;margin:10px 0;border-radius:8px;">
        <h3>${home} vs ${away}</h3>
        <p>${time}</p>
      </div>
    `;
  });
})
.catch(error => {
  console.error(error);
  document.getElementById("matches").innerHTML =
    "<p>Unable to load matches.</p>";
});