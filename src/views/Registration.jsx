import React from 'react';
import PropTypes from 'prop-types';

Registration.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Registration({ setPage }) {
  function handleSubmit(e) {
    e.preventDefault();
    setPage('map');
    console.log(state);
  }

  function handleChange(e) {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const [state, setState] = React.useState({
    email: '',
    name: '',
    secondName: '',
    password: '',
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <span>Регистрация</span>
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="secondName"
        value={state.secondName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <input type="submit" value="Зарегистрироваться" />
    </form>
  );
}
