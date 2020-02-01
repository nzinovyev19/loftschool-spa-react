import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import { AuthConsumer, MemoizedAuthProvider } from 'context/Auth';
import Header from 'components/Header';
import Box from '@material-ui/core/Box';
import { theme } from 'loft-taxi-mui-theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Map from 'views/Map';
import Login from 'views/Login';
import Profile from 'views/Profile';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MemoizedAuthProvider>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            height="100vh"
            minHeight={600}
          >
            <AuthConsumer>
              {({ isAuthorized }) => (isAuthorized ? <Header /> : null)}
            </AuthConsumer>
            <Switch>
              <Route
                path="/"
                exact
                component={Login}
              />
              <Route path="/map" component={Map} />
              <Route path="/profile" component={Profile} />
              <Redirect to="/" />
            </Switch>
          </Box>
        </MemoizedAuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
