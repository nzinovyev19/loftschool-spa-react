import React from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Login({ setPage }) {
  function handleSubmit(e) {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;

    setPage('map');
    console.log(login, password);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <span>Войти</span>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <input type="submit" value="Войти" />
        <p>
          Новый пользователь?
          <button type="button" onClick={() => setPage('registration')}>Зарегистрируйтесь</button>
        </p>
      </form>
    </>
  );
}
