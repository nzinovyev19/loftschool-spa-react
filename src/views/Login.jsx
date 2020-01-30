import React from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';
import Background from 'assets/images/bg.jpg';
import RegistrationForm from 'components/RegistrationForm';
import AuthorizationForm from 'components/AuthorizationForm';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';

const Wrap = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
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

const views = {
  registration: function registration(setForm, setPage) {
    return <RegistrationForm setForm={setForm} setPage={setPage} />;
  },
  authorization: function authorization(setForm, setPage) {
    return <AuthorizationForm setForm={setForm} setPage={setPage} />;
  },
};

Login.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Login({ setPage }) {
  const [form, setForm] = React.useState('authorization');

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
            {views[form](setForm, setPage)}
          </Grid>
        </Grid>
      </Container>
    </Wrap>
  );
}
