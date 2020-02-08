import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registrationRequest } from 'modules/auth/actions';
import { getError, getIsLoading } from 'modules/auth/selectors';
import BaseButton from 'components/BaseButton';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';


const Form = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: 50,
  borderRadius: 5,
  backgroundColor: '#FFFFFF',
});

export default function RegistrationForm() {
  const [stateForm, setStateForm] = React.useState({
    email: '',
    name: '',
    surname: '',
    password: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => getError(state));
  const isLoading = useSelector((state) => getIsLoading(state));

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(registrationRequest({ ...stateForm }));
  }

  function pushOnAuthorizationForm(e) {
    e.preventDefault();
    history.push('/authorization');
  }

  function handleChange(e) {
    const { value } = e.target;
    setStateForm({
      ...stateForm,
      [e.target.name]: value,
    });
  }

  return (
    <Form
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography
        component="b"
        variant="h4"
      >
        Регистрация
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
      >
        Уже зарегистрированы?
        {' '}
        <Link
          href="#"
          data-testid="login-link"
          onClick={pushOnAuthorizationForm}
        >
          Войти
        </Link>
      </Typography>
      <Box
        width="100%"
        mt={2}
      >
        <TextField
          label="Адрес электронной почты *"
          type="email"
          name="email"
          fullWidth
          value={stateForm.email}
          onChange={handleChange}
        />
      </Box>
      <Box
        width="100%"
        mt={3}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Имя*"
              type="text"
              name="name"
              fullWidth
              value={stateForm.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Фамилия*"
              type="text"
              name="surname"
              fullWidth
              value={stateForm.surname}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        width="100%"
        mt={3}
      >
        <TextField
          label="Пароль *"
          type="password"
          name="password"
          fullWidth
          value={stateForm.password}
          onChange={handleChange}
        />
      </Box>
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
          content="Зарегистрироваться"
          disabled={isLoading}
          bgcolor={isLoading ? 'text.disabled' : ''}
        />
      </Box>
    </Form>
  );
}
