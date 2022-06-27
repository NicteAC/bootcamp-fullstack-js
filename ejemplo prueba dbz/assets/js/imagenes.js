import Personajes from "./consulta.js";

document.getElementById("buttonImages").addEventListener("click", async () => {
  const { personajes } = await Personajes.getData();
  console.log("personajes", personajes);
  const pj = document.getElementById("nombre").value;
  const imagenesPjTemplate = personajes
    .find((p) => p.name == pj)
    .imagenes.map((i) => `<img width="200" src="/assets/imgs/${pj}/${i}" />`)
    .join("");
  document.getElementsByClassName("personajes")[0].innerHTML =
    imagenesPjTemplate;

  document.querySelectorAll(".personajes img").forEach((i) => {
    i.addEventListener("click", (event) => {
      $("#imagenesModal").modal("toggle");
      const imagenSrc = event.target.src;
      document.getElementById(
        "preview"
      ).style.backgroundImage = `url(${imagenSrc})`;
    });
  });
});
