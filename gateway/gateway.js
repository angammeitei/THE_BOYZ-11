import { crew } from "../system/crew-data.js";

window.login = function () {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  const member = crew.find(m => m.username === u && m.password === p);

  if (!member) {
    document.getElementById("error").innerText = "Access Denied";
    return;
  }

  localStorage.setItem("loggedUser", JSON.stringify(member));
  window.location.href = "../core/low/";
};
