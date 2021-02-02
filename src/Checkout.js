import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
function Checkout() {

const [{basket,user},dispatch]=useStateValue();



    return (
        <div className="checkout">
           <div className="checkout__left">
               <img src="https://tse3.mm.bing.net/th?id=OIP.L6Ir6yHkXQuC5D_Kr04paAHaA7&pid=Api&P=0&w=437&h=55" className="checkout__ad"
                alt=""/>
                
        <div>
        <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">
                Your shopping basket
            </h2>


            {basket.map(item=>(

            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
            ))}

            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
        </div>

           </div>


         <div className="checkout__right">
            <Subtotal/>
         </div>  


        </div>
    )
}

export default Checkout
