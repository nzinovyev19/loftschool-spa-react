import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from 'components/BaseButton';
import LoggingContext from 'context/LoggingContext';

import Box from '@material-ui/core/Box';
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

LoginForm.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function LoginForm({ setPage }) {
  const { login } = React.useContext(LoggingContext);

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  function handlerOnEmailValue(e) {
    setEmail(e.target.value);
  }

  function handlerOnPasswordValue(e) {
    setPassword(e.target.value);
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Form
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography
        component="b"
        variant="h4"
      >
        Войти
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
      >
        Новый пользователь?
        {' '}
        <Link
          href="#"
          onClick={() => setPage('registration')}
          data-testid="registration-link"
        >
          Зарегистрируйтесь
        </Link>
      </Typography>
      <Box
        width="100%"
        mt={2}
      >
        <TextField
          label="Почта*"
          placeholder="Почта*"
          type="email"
          name="email"
          fullWidth
          data-testid="email-input"
          value={email}
          onChange={handlerOnEmailValue}
        />
      </Box>
      <Box
        width="100%"
        mt={3}
      >
        <TextField
          label="Пароль*"
          placeholder="Пароль*"
          type="password"
          name="password"
          fullWidth
          value={password}
          onChange={handlerOnPasswordValue}
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
          content="Войти"
          data-testid="login-btn"
        />
      </Box>
    </Form>
  );
}
