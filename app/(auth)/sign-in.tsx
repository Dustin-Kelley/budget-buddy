import React from 'react';
import { StyleSheet } from 'react-native';
import { YStack, Text, Image } from 'tamagui';
import { Link, router } from 'expo-router';
import { Button } from '@/design-components/components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import { useSignIn } from '@/queries/AuthQueries';
import { TextInput } from '@/design-components/components/TextInput';

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const insets = useSafeAreaInsets();
  const { signIn, isSignInPending } = useSignIn();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    signIn({ email, password });
    router.replace('/');
  });

  return (
    <YStack
      gap="$md"
      paddingTop={insets.top + 10}
      flexGrow={1}
      paddingHorizontal="$md"
      justifyContent="space-between"
    >
      <YStack gap="$lg">
        <YStack gap="$xs">
          <Text fontSize={'$h1'} fontWeight={'$600'} color={'$purple1'}>
            Login Now
          </Text>
          <Text>Please sign in to continue using the app</Text>
          <Image
            source={{
              uri: 'https://goovhuczwuncnkumdbuo.supabase.co/storage/v1/object/public/images/set-different-living-room-interior-flat-style.png',
              width: 380,
              height: 300,
            }}
          />
        </YStack>

        <YStack gap="$xs">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput onChangeText={onChange} value={value} label="Email" />
            )}
            name="email"
          />
          {errors.email && <Text color="$red">This is required.</Text>}

     
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput label="Password" onChangeText={onChange} value={value} />
            )}
            name="password"
          />
          {errors.password && <Text color="$red">This is required.</Text>}
        </YStack>
      </YStack>
      <YStack paddingBottom={insets.bottom + 10} gap="$xs" alignItems="center">
        <Button variant="primary" onPress={onSubmit} disabled={isSignInPending}>
          <Button.Text fontSize={'$h4'}>
            {isSignInPending ? 'Logging in...' : 'Login'}
          </Button.Text>
        </Button>
        <Link href="/sign-up">
          Don't have an account? <Text color={'$purple2'}>Sign Up</Text>
        </Link>
      </YStack>
    </YStack>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
