import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUser } from '../redux/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign Up</h1>
        <div className="inputs">
          <input name="name" type="text" placeholder="Name*" />
          <input name="email" type="email" placeholder="Email*" />
          <input name="password" type="password" placeholder="Password*" />
        </div>
        <button type="submit">Sign Up</button>
        <div>
          {' '}
          <p className="terms">
            By signing up, you agree to our <a href="/">Terms of Use</a> and
            <a href="/"> Privacy Statement</a>
          </p>
          <p>
            Already have an account?
            <NavLink to="/goit-react-hw-07-phonebook/login"> Log In</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
