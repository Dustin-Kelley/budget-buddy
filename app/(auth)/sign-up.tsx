import { StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { YStack, Text, Input } from 'tamagui';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/design-components/components/Button';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};
const SignUpScreen = () => {
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
  const signUp = handleSubmit(async ({ email, password }) => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

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
            Sign Up
          </Text>
          <Text>Please sign up to continue using the app</Text>
        </YStack>

        <YStack>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                placeholder="jon@gmail.com"
                style={styles.input}
                color={'black'}
              />
            )}
            name="email"
          />
          {errors.email && <Text color="$red">This is required.</Text>}

          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Password"
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
            name="password"
          />
          {errors.password && <Text color="$red">This is required.</Text>}
        </YStack>
      </YStack>
      <YStack paddingBottom={insets.bottom + 10} gap="$xs" alignItems="center">
        <Button variant="primary" onPress={signUp}>
          <Button.Text fontSize={'$h4'}>Sign up</Button.Text>
        </Button>
        <Link href="/sign-in">
          Already have an account? <Text color={'$purple2'}>Sign in</Text>
        </Link>
      </YStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
});

export default SignUpScreen;
