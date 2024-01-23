import React from 'react';
import { NavLink } from 'react-router-dom';
import { logIn } from '../redux/operations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // if (form.payload) {
    //   navigate('/goit-react-hw-07-phonebook');
    // }
    form.reset();
  };

  return (
    <div className="formContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputs">
          <label>
            <input type="email" placeholder="Email" name="email" />
          </label>
          <label>
            <input type="password" placeholder="Password " name="password" />
          </label>
        </div>
        <a href="/">Forgot Password?</a>
        <button type="submit">Log in</button>
        <p>
          Don't have an account?
          <NavLink to="/goit-react-hw-07-phonebook/register"> Register</NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
