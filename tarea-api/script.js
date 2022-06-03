$(document).ready(function () {
  $("button").on("click", function () {
    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users",
      dataType: "json",
      success: function (datosApi) {
        datosApi.data.forEach((element) => {
          $(".resultado").append(`<p>${element.id}-${element.email}-
    ${element.first_name}-${element.last_name}-
    </p> <img src="${element.avatar}" alt="imagen de ${element.first_name} ${element.last_name}">`);
        });
      },
      error: function (error) {
        console.error(error);
      },
    });
  });
});
