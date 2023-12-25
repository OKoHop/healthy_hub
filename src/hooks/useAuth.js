import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  
  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
  };
};