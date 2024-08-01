import { YStack, Text, Image  } from 'tamagui';
import { Link, router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/design-components/components/Button';
import { useForm, Controller } from 'react-hook-form';
import { useSignUp } from '@/queries/AuthQueries';
import { TextInput } from '@/design-components/components/TextInput';



type FormData = {
  email: string;
  password: string;
};
export default function SignUpScreen() {
  const insets = useSafeAreaInsets();
  const { isSignUpPending, signUp } = useSignUp();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = handleSubmit(async ({ email, password }) => {
    signUp({ email, password });
  });

  return (
    <YStack
      gap="$xl"
      paddingTop={insets.top + 10}
      flexGrow={1}
      paddingHorizontal="$md"
      justifyContent="space-between"
    >
      <YStack gap="$xxl">
        <YStack gap="$xs">
          <Text fontSize={'$h1'} fontWeight={'$600'} color={'$purple1'}>
            Sign Up
          </Text>
          <Text>Please sign up to continue using the app</Text>
          <Image
            source={{
              uri: 'https://goovhuczwuncnkumdbuo.supabase.co/storage/v1/object/public/images/set-different-living-room-interior-flat-style.png',
              width: 380,
              height: 300,
            }}
          />
   
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
                placeholder="jon@gmail.com"
                label="Email"
                
              />
            )}
            name="email"
          />
          {errors.email && <Text color="$red">This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                label="Password"
                isPasswordField
              />
            )}
            name="password"
          />
           
          {errors.password && <Text color="$red">This is required.</Text>}
        </YStack>
      </YStack>
      <YStack paddingBottom={insets.bottom + 10} gap="$xs" alignItems="center">
        <Button variant="primary" onPress={onSubmit} disabled={isSignUpPending}>
          <Button.Text fontSize={'$h4'}>
            {isSignUpPending ? 'Signing Up...' : 'Sign Up'}
          </Button.Text>
        </Button>
        <Link href="/sign-in">
          Already have an account? <Text color={'$purple2'}>Login</Text>
        </Link>
      </YStack>
    </YStack>
  );
}
