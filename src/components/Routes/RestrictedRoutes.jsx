import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return isLogIn ? <Navigate to={redirectTo} /> : Component;
};
