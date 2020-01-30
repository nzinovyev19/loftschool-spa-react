import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function AuthProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  function authorize(email, password) {
    console.log('Вошли', email, password);
    setIsAuthorized(true);
  }

  function logout() {
    setIsAuthorized(false);
    console.log('Вышли');
  }

  function getProviderValue() {
    return {
      logout,
      authorize,
      isAuthorized,
    };
  }

  return (
    <AuthContext.Provider value={getProviderValue()}>
      {children}
    </AuthContext.Provider>
  );
}
export const AuthConsumer = AuthContext.Consumer;

export const MemoizedAuthProvider = React.memo(AuthProvider);
