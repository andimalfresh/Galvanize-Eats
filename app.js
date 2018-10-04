var eatsTotal = 0
var orders = {}
var newOrderItem = {}
var orderItemArray = []
var orderPriceArray = []
var quantityMultiplier = 0
var pullName = ''
var pullNumber = ''
var pullAddress = ''


function printNames() {
    fetch('https://galvanize-eats-api.herokuapp.com/menu')
        .then((data) => data.json())
        .then((data) => {
            for (var i = 0; i < data.menu.length; i++) {
                var apiInfoPassed = (data.menu[i].name + '   $' + data.menu[i].price)
                var target = document.querySelector('.foodAndPriceList')
                var button = document.createElement('button')
                button.innerHTML = apiInfoPassed
                target.parentNode.insertBefore(button, target.nextSibling)
                button.setAttribute('class', 'apiButton')
                button.setAttribute('value', data.menu[i].price)
                button.setAttribute('name', data.menu[i].name)
                button.addEventListener('click', function () {
                    orderItemArray.push(event.target.name)
                    orderPriceArray.push(event.target.value)
                    event.target.style.backgroundColor = 'orange'
                })

            }
        })
}
printNames()
// Add Quantity Function

var addItemButton = document.querySelector('.addItem')
addItemButton.addEventListener('click', function (event) {
    event.preventDefault()
    let getQuantity = parseInt(document.getElementById('quantityBox').value)
    quantityMultiplier += getQuantity
    console.log(getQuantity)
    // document.querySelector('.foodAndPriceList')
})
// Post EVERYTHING  FUNCTION
var sendButton = document.querySelector('.sendButton')
sendButton.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('nameBox')

    console.log("Send Button Pushed")
})

var buttonListen = document.querySelector('.apiButton')
buttonListen.addEventListener('click', function (event) {
    console.log('Fufu')
})



// var pushSide = document.querySelector('.dropBox')
// var newOrderItem = document.createElement('p')
// pushSide.parentNode.insertBefore(newOrderItem, pushSide)
// document.querySelector('.dropBox').innerHTML += event.target.name + ' ' + event.target.value
// eatsTotental += parseFloat(event.target.value).toFixed(2)
// console.log(eatsTotal)











// var getButton = document.querySelectorAll('.apibutton')
// console.log(getButton)



// var getFormSubmit = document.getElementById('#submitInfo')
// getFormSubmit.addEventListener('click', function () {
//     console.log('foo')
// })
// var customerInfoSaved = getFormSubmit.addEventListener('click', function () {
//     console.log('button clicked')
// })

