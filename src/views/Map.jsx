import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Mapboxgl from 'mapbox-gl';
import Header from 'components/Header/Index';
import BaseButton from 'components/BaseButton';
import LoggingContext from 'context/LoggingContext';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

Map.propTypes = {
  setPage: PropTypes.func.isRequired,
};

ProfileInfo.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export function ProfileInfo({ setPage }) {
  return (
    <Box>
      <Typography
        variant="h4"
      >
        Заполните платежные данные
      </Typography>
      <Box
        mt={2}
      >
        <Typography
          component="p"
          variant="subtitle1"
        >
          Укажите информацию о банковской карте, чтобы сделать заказ.
        </Typography>
      </Box>
      <Box
        width="100%"
        mt={2}
      >
        <BaseButton
          onClick={() => setPage('profile')}
          fullWidth
          content="Перейти в профиль"
        />
      </Box>
    </Box>
  );
}

export function TravelInfo() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Откуда</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={age}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Куда</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={age}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={3}>
        <BaseButton fullWidth type="submit" content="Вызвать такси" />
      </Box>
    </>
  );
}

Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


export default function Map({ setPage }) {
  const { isLoggedIn, logout } = useContext(LoggingContext);
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

  useEffect(() => {
    if (!isLoggedIn) logout();
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
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
    >
      <Header setPage={setPage} />
      <Box
        component="section"
        position="relative"
        height="100%"
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
    </Box>
  );
}
