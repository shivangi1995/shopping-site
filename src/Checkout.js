import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src='https://m.media-amazon.com/images/G/31/shazam/980-x-55-Gav6u._V418692799_.jpg'
                    alt='' />
                {basket?.length === 0 ? (
                    <div>
                        <h2 className='checkout__title'>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                    </p>
                    </div>
                ) :
                    (
                        <div>
                            <h2 className='checkout__title'>Your Shopping Basket</h2>
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
