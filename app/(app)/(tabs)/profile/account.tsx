import { Button } from '@/design-components/components/Button';
import { TextInput } from '@/design-components/components/TextInput';
import { supabase } from '@/lib/supabase';
import { Link } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Text } from 'tamagui';

type FormData = {
  fullName: string;
};

const Account = () => {
  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: '',
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <YStack
      gap="$xs"
      paddingTop={insets.top}
      flexGrow={1}
      paddingHorizontal="$md"
      justifyContent="space-between"
    >
      <YStack>
        <Text fontWeight={'$600'} fontSize={'$h2'}>
          My Account 😁
        </Text>

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
                placeholder="jon@gmail.com"
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
