import React from 'react';
import { MemoizedAuthProvider } from 'context/Auth';
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
        <Main>
          {views[page](setPage)}
        </Main>
      </MemoizedAuthProvider>
    </ThemeProvider>
  );
}

export default App;
