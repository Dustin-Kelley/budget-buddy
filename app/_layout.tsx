import { Slot } from 'expo-router';
import { AuthProvider } from '@/providers/AuthProvider';
import Auth from '@/components/Auth';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import config from '@/tamagui.config';
import { TamaguiProvider } from 'tamagui';


export default function Root() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });
  // Set up the auth context and render our layout inside of it.
  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme!}>
    <AuthProvider>
      <Slot />
    </AuthProvider>
    </TamaguiProvider>
  );
}
