const getRandomUser = async () => {
  const url = 'https://randomuser.me/api/?results=10';
  try {
  const response = await axios.get(url);
  const userData= document.getElementById("user-data")
  const datosRandomUser = await response.data.results;
  console.log(datosRandomUser)
  let cardsUsers = "";
  for (var i = 0; i < datosRandomUser.length; i++) {
    cardsUsers += `
    <div class="col-12 col-lg-3 mt-4">
    <div class="card">
      <img class="card-img-top" src="${datosRandomUser[i].picture.large}" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${datosRandomUser[i].name.title} ${datosRandomUser[i].name.first} ${datosRandomUser[i].name.last}</h5>
        <p class="card-text">${datosRandomUser[i].email}</p>
        <p class="card-text">${datosRandomUser[i].phone} </p>
        <p class="card-text"><small class="text-muted">${datosRandomUser[i].location.city} </small></p>
      </div>
    </div>
    </div>
    `;
  }
  userData.innerHTML = cardsUsers;

  } catch (err) {
  console.log(err);
  }
  }

  (() => {
    getRandomUser();
    })();