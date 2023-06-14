import { getStoredCart } from "../utilities/fackDB";

export const productAndCartData = async () => {
  const productData = await fetch("products.json");
  const products = await productData.json();
  const saveCart = getStoredCart();
  let cartArray = [];
  for (const id in saveCart) {
    const foundData = products.find(product => product.id === id);
    if (foundData) {
      foundData.quantity = saveCart[id];
      cartArray.push(foundData);
    }
  }
  return {cartArray, products};
};
