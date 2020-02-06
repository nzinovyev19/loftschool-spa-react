import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MCIcon } from 'loft-taxi-mui-theme';
import { setProfile } from 'modules/profile/actions';
import BaseButton from 'components/BaseButton';
import BaseBackgroundWrap from 'components/BaseBackgroundWrap';

import 'date-fns';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

function Profile() {
  const [stateForm, setStateForm] = useState({
    cardNumber: '',
    date: new Date(),
    name: '',
    cvc: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { error, isLoading } = useSelector((state) => state.profile);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setProfile({ ...stateForm, token }));
    history.push('/map');
  }

  function handleChange(e) {
    const { value } = e.target;
    setStateForm({
      ...stateForm,
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
                            value={stateForm.cardNumber}
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
                              value={stateForm.date}
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
                            value={stateForm.name}
                            onChange={handleChange}
                            fullWidth
                          />
                          <Box mt={2}>
                            <TextField
                              label="CVC *"
                              type="text"
                              name="cvc"
                              value={stateForm.cvc}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        width="100%"
                        mt={3}
                      >
                        <Box
                          display="flex"
                          justifyContent="flex-end"
                          m="5px 0"
                          color="#EB5757"
                        >
                          {error}
                        </Box>
                        <BaseButton
                          type="submit"
                          content="Сохранить"
                          disabled={isLoading}
                          bgcolor={isLoading ? 'text.disabled' : ''}
                        />
                      </Box>
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


export default (Profile);
