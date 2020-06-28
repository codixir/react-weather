import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',  
});
const API_KEY = 'XYZ';

interface IWeatherItem {
  temp: number;
  temp_min: number;
  temp_max: number;
  dt_txt: string;
}

function App():JSX.Element {
  const [weatherItems, setWeatherItems] = useState<IWeatherItem[]>([]);
  const [hasError, setError] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>('toronto');

  const transformResponse = (res: any):IWeatherItem[] => {
    if (res && res.data && res.data.list) {
      return res.data.list.map((item: any) => {
        const weather = {
          temp: item.main.temp,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          dt_txt: item.dt_txt,
        };

        return weather;
      });
    } else {
      return [];
    }
  };

  const listenToSearch = (searchKey?: string) => {
    let key = searchKey && searchKey.length ? searchKey: 'toronto';
    setSearchKey(key);
  };

  useEffect(() => {
    let url = `/data/2.5/forecast?q=${searchKey}&appid=${API_KEY}`;
    const fetchData = async () => {
      setWeatherItems([]);
      try {
        const res = await axiosInstance({
          method: 'get',
          url: url,
        });      
        const weatherList = transformResponse(res);
        let newWeather = [...weatherList];

        console.log(weatherItems);
        setWeatherItems(newWeather);
        
      } catch (e) {
        setError(true);
      }
    };

    fetchData();

  }, [searchKey]);

  return (
    <div className="App">
      <Search listenToSearch={listenToSearch}/>
      <CardList weatherItems={weatherItems} />
    </div>
  );
}

export default App;