const key = "lead-info";

let Ano_Cadastro = new Date();
let Mes_cadastro = new Date();
let Day_Cadastro = new Date();
let data = new Date();
let DayM = new Date();

let nome, tell, mail, uf, cidade, material, tipoMaterial, processo;
const Form = {
  nomeInput: () => document.getElementById("nome"),
  TellInput: () => document.getElementById("tel"),
  EmailInput: () => document.getElementById("mail"),
  UfInput: () => document.getElementById("uf"),
  CityInput: () => document.getElementById("cidade"),
  MaterialInput: () => document.getElementById("material"),
  TipoDeMaterialInput: () => document.getElementById("TipoDeMaterial"),
  ProcessoInput: () => document.getElementById("Processo"),
  Button: () => document.getElementById("register-btn"),
};

$(Form.Button()).click(() => {
  /*
    NESSA FUNÇÃO, ESTAMOS PUXANDO OS DADOS ATUAIS DO LOCAL STORAGE E 
    SETANDO NELE  AS INFORMAÇÕES QUE RETIRAMOS DOS FORMULÁRIOS 
    */
  let db_leads = JSON.parse(localStorage.getItem(key) || "[]");

  Ano_Cadastro = Ano_Cadastro.getFullYear();
  Mes_cadastro = Mes_cadastro.getMonth();
  Day_Cadastro = Day_Cadastro.getDay();
  DayMonth = DayM.getDate();
  nome = Form.nomeInput().value;
  tell = Form.TellInput().value;
  mail = Form.EmailInput().value;
  uf = Form.UfInput().value;
  cidade = Form.CityInput().value;
  material = Form.MaterialInput().value;
  tipoMaterial = Form.TipoDeMaterialInput().value;
  processo = Form.ProcessoInput().value;

  db_leads.push({
    nome: nome,
    tell: tell,
    email: mail,
    uf: uf,
    cidade: cidade,
    material: material,
    tipoMaterial: tipoMaterial,
    processo: processo,
    Year: Ano_Cadastro,
    Month: Mes_cadastro,
    Day: Day_Cadastro,
    DayM: DayMonth,
  });
  localStorage.setItem(key, JSON.stringify(db_leads));
});
