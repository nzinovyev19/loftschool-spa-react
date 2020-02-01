import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BaseButton from 'components/BaseButton';
import { AuthContext } from 'context/Auth';

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

AuthorizationForm.propTypes = {
  setForm: PropTypes.func.isRequired,
};

export default function AuthorizationForm({ setForm }) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });
  const { authorize } = React.useContext(AuthContext);
  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault();
    authorize(state.email, state.password);
    history.push('/map');
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
          onClick={() => setForm('registration')}
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
          value={state.email}
          onChange={handleChange}
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
          content="Войти"
          data-testid="login-btn"
        />
      </Box>
    </Form>
  );
}
