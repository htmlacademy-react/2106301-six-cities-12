import {useEffect, useRef} from 'react';
import useMap from "../../hooks/useMap";
import {icon, marker} from "leaflet";
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from "../../consts";
import {Locations, Offer} from "../../types/offer";
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[]
}

export function Map({offers}: MapProps) {
  const mapRef = useRef(null)
  const location: Locations = []
  offers.map(el => location.push(el.city.location))

  const city = {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  }

  const map = useMap(mapRef, city)

  const defaultCustomIcon = icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      location.forEach((location) => {
        marker({
          lat: location.latitude,
          lng: location.longitude,
        }, {
          icon: defaultCustomIcon,
        })
          .addTo(map);
      });
    }
  }, [map, location]);
  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  )
}
