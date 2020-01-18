import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from 'assets/images/logo.png';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const styles = () => ({
  root: {
    padding: '10px 0',
    boxShadow: '0 -3px 7px #000000',
    backgroundColor: '#fff;'
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
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
              <img src={Logo} alt="LoftTaxi" className="header__logo"/>
            </Box>
            <Box>
              <Button>Карта</Button>
              <Button>Профиль</Button>
              <Button>Войти</Button>
            </Box>
          </Grid>
        </Container>
      </header>
    );
  }
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
