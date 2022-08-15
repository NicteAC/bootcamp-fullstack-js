const baseUrl = "https://api.github.com/users";
const request = async (url) => {
  const results = await fetch(url);
  const response = await results.json();
  console.log(response);
  return response;
};

const getUser = async (user) => {
  const url = `${baseUrl}/${user}`;
  return request(url);
};

const getRepo = async (user, page, per_page) => {
  const url = `${baseUrl}/${user}/repos?page=${page}&per_page=${per_page}`;
  return request(url);
};

const user = document.getElementById("nombre").value;
const page = document.getElementById("pagina").value;
const per_page = document.getElementById("repoPagina").value;

const getData = async () => {
  try {
    const [user, repos] = await Promise.all([
      getUser(user),
      getRepo(user, page, per_page),
    ]);
    if (user.message) {
      throw "Ha ocurrido un error en el usuario";
    }
    if (repos.message) {
      throw "Ha ocurrido un error en repositorios";
    }
    repos.forEach((element) => {
      const name = element.name;
      console.log("Nombre repositorio", name);
    });


    6
  } catch (err) {
    console.error(err);
  }
};
function sendForm(event) {
    //blah blah blah
    event.preventDefault();
  }
  const form = document.getElementById("form");
  form.addEventListener("submit", sendForm);