import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { deleteShoppingCart, removeDataToDb } from '../utilities/fackDB';
import { CartContext } from '../App';
import { toast } from 'react-hot-toast';


const Cart = () => {
        const [cart,setCart] = useContext(CartContext)
        
    let total = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
    }

    // remove data from shopping cart 
    const handleRemoveItem = id =>{
        const remaining = cart.filter(singleCart =>singleCart.id !== id)
        setCart(remaining)
        removeDataToDb(id)
        toast.error('Remove product 🚆')
    }

    // clear shoppingCart from db 
    const HandlerClearCart = () => {
     setCart([])   
    deleteShoppingCart()
    return toast.success('All item are removed. 🤟')
}

    //place order
    const orderHandler = () =>{
        if(cart.length > 0){
            setCart([]);
            deleteShoppingCart()
            return toast.success('Order is done, Bro ✋')
        }
        else{
        toast.error('Cart is emty. 🔥')
        }

    }

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col mx-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>{cart.length?'Review cart item':'Cart is EMPTY'}</h2>
                <ul className='flex flex-col divide-y divide-gray-700 '>
                    {cart.map(product =><CartItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></CartItem>)}
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total amount : <span className='font-semibold'>{total}</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                    <div className='flex justify-end space-x-4'>
                        {
                            cart.length>0?<button className='btn-outlined' onClick={()=>HandlerClearCart()}>Clear cart</button>: <Link to='/shop'><button className='btn-outlined'>Back to home</button></Link>
                        }
                        <button className='btn-primary' onClick={()=>orderHandler()}>Place order</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;