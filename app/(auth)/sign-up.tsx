import { TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { YStack, Text } from 'tamagui';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/design-components/components/Button';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const insets = useSafeAreaInsets();

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

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
          <Text fontSize={'$h1'} fontWeight={'$600'} color={'$purple2'}>
            Sign Up
          </Text>
          <Text>Please sign up to continue using the app</Text>
        </YStack>

        <YStack>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="jon@gmail.com"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder=""
            style={styles.input}
            secureTextEntry
          />
        </YStack>
      </YStack>
      <YStack paddingBottom={insets.bottom + 10} gap="$xs" alignItems="center">
        <Button variant="primary" onPress={signUpWithEmail} disabled={loading}>
          <Button.Text fontSize={'$h4'}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button.Text>
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
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default SignUpScreen;
