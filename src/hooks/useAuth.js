import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  console.log(isLoggedIn);
  return {
    isLoggedIn,
    user,
  };
};
