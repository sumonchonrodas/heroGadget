import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext, useState } from "react";
import "./components/Modal"
import MyModal from "./components/Modal";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const App = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { cartArray, products } = useLoaderData();
  const [cart,setCart] = useState(cartArray)

  const   cartAlart = sessionStorage.getItem('alart');
  if(cart.length>0 && cartAlart !='true'){
    setIsOpen(true);
    sessionStorage.setItem('alart', true)
  }


  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart,setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-1px)]">
          <Outlet />
        </div>
        <Footer />
        {/* <Modal  /> */}
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen}></MyModal>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
