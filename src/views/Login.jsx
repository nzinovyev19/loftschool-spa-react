import React from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';
import Background from 'assets/images/bg.jpg';
import LoginForm from 'components/LoginForm/Index';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';

const Wrap = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  minHeight: 600,
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 1,
  '&:after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
  },
});

Login.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Login({ setPage }) {
  return (
    <Wrap>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Box
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Logo animated="true" white="true" />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <LoginForm
              setPage={setPage}
            />
          </Grid>
        </Grid>
      </Container>
    </Wrap>
  );
}
