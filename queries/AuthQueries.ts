import { AuthService } from '@/services/AuthService';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

  export function useSignUp() {
    const { isPending, mutate } = useMutation({
      mutationFn: async ({ email, password }: { email: string, password: string }) => {
        if(!email || !password) throw new Error('Email and password are required');
        await AuthService.signUp({ email, password });
      },
      onSuccess: () => {
        console.log('Sign up successful');
        router.replace('/');
      },
      onError: (error) => {
      console.log('There was an error signing up', error);
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
        router.replace('/');
      },
      onError: () => {
      console.log('There was an error logging in');
      },
    });
  
    return {
    isSignInPending: isPending,
    signIn: mutate
    };
  }

 