import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { SearchProvider } from './components/SearchContext';

function App() {

  const weatherApi = process.env.REACT_APP_WEATHER_API;
  const locationApi = process.env.REACT_APP_LOCATION_API;
  return (

    <SearchProvider>
        <Navbar/>
        <Main wAPI = {weatherApi} lAPI= {locationApi}/>
        <Footer/>
    </SearchProvider>
  );
}

export default App;
