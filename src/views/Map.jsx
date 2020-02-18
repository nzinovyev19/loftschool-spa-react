import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { useSelector } from 'react-redux';

import TravelInfo from 'components/MapInfo/TravelInfo';
import ProfileInfo from 'components/MapInfo/ProfileInfo';
import { getCoords } from 'modules/route/selectors';

import Mapboxgl from 'mapbox-gl';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
let map = null;

function Map() {
  const [mapOptions] = useState({
    lng: 30.27,
    lat: 60,
    zoom: 12,
  });
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  };
  const profile = useSelector((state) => state.profile.info);
  const coords = useSelector((state) => getCoords(state));
  const mapContainerRef = useRef(null);

  const drawRoute = () => {
    map.flyTo({
      zoom: 15,
      center: coords[0],
    });
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coords,
          },
        },
      },
      paint: {
        'line-color': '#ffc617',
        'line-width': 8,
      },
    });
  };

  useEffect(() => {
    map = new Mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapOptions.lng, mapOptions.lat],
      zoom: mapOptions.zoom,
    });
    return () => {
      map.remove();
    };
  }, [mapOptions]);

  useEffect(() => {
    if (map.getLayer('route')) {
      map.removeLayer('route').removeSource('route');
    }
    if (coords && coords.length) drawRoute();
  });

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
