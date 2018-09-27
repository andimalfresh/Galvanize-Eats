

document.addEventListener("DOMContentLoaded", function printNames(pushNames) {
    fetch('https://galvanize-eats-api.herokuapp.com/menu')
        .then((data) => data.json())
        .then((data) => {
            for (var i = 0; i < data.menu.length; i++) {
                console.log(data.menu[i].name)
                console.log(data.menu[i].price)
                var apiInfoPassed = (data.menu[i].name + ' ' + data.menu[i].price)
                console.log(apiInfoPassed)
                document.querySelector('.foodAndPriceList').innerHTML += apiInfoPassed
            }
        })
})
