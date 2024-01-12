let LocalDataBase = JSON.parse(localStorage.getItem(LocalStorageKey) || "[]");
let count_Moído_e_Lavado = 0;
let countGranulado = 0;
let countEnfardado = 0;
let countSolto = 0;
let countPrensado = 0;
let countNenhumProcess = 0; 

for (let i = 0; i < LocalDataBase.length; i++) {
  if (LocalDataBase[i]["processo"] == "Moído e Lavado") {
    count_Moído_e_Lavado++;
  } else {
    if (LocalDataBase[i]["processo"] == "Granulado") {
      countGranulado++;
    } else {
        if (LocalDataBase[i]["processo"] == "Enfardado") {
            countEnfardado++; 
        } else {
            if (LocalDataBase[i]["processo"] == "Solto") {
                countSolto++; 
            } else {
                if (LocalDataBase[i]["processo"] == "Prensado") {
                    countPrensado++; 
                } else {
                    if (LocalDataBase[i]["processo"] == "Nenhum") {
                        countNenhumProcess++; 
                    }
                }
                
            }
        }
    }
    
  }
} 
 
  //polar

  const ctx4 = document.getElementById("polar");

  new Chart(ctx4, {
    type: "polarArea",
    data: {
      labels: [
        "Moído e Lavado",
        "Granulado",
        "Enfardado",
        "Solto",
        "Prensado",
        "Nenhum"
      ],
      datasets: [
        {
          label: "Leads Cadastradas",
          data: [count_Moído_e_Lavado, countGranulado, countEnfardado, countSolto, countPrensado,countNenhum],
          backgroundColor: [
            "#68F263",
            "#96D9A5",
            "#9FD996",
            "#F2F2F2",
            "#6A8466",
            "#0D0D0D",
            "#3C2E25",
          ],
          borderColor: "black",
        },
      ], 
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });


