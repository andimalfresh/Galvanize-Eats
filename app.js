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
var orderPriceArrayAdded = 0
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
var addItemButton = document.querySelector('.addItem')
addItemButton.addEventListener('click', function (event) {
    event.preventDefault()
    let getQuantity = parseInt(document.getElementById('quantityBox').value)
    quantityMultiplier += getQuantity
    var selectDrop = document.querySelector('.dropBox')
    for (var i = 0; i < quantityMultiplier; i++) {
        for (var j = 0; j < orderItemArray.length; j++) {
            var p = document.createElement('p')
            selectDrop.appendChild(p).innerText = orderItemArray[j] + ' ' + orderPriceArray[j]
        }
    }
    var pushTotal = document.getElementById('subtotal')
    for (var i = 0; i < orderPriceArray.length; i++) {
        orderPriceArrayAdded += parseFloat(orderPriceArray[i])
    }
    pushTotal.innerText = orderPriceArrayAdded * quantityMultiplier
    var pushTax = document.getElementById('tax')
    pushTax.innerText = ((orderPriceArrayAdded * quantityMultiplier) * .2).toFixed(2)
    var pushgTotal = document.getElementById('gTotal')
    pushgTotal.innerText = (((orderPriceArrayAdded * quantityMultiplier) * .2) + (orderPriceArrayAdded * quantityMultiplier)).toFixed(2)
})

// Post EVERYTHING  FUNCTION 
var sendButton = document.querySelector('.sendButton')
sendButton.addEventListener('click', function (event) {
    event.preventDefault()
    var name = document.getElementById('nameBox').innerText
    console.log(name)
    var phone = document.getElementById('numberBox').innerText
    console.log(phone)
    var address = document.getElementById('addressBox').innerText
    console.log(address)
    console.log("Send Button Pushed")
})





