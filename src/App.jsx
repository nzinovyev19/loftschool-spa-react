import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'loft-taxi-mui-theme';

import Map from 'views/Map';
import Login from 'views/Login';
import Profile from 'views/Profile';
import Registration from 'views/Registration';

const views = {
  map: function map(setPage) { return <Map setPage={setPage} />; },
  login: function login(setPage) { return <Login setPage={setPage} />; },
  profile: function profile() { return <Profile />; },
  registration: function registration(setPage) { return <Registration setPage={setPage} />; },
};

function App() {
  const [page, setPage] = React.useState('login');

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {views[page](setPage)}
      </div>
    </ThemeProvider>
  );
}

export default App;
