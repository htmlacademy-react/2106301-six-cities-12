import {Offer} from '../../types/offer';
import './map.css';
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {Icon} from 'leaflet';
import {useAppSelector} from '../../hooks';
import {getCurrentMarker} from '../../store/offers-list/offers-list.selectors';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../consts';

type MapProps = {
  offers: Offer[];
}

export function Map({offers}: MapProps) {
  const currentMarker = useAppSelector(getCurrentMarker);

  const dusseldorf = {
    name: 'Dusseldorf',
    location: {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  };

  const customIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [38, 38]
  });

  const activeMarker = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [38, 38]
  });

  return (
    <MapContainer center={[dusseldorf.location.latitude, dusseldorf.location.longitude]} zoom={13}>
      <TileLayer
        attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}
        url={'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
      />
      {offers.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.latitude, offer.location.longitude]}
          icon={offer.id === currentMarker ? activeMarker : customIcon}
        >
        </Marker>)
      )}
    </MapContainer>
  );
}
