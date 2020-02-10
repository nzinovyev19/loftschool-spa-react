import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import TravelInfo from 'components/MapInfo/TravelInfo';
import ProfileInfo from 'components/MapInfo/ProfileInfo';

import Mapboxgl from 'mapbox-gl';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map() {
  const [mapOptions] = useState({
    lng: 49.1315,
    lat: 55.7824,
    zoom: 10,
  });
  const profile = useSelector((state) => state.profile.info);
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  };
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new Mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapOptions.lng, mapOptions.lat],
      zoom: mapOptions.zoom,
    });
    return () => {
      map.remove();
    };
  }, [mapOptions]);

  return (
    <Box
      component="section"
      position="relative"
      height="100%"
      width="100%"
    >
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Box
              position="absolute"
              top="10%"
              width="350px"
              p={5}
              bgcolor="#FFF"
              zIndex="2"
            >
              {profile ? <TravelInfo /> : <ProfileInfo data-testid="profile-info" />}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div style={style} ref={mapContainerRef} />
    </Box>
  );
}

export default Map;
