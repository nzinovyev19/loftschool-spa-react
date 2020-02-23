import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { authorizeRequest } from 'modules/auth/actions';
import { getIsLoading, getError, getToken } from 'modules/auth/selectors';
import BaseButton from 'components/BaseButton';

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
  error: PropTypes.string,
  authorizeRequest: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

AuthorizationForm.defaultProps = {
  error: null,
};

export function AuthorizationForm(props) {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const history = useHistory();
  const {
    isLoading,
    error,
    authorizeRequest,
  } = props;

  function onSubmit(data) {
    authorizeRequest(data);
  }

  function pushOnRegisrtationForm(e) {
    e.preventDefault();
    history.push('/registration');
  }

  return (
    <Form
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
          onClick={pushOnRegisrtationForm}
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
          error={!!errors.email}
          helperText={errors.email && 'Поле обязательно для заполнения'}
          inputRef={register({ required: true })}
          label="Почта*"
          placeholder="Почта*"
          type="email"
          name="email"
          fullWidth
          data-testid="email-input"
        />
      </Box>
      <Box
        width="100%"
        mt={3}
      >
        <TextField
          error={!!errors.password}
          helperText={errors.password && 'Поле обязательно для заполнения'}
          inputRef={register({ required: true })}
          label="Пароль*"
          placeholder="Пароль*"
          type="password"
          name="password"
          fullWidth
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
          content="Войти"
          disabled={isLoading}
          bgcolor={isLoading ? 'text.disabled' : ''}
          data-testid="login-btn"
        />
      </Box>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  token: getToken(state),
  error: getError(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = { authorizeRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorizationForm);
