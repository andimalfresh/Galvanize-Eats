fetch('https://galvanize-eats-api.herokuapp.com/menu')
    .then((data) => data.json())
    .then((data) => console.log(data))