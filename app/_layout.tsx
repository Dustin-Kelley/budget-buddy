import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Auth from '../components/Auth';
import Account from '../components/Account';
import { View } from 'react-native';
import { Session } from '@supabase/supabase-js';
import AuthProvider from '@/providers/AuthProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme!}>
      <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
      </AuthProvider>
    </TamaguiProvider>
  );
}
