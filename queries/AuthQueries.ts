import { AuthService } from '@/services/AuthService';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQuery } from '@tanstack/react-query';




  export function useSignUp() {
    const { isPending, mutate } = useMutation({
      mutationFn: async ({ email, password }: { email: string, password: string }) => {
        await AuthService.signUp({ email, password });
      },
      onSuccess: () => {
        console.log('success', 'User created');
      },
    });
  
    return {
    isSignUpPending: isPending,
    signUp: mutate
    };
  }