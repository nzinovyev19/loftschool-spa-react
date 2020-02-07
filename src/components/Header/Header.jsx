import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'modules/auth/actions';
import { Logo } from 'loft-taxi-mui-theme';
import { makeStyles } from '@material-ui/core/styles';

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
  logout: PropTypes.func.isRequired,
};

export function Header({ logout }) {
  const classes = useStyles();
  const history = useHistory();

  const buttons = [
    {
      value: 'map',
      text: 'Карта',
    },
    {
      value: 'profile',
      text: 'Профиль',
    },
  ];

  function logoutHandler(e) {
    logout();
  }

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
                onClick={() => history.push(button.value)}
              >
                {button.text}
              </Button>
            ))}
            <Button data-testid="logout" onClick={logoutHandler}>Выйти</Button>
          </Box>
        </Grid>
      </Container>
    </header>
  );
}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(Header);
