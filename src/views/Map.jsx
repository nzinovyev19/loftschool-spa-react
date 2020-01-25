import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Mapboxgl from 'mapbox-gl';
import Header from 'components/Header/Index';

Map.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Map({ setPage }) {
  const [mapOptions] = useState({
    lng: 5,
    lat: 34,
    zoom: 2,
  });
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  };
  let mapContainer;
  Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  useEffect(() => {
    const map = new Mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapOptions.lng, mapOptions.lat],
      zoom: mapOptions.zoom,
    });
    return () => {
      map.remove();
    };
  });

  return (
    <>
      <Header setPage={setPage} />
      <div style={style} ref={(el) => { mapContainer = el; }} />
    </>
  );
}
