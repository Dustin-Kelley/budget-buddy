import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { supabase } from '@/lib/supabase';
import { Input, YStack, Text } from 'tamagui';
import { Link, router } from 'expo-router';
import { Button } from '@/design-components/components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);

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

  const signIn = handleSubmit(async ({ email, password }) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  });

  return (
    <YStack
      gap="$md"
      paddingTop={insets.top}
      flexGrow={1}
      paddingHorizontal="$md"
      justifyContent="space-between"
    >
      <YStack gap="$lg">
        <YStack gap="$xs">
          <Text fontSize={'$h1'} fontWeight={'$600'} color={'$purple1'}>
            Sign In
          </Text>
          <Text>Please sign in to continue using the app</Text>
        </YStack>

        <YStack>
          <Text>Email</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                style={styles.input}
                color={'black'}
              />
            )}
            name="email"
          />
          {errors.email && <Text color="$red">This is required.</Text>}

          <Text>Password</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                style={styles.input}
                color={'black'}
              />
            )}
            name="password"
          />
          {errors.password && <Text color="$red">This is required.</Text>}
        </YStack>
      </YStack>
      <YStack paddingBottom={insets.bottom + 10} gap="$xs" alignItems="center">
        <Button variant="primary" onPress={signIn} disabled={loading}>
          <Button.Text fontSize={'$h4'}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button.Text>
        </Button>
        <Link href="/sign-up">
          Already have an account? <Text color={'$purple2'}>Sign Up</Text>
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
