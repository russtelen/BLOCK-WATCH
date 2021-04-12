import React, { useEffect, useState } from 'react';
import { registerUser } from '../../network/network';
import RegisterScreen from './RegisterScreen';
import useLocalStorage from 'react-use-localstorage';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [token, setToken] = useLocalStorage('token', '');
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleSubmit = async (user) => {
    console.log('USER', user);
    try {
      const accessToken = await registerUser(user);
      if (accessToken) {
        setToken(accessToken);
        history.push('/user/communities');
      }
    } catch (e) {
      console.log('Error registering user:', e);
    }
  };

  useEffect(() => {
    const decodedUser = token ? jwtDecode(token) : null;
    setUser(decodedUser);
    console.log('decoded user>>>', decodedUser);
  }, [token]);

  return <RegisterScreen handleSubmit={handleSubmit} />;
};

export default Register;
