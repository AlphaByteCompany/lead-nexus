function moreInfos(i) {
  $("#more-btn" + i).click(() => {
    $(".area-" + i).show(300);
    $(".content").addClass("desfoque2");
    $(".close-" + i).click(() => {
      $(".area-" + i).hide(300);
      $(".content").removeClass("desfoque2");
    });
  });
}

function LeadElement(
  nome,
  tell,
  email,
  uf,
  cidade,
  material,
  type,
  process,
  i,
  callback
) {
  $("#area-leads").append(`<tr class = "leads-person" id="lead-${i}" > 
    <td id="id-lead">${i + 1}</td>
    <td id="nome-lead"><div class="lead-img">
      <img src="assets/utilites/user.png" alt="">
    </div>  ${nome}</td>
    <td id="mail-lead"> ${email}</td>
    <td id="tell" >${tell}</td>
    <td id="more-lead" >
     <button id ="more-btn${i}" class="more-btn more-${i}">
        <img src="assets/utilites/more.svg" alt="" />
      </button> 
   <!--informações ao cliclar -->
  <div class="more-leads-area area-${i}">
    <div class="close2 close-${i}">
      <img src="assets/utilites/close.svg" alt="" />
    </div>
    <div class="simple-lead-info">
      <div class="lead-img-more">
        <img src="assets/utilites/user.png" alt="" />
      </div>
      <div class="contact-infos">
        <div class="lead-id-more">
          <p id="lead-id">ID : <span>${i + 1}</span></p>
        </div>
        <div class="lead-name-more">
          <p id="lead-name">Nome : <span>${nome}</span></p>
        </div>
        <div class="lead-tel-more">
          <p class="lead-tel">Tel: <span>${tell}</span></p>
        </div>
        <div class="lead-mail-more">
          <p id="lead-mail">
            E-mail: <span>${email}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="lead-local-infos-more">
      <div class="lead-uf-more">
        <p id="lead-uf">UF : <span id="estado_status">${uf}</span></p>
      </div>
      <div class="lead-cidade-more">
        <p id="lead-cidade">
          Cidade : <span id="cidade_status">${cidade}</span>
        </p>
      </div>
      <div class="lead-material-more">
        <p id="lead-material">
          Material : <span id="material_status">${material}</span>
        </p>
      </div>
      <div class="lead-material-tipo-more">
        <p id="lead-material">
          Tipo de Material : <span id="type_material_status">${type}</span>
        </p>
      </div>
      <div class="lead-precess-more">
        <p id="lead-process">
          Processo : <span id="process_status">${process}</span>
        </p>
      </div>
    </div>
  </div>
    </td>  
  </tr>
  `); 
  if (i % 2 == 0) {
    $("#lead-" + i).css("background-color", " #F5F5F5");
  } else {
    $("#lead-" + i).css("background-color", "#FAFAFA");
  }
  
  callback(i);
}

let db = JSON.parse(localStorage.getItem(key) || "[]");
for (let i = 0; i < db.length; i++) {
  LeadElement(
    db[i]["nome"],
    db[i]["tell"],
    db[i]["email"],
    db[i]["uf"],
    db[i]["cidade"],
    db[i]["material"],
    db[i]["tipoMaterial"],
    db[i]["processo"],
    i,
    moreInfos
  );
}
