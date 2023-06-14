import React, { useContext } from 'react';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utilities/fackDB';
import { CartContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    const products = useContext(ProductContext);
    const [cart,setCart] = useContext(CartContext)
    // console.log(products);
    // cart button handler, add to cart in localStorage.
    const handleAddToCart = product =>{
        let newCart = [];
        const exiests = cart.find(exiestProduct => exiestProduct.id === product.id);
        if (!exiests) {
        product.quantity = 1;
        newCart = [...cart, product]  
                  
        }
        else{
            const rest= cart.filter(exiestProduct => exiestProduct.id !== product.id
            )
            exiests.quantity = exiests.quantity + 1;
                newCart = [ ...rest, exiests]
                
        }
        toast.success('items Added ✅');
        
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='product-container'> 
           {
            products.map(product => <ProductCard handleAddToCart={handleAddToCart} key={product.id} product={product}/>)
           }
        </div>
    );
};

export default Shop;