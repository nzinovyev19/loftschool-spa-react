import 'date-fns';
import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MCIcon } from 'loft-taxi-mui-theme';
import BaseButton from 'components/BaseButton';
import BaseBackgroundWrap from 'components/BaseBackgroundWrap';
import { AuthContext } from 'context/Auth';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function Profile() {
  const [state, setState] = useState({
    cardNumber: '',
    date: new Date(),
    name: '',
    cvc: '',
  });
  const { isAuthorized, logout } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!isAuthorized) {
      logout();
      history.push('/');
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/map');
    console.log(state);
  }

  function handleChange(e) {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  return (
    <BaseBackgroundWrap>
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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
              </MuiPickersUtilsProvider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BaseBackgroundWrap>
  );
}
