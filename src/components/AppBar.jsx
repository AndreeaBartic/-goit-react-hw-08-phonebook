import { UserMenu } from './UserMenu';
import AuthNav from '../components/AuthNav';
import { useAuth } from 'hooks';
import { Navigation } from './Navigation';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
