let names = ["Artur", "Berta", "Christian"];

function showNames() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < names.length; i++) {
    list.innerHTML += `<li>${names[i]}</li>`;
  }
}

