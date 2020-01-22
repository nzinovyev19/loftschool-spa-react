import React from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Login({ setPage }) {
  function handleSubmit(e) {
    e.preventDefault();
    setPage('map');
    console.log(login, password);
  }

  function handlerOnLoginValue(e) {
    setLogin(e.target.value);
  }

  function handlerOnPasswordValue(e) {
    setPassword(e.target.value);
  }

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <span>Войти</span>
      <input
        type="text"
        name="login"
        value={login}
        onChange={handlerOnLoginValue}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlerOnPasswordValue}
      />
      <input type="submit" value="Войти" />
      <p>
        Новый пользователь?
        <button type="button" onClick={() => setPage('registration')}>Зарегистрируйтесь</button>
      </p>
    </form>
  );
}
