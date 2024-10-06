import { Button } from '@/design-components/components/Button';
import { TextInput } from '@/design-components/components/TextInput';
import { useUpdateProfile } from '@/queries/useProfileMutations';
import { useCurrentUser } from '@/queries/userQueries';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Text } from 'tamagui';
import React, { useState } from 'react';


import Avatar from './components/Avatar';

type FormData = {
  fullName: string;
};

const Account = () => {
  const insets = useSafeAreaInsets();
  const { updateProfile } = useUpdateProfile();
  const { user } = useCurrentUser();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: user?.full_name || '',
    },
  });

  const onSubmit = handleSubmit(({ fullName }) => {
    updateProfile({ fullName });
    router.navigate('/(app)/(tabs)/profile/profile');
  });

  return (
    <YStack
      paddingTop={insets.top}
      flexGrow={1}
      paddingHorizontal="$md"
      justifyContent="space-between"
    >
      <YStack gap="$sm">
        <Link href="/(app)/(tabs)/profile/profile">
          <Ionicons size={24} name="arrow-back-outline" />
        </Link>
        <Text fontWeight={'$600'} fontSize={'$h2'}>
          My Account 😁
        </Text>

        <Avatar
          setAvatarUrl={setAvatarUrl}
          avatarUrl={avatarUrl}
          size={200}
          url={avatarUrl}
          onUpload={(url: string) => {
            setAvatarUrl(url);
            //  updateProfile({ username, website, avatar_url: url })
          }}
        />

        <YStack gap="$xs">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="John Doe"
                label="Full Name"
              />
            )}
            name="fullName"
          />
          {errors.fullName && <Text color="$red">This is required.</Text>}
        </YStack>
      </YStack>

      <YStack paddingBottom={insets.bottom}>
        <Button onPress={onSubmit}>
          <Button.Text>Update Profile</Button.Text>
        </Button>
      </YStack>
    </YStack>
  );
};

export default Account;
