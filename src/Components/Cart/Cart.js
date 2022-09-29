import React, { useEffect, useState } from 'react';
import './Cart.css'
import picture from '../../images/moinul.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredDb, SetToDb } from '../LocalDb/LocalDb';



const Cart = (props) => {
    const { cart } = props;

    const showToastMessage = () => {
        toast.success('Successfully Completed !!', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    let total = 0;
    for (const content of cart) {
        total = total + content.time;
    }

    const [breakTime, setTime] = useState(0);
    const AddToCart = (breakTime) => {
        SetToDb(breakTime);
        setTime(breakTime);
    }
    useEffect(()=>{
        const savedTime = [];
        const saved = getStoredDb();
        for(const id in saved){
            savedTime.push(id);
            console.log(savedTime)
        }
        setTime((savedTime[savedTime.length-2]));
    },[])
    return (
        <div className='cart-body'>
            <div className='user-info'>
                <img src={picture} alt="" />
                <div className='user-info-details'>
                    <h4>Moinul Islam</h4>
                    <div className='icon'>
                        <FontAwesomeIcon className='icon-location' icon={faLocationDot}></FontAwesomeIcon>
                        <p>Brahmanbaria, Dhaka</p>
                    </div>
                </div>
            </div>

            <div className='user-details'>
                <h4>75kg <br /> Weight</h4>
                <h4>5.11inch <br />Height</h4>
                <h4>24years <br />Age</h4>
            </div>
            <h3>Add A Break</h3>
            <div className='btn-container'>
                <button className='btn' onClick={() => AddToCart(5)}>5s</button>
                <button className='btn' onClick={() => AddToCart(10)}>10s</button>
                <button className='btn' onClick={() => AddToCart(30)}>30s</button>
                <button className='btn' onClick={() => AddToCart(50)}>50s</button>
            </div>

            <h3>Exercise Details</h3>
            <div className='time-details'>
                <p className='exercise-time'>Exercise time : {total} seconds</p>
                <p className='break-time'>Break time : {breakTime} Second</p>
                <button onClick={showToastMessage} className='activity-btn'>Activity Completed</button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Cart;