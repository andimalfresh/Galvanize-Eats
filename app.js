var eatsTotal = 0
var orders = {}
var newOrderItem = {}
var orderItemArray = []
var orderPriceArray = []
var quantityMultiplier = 0
var pullName = ''
var pullNumber = ''
var pullAddress = ''
var subTotal = 0

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
    var selectDrop = document.querySelector('.dropBox')
    for (var j = 0; j < orderItemArray.length; j++) {
        var p = document.createElement('p')
        selectDrop.appendChild(p).innerText = orderItemArray[j] + ' ' + orderPriceArray[j]
        subTotal += parseFloat(orderPriceArray[j]).toFixed(2)

    }
    var pushTotal = document.getElementById('subtotal')
    pushTotal.innerText += parseFloat(subTotal).toFixed(2)
    var pushTax = document.getElementById('tax')
    pushTax.innerText += parseFloat(subTotal * .2).toFixed(2)
    var pushGrand = document.getElementById('gTotal')
    // var finalGrandTotal = parseFloat(subTotal).toFixed(2) + parseFloat(subTotal * .2).toFixed(2)
    pushGrand.innerText += parseFloat(pushTotal.innerText).toFixed(2) + parseFloat(pushTax.innerText).toFixed(2)
})
// Post EVERYTHING  FUNCTION
var sendButton = document.querySelector('.sendButton')
sendButton.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('nameBox')

    console.log("Send Button Pushed")
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

