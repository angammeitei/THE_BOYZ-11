import { crew } from "../../system/crew-data.js";

/* ======================
   ACCESS CONTROL
====================== */
const user = JSON.parse(localStorage.getItem("loggedUser"));

if (!user || (user.rank !== "Captain" && user.rank !== "Strategist")) {
  window.location.replace("../low/");
}

/* ======================
   BACK BUTTON FIX
====================== */
const backBtn = document.getElementById("backBtn");
backBtn.textContent = `⬅ Return to Low Core (${user.username} • ${user.role})`;

backBtn.addEventListener("click", () => {
  window.location.href = "../low/";
});

/* ======================
   RENDER CREW
====================== */
const container = document.getElementById("crew-details");

crew.forEach(member => {
  const card = document.createElement("div");
  card.classList.add("card", member.rank.toLowerCase());

  card.innerHTML = `
    <h2>${member.username}</h2>
    <p><strong>Role:</strong> ${member.role}</p>
    <p><strong>Rank:</strong> ${member.rank}</p>
    <p><strong>Fruit:</strong> ${member.fruit}</p>
    <p><strong>Password:</strong> ${member.password}</p>
  `;

  container.appendChild(card);
});
