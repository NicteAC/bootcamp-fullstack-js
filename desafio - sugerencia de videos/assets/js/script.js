const musica = document.getElementById("musica");
const peliculas = document.getElementById("peliculas");
const series = document.getElementById("series");
const iifeVideos = (() => {
  let getValores = (url, id) => {
    id.setAttribute("src", url);
  };
  return {
    publicFunction: (url, id) => {
      getValores(url, id);
    },
  };
})();
class Multimedia {
  constructor() {
    this._url;
  }
  get url() {
    return this._url;
  }
  setInicio() {
    return "Iniciando video...";
  }
}
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  playMultimedia() {
    //IIFe
    iifeVideos.publicFunction(this.url, this._id);
  }
  setInicio() {
    //IIFE
    this.
  }
}
