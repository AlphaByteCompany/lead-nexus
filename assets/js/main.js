//area de variáveis
const LocalStorageKey = "lead-info";
const localStorageKey = "user-dados";
const Localimg = "user-img"; 

function showUserDados() {
  /*ESSA FUNÇÃO MOSTRA OS DADOS QUE ESTÃO ARMAZENADOS EM OUTRO LOCAL STORAGE DE OUTRA PÁGINA,  
FOI PUXADO ESSES DADOS E INSERIDO DO HEADER DO HTML DA PÁGINA ATUAL*/
  let profileImage = localStorage.getItem(Localimg);
  document.getElementById("user-foto").src = profileImage;
  let db_LocalStorage = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
  );
  for (let i = 0; i < db_LocalStorage.length; i++) {
    $(".name-user").html(db_LocalStorage[i]["nome"]);
  }
}
showUserDados();
