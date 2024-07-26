import { Button } from '@/design-components/components/Button'
import { supabase } from '@/lib/supabase'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { YStack, Text } from 'tamagui'


const Profile = () => {
  return (
    <SafeAreaView>
    <YStack paddingHorizontal="$md">
      <Text>profile</Text>
      <Button  onPress={() => supabase.auth.signOut()} >
        <Button.Text>Sign Out</Button.Text>
      </Button>
    </YStack>
    </SafeAreaView>
  )
}

export default Profile