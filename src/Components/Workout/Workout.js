
import { faPieChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Content from '../Content/Content';
import './Workout.css'
import { SetToDb} from '../LocalDb/LocalDb';
import { getStoredDb } from '../LocalDb/LocalDb';


const Workout = () => {
    
    const [contents, setContent] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setContent(data))
    }, [])
    const AddToCart = (content) => {
        const newCart = [...cart, content];
        setCart(newCart);
        SetToDb(content)
    }

    return (
        <div className='content-container'>

            <div className='content-body'>
                <div className='icon'>
                    <FontAwesomeIcon icon={faPieChart}></FontAwesomeIcon> <h2 className='title-name'>Power Zone</h2>
                </div>
                <p className='activity-info'>Select today’s activity</p>

                <div className="workout-container">
                    {
                        contents.map(content => <Content
                            key={content.id}
                            content={content} AddToCart={AddToCart}
                        ></Content>)
                    }
                </div>
            </div>


            <div className="cart-container">
            <Cart cart={cart}> </Cart>
            </div>

        </div>
    );
};

export default Workout;