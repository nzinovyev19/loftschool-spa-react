import React from 'react';
import { useHistory } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from 'context/Auth';

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

export default function Header() {
  const classes = useStyles();
  const { logout } = React.useContext(AuthContext);
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
    history.push('/');
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
