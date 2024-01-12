const search = {
  button: () => document.getElementById("search-button"),
  bar: () => document.getElementById("search-bar"),
};
$(search.button()).click(() => {
  $(search.bar()).toggle();
});

// animação mostrar Area de REGISTRO
$("#new-Lead").click(() => {
  $("#new-Lead").hide();
  $(".register").fadeIn(200);
  $(".content").addClass("desfoque");
  $(".close").click(function () {
    $("#new-Lead").show();
    $(".register").fadeOut(200);
    $(".content").removeClass("desfoque");
  });
});

$("#new-Lead").mouseover(() => {
  $("#sell-flux").toggle(200);
});

$(".sell-flux").click(() => {
  $(".sellflux-send").show();
  $(".sellflux-send").fadeIn(200);
  $(".close3").click(() => {
    $(".sellflux-send").hide();
    $(".sellflux-send").fadeOut(200);
  });
});

