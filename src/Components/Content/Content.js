import React from 'react';
import './Content.css'

const Content = (props) => {
    const {img, name,details,Age, time} = props.content;
    const {AddToCart} = props;
    return(
        <div className='content'>
            <img src={img} alt="" />
            <div className="content-info">
                <p>Name : {name}</p>
                <p>{details}</p>
                <p>Age : {Age}</p>
                <p><small>Time : {time}s</small></p>
            </div>
            <button onClick={() => AddToCart(props.content)} className='btn-info'>Add to list</button>
        </div>
    )
};

export default Content;