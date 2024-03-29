// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
// 1. Loop for to the array products to get the item to add to cart
    for(var producto in products){
        // 2. Add found product to the cartList array
        if (id == producto) {
            cartList.push(products[producto-1]);
        }
    }
}

// Exercise 2
function cleanCart() {
    while (cartList.length > 0) {
        cartList.pop();
    }
}

// Exercise 3
function calculateTotal() {
// Calculate total price of the cart using the "cartList" array
    nuevoArrayPrecios = cartList.map(cartProducts => cartProducts.price);
    for(let i = 0; i < nuevoArrayPrecios.length; i++){
        total += nuevoArrayPrecios[i];
    }
}


// Exercise 4
//Using the "cartlist" array that contains all the items in the shopping cart, 
//generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart(){
    console.clear;
    for (let i = 0; i < cartList.length; i++) {
       if (cart.some(articulo => articulo.id === cartList[i].id)){
        console.log ("existe? SI")
        let cartid = cart.find(o => o.id === cartList[i].id);
        cartid.cantidad += 1;
        cartid.subtotal += cartList[i].price;
        console.log(cartid);
       }else {
            console.log ("existe? NO");
            cartList[i].cantidad = 1;
            cartList[i].subtotal = cartList[i].price;
            cart.push(cartList[i]);
       }
    }
}

// Exercise 5
function applyPromotionsCart() {
// Apply promotions to each item in the array "cart"
    if (cart.some(articulo => articulo.name === 'cooking oil')) {
        let cartoil = cart.find(o => o.name === 'cooking oil');
        if (cartoil.cantidad >= 3) {
            cartoil.subtotalWithDiscount = cartoil.cantidad * 10;
        }
    };
    if (cart.some(articulo => articulo.name === 'Instant cupcake mixture')) {
        let cartpastis = cart.find(o => o.name === 'Instant cupcake mixture');
        if (cartpastis.cantidad >= 10) {
            cartpastis.subtotalWithDiscount = ((cartpastis.price * 2 / 3) * cartpastis.cantidad);
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
