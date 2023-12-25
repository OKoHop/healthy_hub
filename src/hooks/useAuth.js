import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
  selectUser,
} from '../redux/auth/selectors';
import { selectCurrentUser } from '../redux/user/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectCurrentUser);
  const error = useSelector(selectError);
  
  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
  };
};