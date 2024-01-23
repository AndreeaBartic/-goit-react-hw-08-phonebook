import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="goit-react-hw-07-phonebook/register">Register</NavLink>
      <NavLink to="goit-react-hw-07-phonebook/login">Log In</NavLink>
    </div>
  );
};
export default AuthNav;
