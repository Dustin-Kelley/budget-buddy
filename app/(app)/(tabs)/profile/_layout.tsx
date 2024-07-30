import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
  } from '@react-navigation/native';
  import { useFonts } from 'expo-font';
  import { Redirect, Stack } from 'expo-router';
  import * as SplashScreen from 'expo-splash-screen';
  import 'react-native-reanimated';
  import { useColorScheme } from 'react-native';
  import { Spinner } from 'tamagui';
  import { useEffect } from 'react';
  import { useAuth, AuthProvider } from '@/providers/AuthProvider';
  
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();
  
  export default function ProfileLayout() {
  
  
    return (
          <Stack>
            <Stack.Screen name="profile" options={{ headerShown: false }} />
          </Stack>
   
    );
  }
  