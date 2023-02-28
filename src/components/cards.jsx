import React from 'react';


const Cards = (props) => {
    return(
        <div className='card'>
         <img src={props.img} className='img1'></img>
         <div className='name'> {props.name}</div>

        </div>
       

    )
}

export default Cards;