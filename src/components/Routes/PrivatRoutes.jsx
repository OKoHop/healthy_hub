import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return !isLogIn ? <Navigate to={redirectTo} /> : Component;
};
