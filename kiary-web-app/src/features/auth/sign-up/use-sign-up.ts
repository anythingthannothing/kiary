import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/auth-service';

export const useSignUp = () => {
  return useMutation({
    mutationFn: AuthService.signUp,
  });
};
