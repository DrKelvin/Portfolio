function show_sobremim() {
  let div_sobremim = document.getElementById("sobremim");
  let div_perfil = document.getElementById("perfil");

  div_sobremim.classList.remove("display_none");
  console.log("classe removida");

  if(window.matchMedia("(max-width: 500px)").matches) {
    div_perfil.classList.add("display_none");
  } else {
    
  }
}

function rem_sobremim() {
  let div_sobremim = document.getElementById("sobremim");
  div_sobremim.classList.add("display_none");
  console.log("classe adicionada");
}