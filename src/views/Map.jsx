import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from 'modules/auth/selectors';
import TravelInfo from 'components/MapInfo/TravelInfo';
import ProfileInfo from 'components/MapInfo/ProfileInfo';

import Mapboxgl from 'mapbox-gl';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

Map.propTypes = {
  token: PropTypes.string.isRequired,
};

function Map({ token }) {
  const [mapOptions] = useState({
    lng: 49.1315,
    lat: 55.7824,
    zoom: 10,
  });
  const [isProfileInfoEmpty, setProfileInfoValue] = useState(true);
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  };
  let mapContainer;
  const history = useHistory();

  useEffect(() => {
    if (!token) history.push('/');
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

  useEffect(() => {
    if (localStorage.profile) setProfileInfoValue(false);
  }, [isProfileInfoEmpty]);

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
              width="30%"
              p={5}
              bgcolor="#FFF"
              zIndex="2"
            >
              {isProfileInfoEmpty ? <ProfileInfo data-testid="profile-info" /> : <TravelInfo />}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div style={style} ref={(el) => { mapContainer = el; }} />
    </Box>
  );
}

const mapStateToProps = (state) => ({
  token: getToken(state),
});

export default connect(mapStateToProps)(Map);
