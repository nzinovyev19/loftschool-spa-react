import React from 'react';
import Header from 'components/Header/Header';

import Map from 'views/Map';
import Login from 'views/Login';
import Profile from 'views/Profile';
import Registration from 'views/Registration';

const views = {
  map: function map() { return <Map />; },
  login: function login(setPage) { return <Login setPage={setPage} />; },
  profile: function profile() { return <Profile />; },
  registration: function registration(setPage) { return <Registration setPage={setPage} />; },
};

function App() {
  const [page, setPage] = React.useState('login');

  return (
    <div className="App">
      <Header setPage={setPage} />
      {views[page](setPage)}
    </div>
  );
}

export default App;
