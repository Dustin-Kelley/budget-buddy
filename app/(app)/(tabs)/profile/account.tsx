import { Button } from '@/design-components/components/Button';
import { TextInput } from '@/design-components/components/TextInput';
import { supabase } from '@/lib/supabase';
import { useUpdateProfile } from '@/queries/useProfileMutations';
import { useCurrentUser } from '@/queries/userQueries';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';

import { Controller, useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, Text, Image } from 'tamagui';
import React, { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

type FormData = {
  fullName: string;
};

const Account = () => {
  const insets = useSafeAreaInsets();
  const { updateProfile } = useUpdateProfile();
  const {user} = useCurrentUser();

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) return;

    try {
      const fileExt = image.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, image
         
        );

      if (uploadError) {
        throw uploadError;
      }

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image: ', error);
      alert('Error uploading image');
    }
  };


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
          <Ionicons size={24}  name="arrow-back-outline"  />
        </Link>
        <Text fontWeight={'$600'} fontSize={'$h2'}>
          My Account 😁
        </Text>

        <Button onPress={pickImage}><Button.Text>Upload Image</Button.Text></Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button onPress={uploadImage} ><Button.Text>take Image</Button.Text></Button>

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
          <Ionicons size={24}  name="camera-outline"  />
        </YStack>

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
