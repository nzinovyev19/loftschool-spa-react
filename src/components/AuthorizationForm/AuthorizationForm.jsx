import React from 'react';
import PropTypes from 'prop-types';
import { authorize } from 'modules/auth/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  setForm: PropTypes.func.isRequired,
  error: PropTypes.string,
  token: PropTypes.string.isRequired,
  authorize: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

AuthorizationForm.defaultProps = {
  error: null,
};

export function AuthorizationForm(props) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  const {
    isLoading,
    error,
    token,
    authorize,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    authorize({ email: state.email, password: state.password });
  }

  function handleChange(e) {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  React.useEffect(() => {
    if (token) history.push('/map');
  });

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
          onClick={() => props.setForm('registration')}
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

const mapDispatchToProps = { authorize };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorizationForm);
