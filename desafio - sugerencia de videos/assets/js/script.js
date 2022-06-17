const iifeVideos = (() => {
  let getValores = (url, id) => {
    id.setAttribute("src", url);
  };
  return {
    publicFunction: (url, id) => getValores(url, id),
  };
})();
class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }
  setInicio() {
    return "";
  }
}
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
    this.getId = () => id;
  }
  playMultimedia() {
    iifeVideos.publicFunction(this.url, this._id);
  }
  setInicio(time) {
    this.getId().setAttribute("src", `${this.url}?start=${time}`);
  }
}
let playPelicula = new Reproductor(
  "https://www.youtube.com/embed/ZFjanBaknjY",
  peliculas
);
playPelicula.playMultimedia();
playPelicula.setInicio(4442);

let playMusic = new Reproductor(
  "https://www.youtube.com/embed/TO-_3tck2tg",
  musica
);
playMusic.playMultimedia();
playMusic.setInicio(0);


let playSerie = new Reproductor(
  "https://www.youtube.com/embed/Eum4MFbiYiE",
  series
);
playSerie.playMultimedia();
playSerie.setInicio(71);
