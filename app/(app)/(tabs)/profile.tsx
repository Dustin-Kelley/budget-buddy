import { Button } from '@/design-components/components/Button';
import { supabase } from '@/lib/supabase';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Text } from 'tamagui';

const Profile = () => {
  const insets = useSafeAreaInsets();

  return (
    <YStack
      gap="$xs"
      paddingTop={insets.top + 10}
      flexGrow={1}
      paddingHorizontal="$md"
      justifyContent="space-between"
    >
      <YStack>
        <Text fontWeight={'$600'} fontSize={'$h2'}>
          My Profile 😁
        </Text>
        <Text> Profile Image</Text>
        <Text> My Account</Text>
        <Text> Give Feedback</Text>
      </YStack>

      <YStack paddingBottom={insets.bottom}>

    
      <Button onPress={() => supabase.auth.signOut()}>
        <Button.Text>Sign Out</Button.Text>
      </Button>
      </YStack>
    </YStack>
  );
};

export default Profile;
