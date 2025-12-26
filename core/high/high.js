import { crew } from "../../system/crew-data.js";

const user = JSON.parse(localStorage.getItem("loggedUser"));
if (!user || (user.rank !== "Captain" && user.rank !== "Strategist")) {
  location.href = "../low/";
}

document.body.innerHTML += crew.map(m => `
  <div>
    <h2>${m.username}</h2>
    <p>Role: ${m.role}</p>
    <p>Rank: ${m.rank}</p>
    <p>Fruit: ${m.fruit}</p>
    <p>Password: ${m.password}</p>
  </div>
`).join("");
