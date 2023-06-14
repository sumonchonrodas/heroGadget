// add data to localStorage
// const addToDb = id => {
//  let shoppingCart = {};

import Cart from "../components/Cart";

// //  get previous data from localStorage
// const storedCart = localStorage.getItem('shopping-cart');
//  if(storedCart){
//     shoppingCart = JSON.parse(storedCart);
//  };


// //  add quantity 
// const quantity = shoppingCart[id];
//  if(quantity){
//     const newQuantiy = quantity+1;
//     shoppingCart[id] = newQuantiy;
//  }
// else{
//     shoppingCart[id] = 1;
// }

// localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))



// }

const addToDb = id=> {
    
   let producItem = {};
//    get the data from localStorage
const cartStored = localStorage.getItem('shopping-cart');
    if(cartStored){
        producItem = JSON.parse(cartStored);
    }

    // add the quantity 
const quantity = producItem[id];
    if (!quantity) {
        producItem[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        producItem[id] = newQuantity;
    }
    
    localStorage.setItem('shopping-cart',JSON.stringify(producItem))
}

const getStoredCart = () =>{
    let shoppingCart= {}
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart =JSON.parse(storedCart);
    }
    return shoppingCart;

}

// remove data from database 

const removeDataToDb = (id) =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// all remove from shopping Cart
const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')



export {addToDb,getStoredCart,removeDataToDb, deleteShoppingCart}
