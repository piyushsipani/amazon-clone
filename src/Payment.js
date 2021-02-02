import { Link } from 'react-router-dom'
import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'


const Payment=()=>{

    const [{basket,user},dispatch]=useStateValue()

    return (

        <div className="payment">
            <div className="payment__container">
                {/* payment section -delivery address */}

            <h1>Checkout {<Link to='/checkout'>{basket?.length}items</Link>}</h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>React Lane</p>
                        <p>Los Angeles,CA</p>
                    </div>
                </div>


                {/* payment setion -reviewing the items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and delivery</h3>
                    </div>



                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            reting={item.rating}

                            />

                        ))}
                    </div>


                    </div>


                {/* payment section -payment method */}
                <div className="payment__section">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe magic will go here */}
                    </div>
            </div>
        </div>
    )
}

export default Payment