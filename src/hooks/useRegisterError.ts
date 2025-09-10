import { shallow } from 'zustand/shallow';
import useRegister from '@/stores/registrationStore';

const useRegisterError = () =>
  useRegister(
    (state) => ({
      error: state.error,
      setError: state.setError,
    })
  
  );

export default useRegisterError;
