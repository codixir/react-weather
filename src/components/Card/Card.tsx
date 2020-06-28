import React from 'react';
import  './Card.css';

interface IWeatherItem {
  temp: number;
  temp_min: number;
  temp_max: number;
  dt_txt: string;
}

const Card:React.FC<IWeatherItem> = (props):JSX.Element => {
  const { temp, temp_max, temp_min, dt_txt} = {...props};
  return (
    <div className="card-item">
      <div>Temp: {temp}</div>
      <div>Temp Max: {temp_max}</div>
      <div>Temp Min: {temp_min}</div>
      <div>Date Text: {dt_txt}</div>
    </div>
  )
};

export default Card;