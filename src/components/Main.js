import React, {useEffect } from "react";
import Weatherinfo from "./Weatherinfo";
import Map from "./Map";
import {useSearchContext } from './SearchContext';

export default function Main(props) {

  const { city, setCity } = useSearchContext('');

    const LocationAPI =
      `https://api.geoapify.com/v1/ipinfo?&apiKey=${props.lAPI}`;

      useEffect(() => {
          
        const getLocation = async () => {
        try{  
        let response = await fetch(LocationAPI);
        let data = await response.json();

        const cityObject = data?.city;
        const cityName = cityObject?.name;

        console.log("City name:", cityName);
        setCity(cityName);
        
      } catch (error) {
        console.log("Error in Finding Location", error);
        
      }}
      getLocation();
      
    },[])
  return (
    <div>
      
      { city && <Weatherinfo city={city} wAPI={props.wAPI}/>  }
      <Map />
    </div>
  );
}
