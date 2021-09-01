$(".tab__link").click((e) => {
  const { id } = e.target;
  $(".choosen").removeClass("choosen");
  $(e.target).addClass("choosen");
  $(".map__stage").attr("src", `./img/Maps/${id}`);
  $("#zoom").attr("href", `./img/Maps/${id}`);
  $("#download").attr("href", `./img/Maps/${id}`);
});
