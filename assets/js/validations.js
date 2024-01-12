const KEYLOCAL = "lead-info";
// OBJETO DO FORMULÁRIO
const formElement = {
  nomeInput: () => document.getElementById("nome"),
  NomeAvisoArea: () => document.getElementById("avisoName"),
  tellInput: () => document.getElementById("tel"),
  TellAvisoArea: () => document.getElementById("avisoTell"),
  EmailInput: () => document.getElementById("mail"),
  EmailAvisoArea: () => document.getElementById("avisoEmail"),
  UfInput: () => document.getElementById("uf"),
  CidadeInput: () => document.getElementById("cidade"),
  TypeInput: () => document.getElementById("tipo_lead"),
  NichoInput: () => document.getElementById("nicho"),
  InteresseInput: () => document.getElementById("Interesse"),
  ResponsavelInput: () => document.getElementById("Responsavel"),
  DataInput: () => document.getElementById("Data"),
  Button: () => document.getElementById("register-btn"),
};
// FUNCTION PARA MOSTRAR  MENSAGEM DE ERRO
function errorMensage(mensage, element) {
  formElement.Button().setAttribute("disabled", "disabled");
  element.style.display = "block";
  element.innerHTML = mensage;
}
// VALIDAÇÃO DE NOME VIA REGEX 

function ValidationName(Name) {
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  const result = regex.test(Name);
  if (!result) {
    errorMensage("Insira um Nome  Válido !", formElement.NomeAvisoArea());
    formElement.nomeInput().style.borderBottom = "1px solid red";
  } else {
    formElement.Button().removeAttribute("disabled", "disabled");
    formElement.nomeInput().style.borderBottom = "1px solid green";
    formElement.NomeAvisoArea().style.display = "none";
  }
}  


// VALIDAÇÃO DE E-MAIL VIA REGEX


function ValidationEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const test = regex.test(email);
  if (!test) {
    errorMensage("Insira uma E-mail Válido !", formElement.EmailAvisoArea());
    formElement.EmailInput().style.borderBottom = "1px solid red";
  } else {
    formElement.Button().removeAttribute("disabled", "disabled");
    formElement.EmailInput().style.borderBottom = "1px solid green";
    formElement.EmailAvisoArea().style.display = "none";
  }
}

// VALIDAÇÃO DE TELEFONE VIA REGEX


function ValidationTell(tell) {
  $(formElement.tellInput()).mask("(00) 0000-0000");
  const regex = /^\(\d{2}\) \d{4}-\d{4}$/;
  const test = regex.test(tell);
  if (!test) {
    errorMensage("Insira um número Válido !", formElement.TellAvisoArea());
    formElement.tellInput().style.borderBottom = "1px solid red";
  } else {
    if (test === true) {
      formElement.Button().removeAttribute("disabled", "disabled");
      formElement.tellInput().style.borderBottom = "1px solid green";
      formElement.TellAvisoArea().style.display = "none";
    }
  }
}

// CHAMANDO ESSAS FUNCTIONS ATRAVÉS DOS EVENTOS

$(formElement.tellInput()).keyup((e) => {
  ValidationTell(formElement.tellInput().value);
});

$(formElement.EmailInput()).keyup((e) => {
  ValidationEmail(formElement.EmailInput().value);
});

$(formElement.nomeInput()).keyup((e) => {
  ValidationName(formElement.nomeInput().value);
});
