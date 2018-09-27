
document.addEventListener("DOMContentLoaded", function printNames(event) {
    fetch('https://galvanize-eats-api.herokuapp.com/menu')
        .then((data) => data.json())
        .then((data) => {
            document.getElementsByClassName('.foodAndPriceList')
            for (var i = 0; i < data.menu.length; i++) {
                console.log(data.menu[i].name)
            }

            for (var i = 0; i < data.menu.length; i++) {
                console.log(data.menu[i].price)
            }
        })
})

fetch('https://galvanize-eats-api.herokuapp.com/menu')
    .then((data) => data.json())
    .then((data) => function getNames(data) {
        for (var i = 0; i < data.menu.length; i++) {
            console.log(data.menu[1].name)
        }
    })
