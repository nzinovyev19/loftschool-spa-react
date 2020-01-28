import 'date-fns';
import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { MCIcon } from 'loft-taxi-mui-theme';
import Header from 'components/Header/Index';
import BaseButton from 'components/BaseButton';
import Background from 'assets/images/bg.jpg';
import LoggingContext from 'context/LoggingContext';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { styled } from '@material-ui/core/styles';


Profile.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Profile({ setPage }) {
  function handleSubmit(e) {
    e.preventDefault();
    setPage('map');
    console.log(state);
  }

  function handleChange(e) {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const [state, setState] = useState({
    cardNumber: '',
    date: new Date(),
    name: '',
    cvc: '',
  });
  const { isLoggedIn, logout } = useContext(LoggingContext);

  useEffect(() => {
    if (!isLoggedIn) logout();
  });

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

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
    >
      <Header setPage={setPage} />
      <Wrap>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Container>
            <Grid
              container
              justify="center"
            >
              <Grid item xs={6}>
                <Box
                  component="form"
                  p={5}
                  borderRadius={5}
                  bgcolor="#FFF"
                  textAlign="center"
                  onSubmit={handleSubmit}
                >
                  <Typography variant="h4">Профиль</Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                  >
                    Способ оплаты
                  </Typography>
                  <Box mt={3}>
                    <Grid
                      container
                      spacing={2}
                    >
                      <Grid item xs={6}>
                        <Card>
                          <Box
                            position="relative"
                            p={2}
                            pb={3}
                          >
                            <MCIcon />
                            <TextField
                              type="text"
                              name="cardNumber"
                              label="Номер карты*"
                              fullWidth
                              value={state.cardNumber}
                              onChange={handleChange}
                            />
                            <Box mt={2}>
                              <DatePicker
                                name="date"
                                views={['year', 'month']}
                                label="Срок действия *"
                                format="MM/yy"
                                disabled
                                fullWidth
                                value={state.date}
                                onChange={handleChange}
                              />
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                      <Grid item xs={6}>
                        <Card>
                          <Box p={2} pb={3}>
                            <TextField
                              label="Имя владельца *"
                              type="text"
                              name="name"
                              value={state.name}
                              onChange={handleChange}
                              fullWidth
                            />
                            <Box mt={2}>
                              <TextField
                                label="CVC *"
                                type="text"
                                name="cvc"
                                value={state.cvc}
                                onChange={handleChange}
                                fullWidth
                              />
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                      <Grid item xs={12}>
                        <BaseButton type="submit" content="Сохранить" />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </MuiPickersUtilsProvider>
      </Wrap>
    </Box>
  );
}
