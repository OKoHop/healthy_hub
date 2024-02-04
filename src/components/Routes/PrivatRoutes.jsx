import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(selectIsLoggedIn);
  console.log(isLogIn);
  return !isLogIn ? <Navigate to={redirectTo} /> : Component;
};
