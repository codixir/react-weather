import React from 'react';
import Card from '../../components/Card/Card';

interface IWeatherItem {
  temp: number;
  temp_min: number;
  temp_max: number;
  dt_txt: string;
}

interface Props {
  weatherItems: IWeatherItem[]
}

const CardList:React.FC<Props> = ({weatherItems}) => {
  return (
    <div className="card-list">
        { weatherItems.map((item: IWeatherItem, index: number) => {
            return (
              <Card key={index} { ...item} />    
            )
        })}
    </div>
  );
};

export default CardList;