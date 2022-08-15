const getData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  try {
    let count = 0;
    const response = await fetch(url);
    const datos = await response.json();
    datos.forEach(element => {
      count += 1;
      if (count<21){
        console.log(element.id)
        console.log(element.title)
      }
    })
  } catch (err) {
    console.log(err);
  }
}

const retornaPromesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Información Enviada') }, 3000)
  })
}
const funcionAsincrona = async () => {
  getData();
  const resp = await retornaPromesa();
  console.log(resp)
}
funcionAsincrona();
