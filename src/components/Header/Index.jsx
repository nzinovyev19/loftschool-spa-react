import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'loft-taxi-mui-theme';


import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    padding: '0',
    boxShadow: '0 -3px 7px #000000',
    backgroundColor: '#fff;',
  },
});

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Header(props) {
  const buttons = [
    {
      value: 'map',
      text: 'Карта',
    },
    {
      value: 'profile',
      text: 'Профиль',
    },
    {
      value: 'login',
      text: 'Логин',
    },
  ];
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
            <Logo
              animated="true"
              className="header__logo"
            />
          </Box>
          <Box>
            {buttons.map((button) => (
              <Button
                key={button.value}
                data-testid={button.value}
                onClick={() => props.setPage(button.value)}
              >
                {button.text}
              </Button>
            ))}
          </Box>
        </Grid>
      </Container>
    </header>
  );
}
