var quantityMultiplier = 0
// var orderPriceArrayAdded = 0
// var orderItemArray = []
// var orderPriceArray = []
// var orderItemArrayAdded = []
// var subTotal = orderPriceArrayAdded
// var tax = (orderPriceArrayAdded + (orderItemArrayAdded * .2)).toFixed(2)
// var grandTotal = subTotal + tax
itemsForOrder = []
var orderObject = {}
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
var orderPriceArrayAdded = 0
var orderItemArray = []
var orderPriceArray = []
var orderItemArrayAdded = []
var subTotal = orderPriceArrayAdded
var tax = (orderPriceArrayAdded + (orderItemArrayAdded * .2)).toFixed(2)
var grandTotal = subTotal + tax

var sendButtonSelection = document.querySelector('.sendButton')
sendButtonSelection.addEventListener('click', function (event) {
    event.preventDefault()
    var nameInput = document.querySelector('.nameBox')
    var name = nameInput.value
    var numberInput = document.querySelector('.numberBox')
    var number = numberInput.value
    var addressInput = document.querySelector('.addressBox')
    var address = addressInput.value
    var subTotal = orderPriceArrayAdded * quantityMultiplier
    var salesTax = parseInt(((orderPriceArrayAdded * quantityMultiplier) * 0.2).toFixed(2))
    function getItems() {
        for (var i = 0; i < quantityMultiplier; i++) {
            for (var j = 0; j < orderItemArray.length; j++) {
                itemsForOrder.push(orderItemArray[i])
            }
        }
    }
    getItems()
    Object.assign(orderObject, { Name: name })
    Object.assign(orderObject, { Number: number })
    Object.assign(orderObject, { Address: address })
    Object.assign(orderObject, { Subtotal: subTotal })
    Object.assign(orderObject, { Tax: salesTax })
    Object.assign(orderObject, { Total: subTotal + salesTax })
    Object.assign(orderObject, { OrderItems: itemsForOrder })

    fetch('https://galvanize-eats-api.herokuapp.com/orders', settings)
        .then(function (responce) {
            console.log(responce)
        })

    var settings = {
        method: 'POST',
        headers: { 'content type': 'application/JSON' },
        body: JSON.stringify.orderObject,
    }
        .then((orderObject => orderObject.JSON()))
})


// function test() {
//     for (var i = 0; i < quantityMultiplier; i++) {
//         for (var j = 0; j < orderItemArray.length; j++) {
//             itemsForOrder.push(orderItemArray[i])
//         }
//     }
// }




// // var submitButton = document.querySelector('input[type=button]')
// // submitButton.addEventListener('.submit', submitForm)
// // var form = document.querySelector('form')
// // form.addEventListener('submit', submitForm)
// // console.log("Form Submit")
// // function submitForm(event) {
// //     event.preventDefault()
//     fetch('https://galvanize-eats-api.herokuapp.com/orders', settings)
//         .then(function (responce) {
//             console.log(responce)
//         })
// }


//     var settings = {
//         method: 'POST',
//         headers: { 'content type': 'application/JSON' },
//         body: JSON.stringify.data,
//     }
//         .then((data => data.JSON())





