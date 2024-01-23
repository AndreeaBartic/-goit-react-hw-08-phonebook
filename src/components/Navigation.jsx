import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/goit-react-hw-07-phonebook">Home</NavLink>
      <NavLink to="/goit-react-hw-07-phonebook/contacts">Contacts</NavLink>
    </nav>
  );
};
