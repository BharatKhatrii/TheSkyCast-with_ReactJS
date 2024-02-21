import React, { useState, useEffect } from 'react'
import {useSearchContext } from './SearchContext';

export default function Navbar() {

  const getFormattedTime = () => {
    const date = new Date();
    const hrs = date.getHours();
    const min = date.getMinutes();

    return hrs < 12 ? `${hrs}:${min} AM` : `${hrs - 12}:${min} PM`;
  }

  const [time, setTime] = useState(getFormattedTime);
  const [searchTerm, setSearchTerm] = useState('');
  const {city, setCity} = useSearchContext('');

  useEffect(() => {
    setInterval(() => {
      setTime(getFormattedTime);
    }, 1000);
  },[]);

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchCity = async () => {
    setCity(searchTerm);
  }

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleSearchCity();
    }
  }

  return (
    <nav>
    <div className="nav-left">
      <img src="/images/logo.png" alt="Logo"/>
      <span className="title"> The SkyCast</span>
    </div>

    <div className="nav-center">
      <input type="text" placeholder="Search City" id="cityName" value={searchTerm} onChange={handleOnChange} onKeyDown={handleEnterKey}/>
      <img src="/images/search-icon.png" alt="icon" onClick={handleSearchCity} id="search-icon"/>
    </div>

    <div className="nav-right">
      <span id="clock">{time}</span>
    </div>

  </nav>

  )
}
