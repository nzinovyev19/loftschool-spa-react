import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { getToken } from 'modules/auth/selectors';

import { Logo } from 'loft-taxi-mui-theme';
import RegistrationForm from 'components/RegistrationForm';
import AuthorizationForm from 'components/AuthorizationForm';
import BaseBackgroundWrap from 'components/BaseBackgroundWrap';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Login() {
  const authMatch = useRouteMatch('/authorization');
  const history = useHistory();
  const token = useSelector((state) => getToken(state));

  React.useEffect(() => {
    if (token) history.push('/map');
  });

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
              {
                authMatch
                  ? <AuthorizationForm />
                  : <RegistrationForm />
              }
            </Grid>
          </Grid>
        </Container>
      </BaseBackgroundWrap>
    </Box>
  );
}
