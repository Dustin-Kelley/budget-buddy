import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert,  Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '@/lib/supabase';
import { YStack, Image } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  size: number;
  url: string | null;
  onUpload: (filePath: string) => void;
  setAvatarUrl: React.Dispatch<React.SetStateAction<string | null>>;
  avatarUrl: string | null;
}

export default function Avatar({
  url,
  size = 150,
  onUpload,
  setAvatarUrl,
  avatarUrl,
}: Props) {
  const [uploading, setUploading] = useState(false);
  const avatarSize = { height: size, width: size };

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);

      if (error) {
        throw error;
      }

      const fr = new FileReader();
      fr.readAsDataURL(data);
      fr.onload = () => {
        setAvatarUrl(fr.result as string);
      };
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message);
      }
    }
  }

  async function uploadAvatar() {
    try {
      setUploading(true);

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Restrict to only images
        allowsMultipleSelection: false, // Can only select one image
        allowsEditing: true, // Allows the user to crop / rotate their photo before uploading it
        quality: 1,
        exif: false, // We don't want nor need that data.
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        console.log('User cancelled image picker.');
        return;
      }

      const image = result.assets[0];
      console.log('Got image', image);

      if (!image.uri) {
        throw new Error('No image uri!'); // Realistically, this should never happen, but just in case...
      }

      const arraybuffer = await fetch(image.uri).then((res) =>
        res.arrayBuffer(),
      );

      const fileExt = image.uri?.split('.').pop()?.toLowerCase() ?? 'jpeg';
      const path = `${Date.now()}.${fileExt}`;
      const { data, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(path, arraybuffer, {
          contentType: image.mimeType ?? 'image/jpeg',
        });

      if (uploadError) {
        throw uploadError;
      }

      onUpload(data.path);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        throw error;
      }
    } finally {
      setUploading(false);
    }
  }

  return (
    <View>
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
          {avatarUrl ? (
            <Image
              source={{ uri: avatarUrl, width: 120, height: 120 }}
              accessibilityLabel="Avatar"
              borderRadius={80}
              overflow='hidden'
           
            />
          ) : (
            <YStack
            borderRadius={60}
            height={120}
            width={120}
            backgroundColor={'$gray6'}
          />
          )}
         
        </YStack>
        <Ionicons size={24} name="camera-outline" />
      </YStack>

      <View>
        <Button
          title={uploading ? 'Uploading ...' : 'Upload'}
          onPress={uploadAvatar}
          disabled={uploading}
        />
      </View>
    </View>
  );
}


