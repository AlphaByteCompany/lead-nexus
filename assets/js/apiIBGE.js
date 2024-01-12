$("#uf").html(` 
    <option value="Disable" disabled selected>
     Selecione Estado
    </option>
    <option value="Não Informado" >
    Não Informado
  </option>`);
const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
$.getJSON(url, function (data) {
  $.each(data, function (v, val) {
    $("#uf").append(`<option value="${val.sigla}">${val.sigla}</option>`);
  });
}); 

$("#uf").on("change", () => {
  $("#cidade").html(" ");

  $("#cidade").html(` 
      <option value="Disable" disabled selected>
       Selecione a Cidade
      </option>
      <option value="Não Informado" >
      Não Informado
    </option>`);
  urlCity =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
    $("#uf").val() +
    "/municipios";
  $.getJSON(urlCity, function (data) {
    $.each(data, function (v, val) {
      $("#cidade").append(`<option value="${val.nome}">${val.nome}</option>`);
    });
  });
});
