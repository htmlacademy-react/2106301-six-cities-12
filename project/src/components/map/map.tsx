import {Locations, Offer} from '../../types/offer';
import './map.css';
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';

type MapProps = {
  offers: Offer[];
}

export function Map({offers}: MapProps) {
  const cityLocation: Locations = [];

  offers.map((offer) => cityLocation.push(offer.location));

  const dusseldorf = {
    name: 'Dusseldorf',
    location: {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  };

  const customIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2494/2494112.png',
    iconSize: [38, 38]
  });


  return (
    <MapContainer center={[dusseldorf.location.latitude, dusseldorf.location.longitude]} zoom={13}>
      <TileLayer
        attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}
        url={'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
      />
      {cityLocation.map((city) => (
        <Marker key={city.longitude} position={[city.latitude, city.longitude]} icon={customIcon}></Marker>
      ))}
    </MapContainer>
  );
}
