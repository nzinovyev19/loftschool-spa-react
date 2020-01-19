import React from 'react';
import PropTypes from 'prop-types';

Registration.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default function Registration({ setPage }) {
  function handleSubmit(e) {
    e.preventDefault();
    setPage('map');
    console.log(name, email, password, secondName);
  }

  // TODO: iterable inputs list
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secondName, setSecondName] = React.useState('');

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <span>Регистрация</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="second-name"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <input
          type="password"
          name="passwrod"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Зарегистрироваться" />
      </form>
    </>
  );
}
