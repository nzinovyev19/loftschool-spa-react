import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MCIcon } from 'loft-taxi-mui-theme';
import { setProfile } from 'modules/profile/actions';
import { getToken } from 'modules/auth/selectors';
import BaseButton from 'components/BaseButton';
import BaseBackgroundWrap from 'components/BaseBackgroundWrap';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

function Profile() {
  const {
    register,
    handleSubmit,
    errors,
    control,
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => getToken(state));
  const {
    error,
    isLoading,
    isLoaded,
    info,
  } = useSelector((state) => state.profile);

  function onSubmit(data) {
    dispatch(setProfile({ ...data, token }));
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
              onSubmit={handleSubmit(onSubmit)}
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
                          error={!!errors.cardNumber}
                          helperText={errors.cardNumber && 'Поле обязательно для заполнения'}
                          inputRef={register({ required: true })}
                          defaultValue={info?.cardNumber}
                          type="text"
                          name="cardNumber"
                          label="Номер карты*"
                          fullWidth
                        />
                        <Box mt={2}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller
                              as={(
                                <DatePicker
                                  error={!!errors.expiryDate}
                                  helperText={errors.expiryDate && 'Поле обязательно для заполнения'}
                                  inputRef={register({ required: true })}
                                  views={['year', 'month']}
                                  label="Срок действия *"
                                  format="MM/yy"
                                  fullWidth
                                />
                              )}
                              control={control}
                              name="expiryDate"
                              onChange={(data) => data}
                              defaultValue={new Date()}
                            />
                          </MuiPickersUtilsProvider>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card>
                      <Box p={2} pb={3}>
                        <TextField
                          error={!!errors.cardName}
                          helperText={errors.cardName && 'Поле обязательно для заполнения'}
                          inputRef={register({ required: true })}
                          defaultValue={info?.cardName}
                          label="Имя владельца *"
                          type="text"
                          name="cardName"
                          fullWidth
                        />
                        <Box mt={2}>
                          <TextField
                            error={!!errors.cvc}
                            helperText={errors.cvc && 'Поле обязательно для заполнения'}
                            inputRef={register({ required: true })}
                            defaultValue={info?.cvc}
                            label="CVC *"
                            type="text"
                            name="cvc"
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
                      {isLoaded && (
                        <Box
                          width="100%"
                          mt={2}
                        >
                          <BaseButton
                            fullWidth
                            content="Перейти на карту"
                            onClick={() => history.push('/map')}
                          />
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BaseBackgroundWrap>
  );
}


export default (Profile);
