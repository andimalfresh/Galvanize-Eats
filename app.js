

function printNames() {
    fetch('https://galvanize-eats-api.herokuapp.com/menu')
        .then((data) => data.json())
        .then((data) => {
            for (var i = 0; i < data.menu.length; i++) {
                var apiInfoPassed = (data.menu[i].name + '   $' + data.menu[i].price)
                var target = document.querySelector('.foodAndPriceList')
                var button = document.createElement('button')
                // document.querySelector('button')
                button.innerHTML = apiInfoPassed
                target.parentNode.insertBefore(button, target.nextSibling)
                button.setAttribute('class', 'apiButton')
                button.setAttribute('value', data.menu[i].price)
                button.setAttribute('name', data.menu[i].name)
                button.addEventListener('click', function () {
                    console.log(event.target.value)
                    console.log(event.target.name)
                    document.querySelector('.dropbox')
                    var menuRow = document.createElement('p')
                    document.querySelector('.dropbox').innerHTML += event.target.name + ' ' + event.target.value



                })

            }
        })
}
printNames()


// var getButton = document.querySelectorAll('.apibutton')
// console.log(getButton)



var getFormSubmit = document.getElementById('#submitInfo')
// var customerInfoSaved = getFormSubmit.addEventListener('click', function () {
//     console.log('button clicked')
// })

