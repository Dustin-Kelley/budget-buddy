import { Button } from '@/design-components/components/Button';
import { supabase } from '@/lib/supabase';
import { useCurrentUser } from '@/queries/userQueries';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Text, XStack, getTokens } from 'tamagui';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const { user } = useCurrentUser();

  return (
    <YStack
      gap="$xs"
      paddingTop={insets.top + 15}
      flexGrow={1}
      paddingHorizontal="$md"
      justifyContent="space-between"
    >
      <YStack gap="$lg">
        <Text color={'$gray9'} fontWeight={'$600'} fontSize={'$h2'}>
          Hi {user?.full_name?.split(' ')[0]} 👋
        </Text>
        <YStack alignItems="center">
          <YStack
            alignItems="center"
            justifyContent="center"
            borderRadius={80}
            borderWidth={6}
            borderColor={'$purple1'}
            height={150}
            width={150}
          >
            <YStack
              borderRadius={60}
              height={120}
              width={120}
              backgroundColor={'$gray6'}
            ></YStack>
          </YStack>
        </YStack>

        <YStack
          backgroundColor={'$gray4'}
          paddingVertical="$lg"
          borderRadius={'$xl'}
          paddingHorizontal="$md"
        >
          <Link   href="/(tabs)/profile/account">
            <XStack gap="$sm" alignItems="center">
              <Ionicons
                size={24}
                name="person"
                color={getTokens().color.$purple1.val}
              />
              <Text fontWeight={'$400'} fontSize={'$md'}>
                My Account
              </Text>
            </XStack>
          </Link>
        </YStack>

        <YStack
          backgroundColor={'$gray4'}
          paddingVertical="$lg"
          borderRadius={'$xl'}
          paddingHorizontal="$md"
        >
          <Link href="/(tabs)/profile/account">
            <XStack gap="$sm" alignItems="center">
              <Ionicons
                size={24}
                name="person"
                color={getTokens().color.$purple1.val}
              />
              <Text fontWeight={'$400'} fontSize={'$md'}>
                Notifications
              </Text>
            </XStack>
          </Link>
        </YStack>

        <YStack
          backgroundColor={'$gray4'}
          paddingVertical="$lg"
          borderRadius={'$xl'}
          paddingHorizontal="$md"
        >
          <Link href="/(tabs)/profile/account">
            <XStack gap="$sm" alignItems="center">
              <Ionicons
                size={24}
                name="person"
                color={getTokens().color.$purple1.val}
              />
              <Text fontWeight={'$400'} fontSize={'$md'}>
                Give Feedback
              </Text>
            </XStack>
          </Link>
        </YStack>
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
