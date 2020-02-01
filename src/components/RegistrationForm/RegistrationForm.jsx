import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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

RegistrationForm.propTypes = {
  setForm: PropTypes.func.isRequired,
};

export default function RegistrationForm({ setForm }) {
  const [state, setState] = React.useState({
    email: '',
    name: '',
    secondName: '',
    password: '',
  });
  const history = useHistory();

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
          onClick={() => setForm('authorization')}
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
          value={state.email}
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
              value={state.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Фамилия*"
              type="text"
              name="secondName"
              fullWidth
              value={state.secondName}
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
          value={state.password}
          onChange={handleChange}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        width="100%"
        mt={3}
      >
        <BaseButton
          type="submit"
          content="Зарегистрироваться"
        />
      </Box>
    </Form>
  );
}
