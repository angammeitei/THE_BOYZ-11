import { crew } from "../../system/crew-data.js";

const container = document.getElementById("crew");

crew.forEach(m => {
  const card = document.createElement("div");
  card.className = "card " + m.rank.toLowerCase();

  card.innerHTML = `
    <h2>${m.username}</h2>
    <p>Role: ${m.role}</p>
    <p>Fruit: ${m.fruit}</p>
  `;
  container.appendChild(card);
});

window.goHigh = function () {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  if (user.rank === "Captain" || user.rank === "Strategist") {
    location.href = "../high/";
  } else {
    alert("Restricted Area");
  }
};
