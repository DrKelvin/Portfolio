function show_sobremim() {
  let div_sobremim = document.getElementById("sobremim");
  div_sobremim.classList.remove("display_none");
  console.log("classe removida");
}

function rem_sobremim() {
  let div_sobremim = document.getElementById("sobremim");
  div_sobremim.classList.add("display_none");
  console.log("classe adicionada");
}