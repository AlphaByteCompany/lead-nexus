let database = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");
let countNenhum = 0;
let countPlastico = 0;
let countMetal = 0;
let countPapel = 0;
let countVidro = 0;
let countPrensas = 0;
let countInfoProduto = 0;
let countFrete = 0;

for (let i = 0; i < database.length; i ++) {
  if (database[i]["material"] == "Nenhum") {
    countNenhum++;
  } else {
    if (database[i]["material"] == "Plastico") {
      countPlastico++;
    } else {
      if (database[i]["material"] == "Metal") {
        countMetal++;
      } else {
        if (database[i]["material"] == "Papel") {
          countPapel++;
        } else {
          if (database[i]["material"] == "Vidro") {
            countVidro++;
          } else {
            if (database[i]["material"] == "Prensas") {
              countPrensas++;
            } else {
              if (database[i]["material"] == "Info-Produto") {
                countInfoProduto++;
              } else {
                if (database[i]["Frete"]) {
                  countFrete++;
                }
              }
            }
          }
        }
      }
    }
  }
}
 
//donout

const ctx3 = document.getElementById("donout");

new Chart(ctx3, {
  type: "bar",
  data: {
    labels: [
      "Nenhum",
      "Plástico",
      "Metal",
      "Papel",
      "Vidro",
      "Prensas",
      "Info-Produto",
      "Frete"
    ],
    datasets: [
      {
        label: "Materiais Cadastrados",
        data: [
            countNenhum,
            countPlastico,  
            countMetal, 
            countPapel, 
            countVidro, 
            countPrensas, 
            countInfoProduto,
            countPrensas
        ],
        borderWidth: 1, 
        backgroundColor: [
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C',
          '#5EE95C'
        ],  
        borderColor : '#5EE95C', 
      },
    ],
  },
  options: { 
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
