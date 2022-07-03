let getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const post_data = document.getElementById('post-data');
    const postNumered = document.createElement("ol");
    post_data.append(postNumered);
    data.forEach((elemento) => {
      postNumered.innerHTML += `<li>
                                  <p><strong>${elemento.title}</strong></p>
                                  <p>${elemento.body}</p>
                                  </br>
                              </li>`;
      return data;
    });
  } catch (error) {
    console.log(error);
  }
};
