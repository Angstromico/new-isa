import { useEffect } from 'react'; 
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const map = L.map('map').setView([51.505, -0.09], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  
        L.marker([51.505, -0.09]).addTo(map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
      }
    }, []);
  
    return <div id="map" className="h-[300px] my-[80px] mx-[24px] self-center w-[350px] md:w-[97%]"></div>;
  };

export default MapComponent;