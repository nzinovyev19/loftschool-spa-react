import React from 'react';
import { AuthConsumer, MemoizedAuthProvider } from 'context/Auth';
import Header from 'components/Header';
import Box from '@material-ui/core/Box';
import { theme } from 'loft-taxi-mui-theme';
import { ThemeProvider, styled } from '@material-ui/core/styles';

import Map from 'views/Map';
import Login from 'views/Login';
import Profile from 'views/Profile';

const views = {
  map: function map(setPage) { return <Map setPage={setPage} />; },
  login: function login(setPage) { return <Login setPage={setPage} />; },
  profile: function profile(setPage) { return <Profile setPage={setPage} />; },
};

const Main = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  minHeight: 600,
});


function App() {
  const [page, setPage] = React.useState('login');

  return (
    <ThemeProvider theme={theme}>
      <MemoizedAuthProvider>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          height="100%"
        >
          <AuthConsumer>
            {({ isAuthorized }) => (isAuthorized ? <Header setPage={setPage} /> : null)}
          </AuthConsumer>
          <Main>
            {views[page](setPage)}
          </Main>
        </Box>
      </MemoizedAuthProvider>
    </ThemeProvider>
  );
}

export default App;
