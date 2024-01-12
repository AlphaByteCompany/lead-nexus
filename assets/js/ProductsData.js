function PLASTICO_DB() {
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
    Não Informado
  </option>`);
  fetch("../materiais-data/plasticos.JSON").then((response) => {
    response.json().then((dados) => {
      dados.plasticos.map((elemento) => {
        document.getElementById(
          "TipoDeMaterial"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}

function showPapelDB() {
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
      Não Informado
    </option>`);
  fetch("../materiais-data/papel.JSON").then((response) => {
    response.json().then((dados) => {
      dados.papel.map((elemento) => {
        document.getElementById(
          "TipoDeMaterial"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}

function METAL_DB() {
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
    Não Informado
  </option>`);
  fetch("../materiais-data/metal.JSON").then((response) => {
    response.json().then((dados) => {
      dados.metal.map((elemento) => {
        document.getElementById(
          "TipoDeMaterial"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}

function VIDRO_DB() {
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
    Não Informado
  </option>`);
  fetch("../materiais-data/vidro.JSON").then((response) => {
    response.json().then((dados) => {
      dados.vidro.map((elemento) => {
        document.getElementById(
          "TipoDeMaterial"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}
function PRENSAS_DB() {
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
    Não Informado
  </option>`);
  fetch("../materiais-data/prensas.JSON").then((response) => {
    response.json().then((dados) => {
      dados.prensas.map((elemento) => {
        document.getElementById(
          "TipoDeMaterial"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}
function INFOPRODUCTS() {
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
    Não Informado
  </option>`);
  fetch("../materiais-data/info-produtos.JSON").then((response) => {
    response.json().then((dados) => {
      dados.infoprodutos.map((elemento) => {
        document.getElementById(
          "TipoDeMaterial"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}
function FRETE_DB() { 
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
    Não Informado
  </option>`);
  fetch("../materiais-data/frete.JSON").then((response) => {
    response.json().then((dados) => {
      dados.frete.map((elemento) => {
        document.getElementById(
          "TipoDeMaterial"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}
function RESPONSAVEL_DB() {
  $("#TipoDeMaterial").html(`<option value="Não Informado" >
    Não Informado
  </option>`);
  fetch("../materiais-data/responsavel.JSON").then((response) => {
    response.json().then((dados) => {
      dados.responsavel.map((elemento) => {
        document.getElementById(
          "responsavel"
        ).innerHTML += `<option value="${elemento.nome}">${elemento.nome}</option>`;
      });
    });
  });
}

$("#material").on("change", () => {
  document.getElementById("TipoDeMaterial").innerHTML = ""; 
  let material_select = $("#material").val();
  if (material_select == "Plastico") {
    PLASTICO_DB();
  } else {
    if (material_select == "Papel") {
      showPapelDB();
    } else {
      if (material_select == "Metal") {
        METAL_DB();
      } else {
        if (material_select == "Vidro") {
          VIDRO_DB();
        } else {
        }
        if (material_select == "Prensas") {
          PRENSAS_DB();
        } else {
          if (material_select == "Info-Produto") {
            INFOPRODUCTS();
          } else {
            if (material_select == "Frete") {
              FRETE_DB();
            } else {
              if (material_select == "Nenhum") {
                $("#TipoDeMaterial").append(
                  ` <option value="Não Informado">Não Informado</option>`
                );
              }
            }
          }
        }
      }
    }
  }
});
RESPONSAVEL_DB();
