import React from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import RegistrationForm from 'components/RegistrationForm';
import AuthorizationForm from 'components/AuthorizationForm';
import BaseBackgroundWrap from 'components/BaseBackgroundWrap';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const views = {
  registration: function registration(setForm, setPage) {
    return <RegistrationForm setForm={setForm} setPage={setPage} />;
  },
  authorization: function authorization(setForm, setPage) {
    return <AuthorizationForm setForm={setForm} setPage={setPage} />;
  },
};

export default function Login() {
  const [form, setForm] = React.useState('authorization');

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
    >
      <BaseBackgroundWrap>
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
              {views[form](setForm)}
            </Grid>
          </Grid>
        </Container>
      </BaseBackgroundWrap>
    </Box>
  );
}
