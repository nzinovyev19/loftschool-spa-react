import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Logo from 'assets/images/logo.png';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    padding: '10px 0',
    boxShadow: '0 -3px 7px #000000',
    backgroundColor: '#fff;',
  },
});

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Header(props) {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <img
              src={Logo}
              alt="LoftTaxi"
              className="header__logo"
            />
          </Box>
          <Box>
            <Button onClick={() => props.setPage('map')}>Карта</Button>
            <Button onClick={() => props.setPage('profile')}>Профиль</Button>
            <Button onClick={() => props.setPage('login')}>Логин</Button>
          </Box>
        </Grid>
      </Container>
    </header>
  );
}
