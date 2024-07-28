import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput } from 'react-native'
import { supabase } from '@/lib/supabase'
import { Input, YStack, Text } from 'tamagui'
import { Link, router } from 'expo-router'
import { Button } from '@/design-components/components/Button'
import { useSafeAreaInsets } from 'react-native-safe-area-context'



export default function Auth() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
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
            Sign In
          </Text>
          <Text>Please sign in to continue using the app</Text>
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
            {loading ? 'Signing in...' : 'Sign In'}
          </Button.Text>
        </Button>
        <Link href="/sign-up">
          Already have an account? <Text color={'$purple2'}>Sign Up</Text>
        </Link>
      </YStack>
    </YStack>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
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
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  label: {
    color: 'gray',
  },
  mt20: {
    marginTop: 20,
  },
})