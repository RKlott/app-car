import React from 'react';
import car from './car.svg';

const Car = (props) => {
    return <img src={car} alt="" className='carBorder' height={props.height} color={props.color}/>
}
export default Car;