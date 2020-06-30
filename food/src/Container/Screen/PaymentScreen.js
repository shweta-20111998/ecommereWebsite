import React, { useEffect, useState } from 'react';
import { savePayment } from '../../actions/cartActions';
import CheckoutSteps from '../../Components/steps/CheckoutSteps';
import classes from './Screen.css'
import { useDispatch } from 'react-redux';

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  }
  return <div>
    <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
    <div className={classes.Form}>
        <form onSubmit={submitHandler} >
            <ul className={classes.FormContainer}>
                <li>
                    <h2>Payment</h2>
                </li>
                <li>
                  <div>
                    <input type="radio" name="paymentMethod" id="paymentMethod" value="googlePay" onChange={(e) => setPaymentMethod(e.target.value)}></input>
                    <label htmlFor="paymentMethod">
                      Google Pay
                    </label>
                  </div>
                </li>
                <li>
                  <button type="submit" className={classes.button}>Continue</button>
                </li>
            </ul>
          </form>
    </div>
  </div>

}
export default PaymentScreen;