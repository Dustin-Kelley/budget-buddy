import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef, useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Input, InputProps, Label, XStack, YStack, getTokens } from 'tamagui';

interface TextInputProps extends InputProps {
  readonly inputRef?: React.RefObject<RNTextInput>;
  readonly label?: string;
  readonly isPasswordField?: boolean;
}

export function TextInput({
  borderRadius,
  inputRef,
  label,
  isPasswordField,
  ...props
}: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const textInputRef = useRef<RNTextInput>(null);
  const ref = inputRef || textInputRef;

  return (
    <YStack
      alignItems="flex-start"
      backgroundColor="$white"
      borderColor="$gray4"
      borderRadius={borderRadius || '$md'}
      borderWidth={1}
      flexGrow={1}
      gap="$xxs"
      justifyContent="space-around"
      onPress={() => ref.current?.focus()}
      paddingHorizontal="$xs"
      paddingVertical="$xs"
      shadowRadius={'$xs'}
      shadowColor={'$black'}
      shadowOffset={{ height: 4, width: 2 }}
      shadowOpacity={0.1}
    >
      {label ? (
        <Label
          color="$gray9"
          fontFamily="$body"
          fontSize="$sm"
          fontWeight="$300"
          onPress={() => ref.current?.focus()}
        >
          {label}
        </Label>
      ) : null}
      <XStack flexGrow={1}>
        <Input
          flexGrow={1}
          fontSize="$base"
          hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}
          placeholderTextColor={getTokens().color.$gray7.val}
          ref={inputRef}
          unstyled
          secureTextEntry={isPasswordField && !isPasswordVisible}
          {...props}
        />
        {isPasswordField ? (
          <YStack onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={32}
              color="black"
            />
          </YStack>
        ) : null}
      </XStack>
    </YStack>
  );
}
