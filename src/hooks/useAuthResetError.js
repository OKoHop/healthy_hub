import { useDispatch } from 'react-redux';
import { resetError } from '../redux/auth/slice';

const useAuthResetError = () => {
  const dispatch = useDispatch();

  const resetAuthError = () => {
    dispatch(resetError());
  };

  return {
    resetAuthError,
  };
};

export default useAuthResetError;
