import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const handleLocationChange = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // key=kimsenin görmemesi için şifremi VITE_WEATHER_API ismiyle .env dosyama attım ve burada kullanmak için import.meta.env.VITE_WEATHER_API diyerek ulaştım
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API
          }&q=${location}&days=4&aqi=yes&alerts=yes`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (location) {
      fetchData();
    }
  }, [location]);
  
  return (
    <>
      <div className="app-container">
        <h1 className="app-title">HAVA DURUMU UYGULAMASI</h1>
        <div className="input-container">
          <input
            className="location-input"
            placeholder="Şehir Giriniz"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
