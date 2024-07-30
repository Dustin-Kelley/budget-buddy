import { AuthService } from '@/services/AuthService';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';




  export function useSignUp() {
    const { isPending, mutate } = useMutation({
      mutationFn: async ({ email, password }: { email: string, password: string }) => {
        await AuthService.signUp({ email, password });
      },
      onSuccess: () => {
        router.replace('/');
        console.log('success', 'User created');
      },
    });
  
    return {
    isSignUpPending: isPending,
    signUp: mutate
    };
  }

  export function useSignIn() {
    const { isPending, mutate } = useMutation({
      mutationFn: async ({ email, password }: { email: string, password: string }) => {
        await AuthService.signIn({ email, password });
      },
      onSuccess: () => {
        console.log('success', 'signed in');
      },
    });
  
    return {
    isSignInPending: isPending,
    signIn: mutate
    };
  }