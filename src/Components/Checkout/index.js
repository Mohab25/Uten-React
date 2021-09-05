import React from 'react'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import CartBody from '../Cart/CartBody'
import './styles/styles.css'


export default function Index() {

    let ProductArr = useSelector(state=>state.cartItemChangeReducer.cart_items)
    let [total_price_arr,setTotalPriceArr] = useState(Array(ProductArr.length).fill(0))
    console.log(total_price_arr)
    let [total_quantity_arr,setTotalQuantityArr] = useState(Array(ProductArr.length).fill(0))
    let total_price = useSelector(state=>state.TotalsReducer.total_price)
    let total_quantity = useSelector(state=>state.TotalsReducer.total_quantity)

    if(total_quantity_arr.length==0){return(<div></div>)}
    else{
    return (
        <div className='Checkout'>
            <div className='Checkout-main-container'>
                <div className='Cart-summary'>
                    <CartBody products={ProductArr} quantity={total_quantity_arr} total_price={total_price_arr}/>
                </div>
                <form className='checkout-form'>
                    <div className='checkout-personal-info'> 
                            <input type='text' id='name' placeholder='Name..'/>
                            <input type='email' id='emial' placeholder='Email..' className='checkout-email'/>
                    </div>
                    <h4 className='shipping-title'>Shipping Information</h4>
                    <div className='checkout-shipping-info'> 
                        <input type='text' id='Address' placeholder='Address..'/>
                        <input type='text' id='City' placeholder='City..'/>
                        <input type='text' id='State' placeholder='State..'/>
                        <input type='text' id='Zip-Code' placeholder='Zip Code..'/>
                    </div>
                    <input type='submit' name='Card-Details' value='Card Details' id='checkout-submit'/>
                </form>
            </div>
        </div>
    )
}
}