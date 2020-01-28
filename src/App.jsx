import React from 'react';
import Box from '@material-ui/core/Box';
import { theme } from 'loft-taxi-mui-theme';
import { ThemeProvider, styled } from '@material-ui/core/styles';

import LoggingContext from 'context/LoggingContext';

import Map from 'views/Map';
import Login from 'views/Login';
import Profile from 'views/Profile';
import Registration from 'views/Registration';

const views = {
  map: function map(setPage) { return <Map setPage={setPage} />; },
  login: function login(setPage) { return <Login setPage={setPage} />; },
  profile: function profile(setPage) { return <Profile setPage={setPage} />; },
  registration: function registration(setPage) { return <Registration setPage={setPage} />; },
};

const Main = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  minHeight: 600,
});


function App() {
  const [page, setPage] = React.useState('login');
  const [isLoggedIn, setIsLoggedin] = React.useState(true);
  const loggingContext = {
    login: (email, password) => {
      setIsLoggedin(true);
      setPage('map');
      console.log(email, password, 'Вошли');
    },
    logout: () => {
      setIsLoggedin(false);
      setPage('login');
      console.log('Вышли');
    },
    isLoggedIn,
  };

  return (
    <ThemeProvider theme={theme}>
      <LoggingContext.Provider value={loggingContext}>
        <Main>
          {views[page](setPage)}
        </Main>
      </LoggingContext.Provider>
    </ThemeProvider>
  );
}

export default App;
