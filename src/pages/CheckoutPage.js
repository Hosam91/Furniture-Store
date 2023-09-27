import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
import { formatPrice } from '../utils/helpers'

// extra imports
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { myUser } = useUserContext()
  const { total_amount, shipping_fee, clearCart } = useCartContext()

  const [succes, setSucces] = useState(false)

  let total = total_amount + shipping_fee

  useEffect(() => {}, [succes])

  const cmopleatPayment = () => {
    // const fail = <h5> </h5>
    // const succesful =

    if (total_amount > 0) {
      clearCart()
      setSucces(true)
    }
    if (total_amount === 0) {
      // clearCart()
      setSucces(false)
    }
  }

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {/* <h1>Checkout</h1> */}
        <div className="section section center ">
          <h3>Hello , {myUser.nickname}</h3>

          {/* Card content goes here */}
          {/* <h4>Your Payment Card Number</h4> */}
          <p>Card Number: **** **** **** 1234</p>
          <h5>Your total is: {formatPrice(total)}</h5>
          {/* Add payment form and other checkout elements */}
          <div>
            <button to="/" className="btn" onClick={cmopleatPayment}>
              Pay
            </button>

            <div className="pay-succes">
              {' '}
              {succes ? (
                <h5> Your payment is done successfully</h5>
              ) : (
                <h5>Fill your cart first</h5>
              )}{' '}
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;
  text-align: center;
  button {
    width: 100%;
  }

  .pay-succes {
    width: 300px;
    
    text-align: center;
    border: green 2px solid;
    padding: 0.5rem;
    margin: 0.8rem auto;
  }
`
export default CheckoutPage
