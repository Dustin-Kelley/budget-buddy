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
  import { TamaguiProvider } from 'tamagui';
  import config from '@/tamagui.config';
  import { useEffect } from 'react';
  import { useAuth, AuthProvider } from '@/providers/AuthProvider';
  
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();
  
  export default function RootLayout() {
    const { session } = useAuth();
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
      SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });
  
    console.log('session', session);
  
    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);
  
    if (!loaded) {
      return null;
    }
  
    if (!session) {
      // On web, static rendering will stop here as the user is not authenticated
      // in the headless Node process that the pages are rendered in.
      return <Redirect href="/sign-in" />;
    }
  
    return (
      <TamaguiProvider config={config} defaultTheme={colorScheme!}>
        <AuthProvider>
          <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
          </ThemeProvider>
        </AuthProvider>
      </TamaguiProvider>
    );
  }
  