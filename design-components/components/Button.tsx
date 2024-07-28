import { Text, View, styled, withStaticProperties } from '@tamagui/core';
import { SizeTokens, TextProps, createStyledContext } from 'tamagui';

const ButtonContext = createStyledContext<{
  size: SizeTokens;
  variant: 'danger' | 'primary' | 'secondary' | 'tertiary';
}>({
  size: '$md',
  variant: 'primary',
});

const ButtonFrame = styled(View, {
  alignItems: 'center',
  animation: 'fast',
  backgroundColor: '$purple1',
  borderColor: '$purple1',
  borderRadius: '$xl',
  borderWidth: 1,
  context: ButtonContext,
  defaultVariants: {
    size: '$md',
    variant: 'primary',
  },
  disabledStyle: { opacity: 0.5, pointerEvents: 'none' },
  flexDirection: 'row',
  flexShrink: 1,
  gap: '$xxs',
  hoverStyle: { backgroundColor: '$purple3' },
  name: 'Button',
  paddingVertical: '$sm',
  pressStyle: { backgroundColor: '$purple2' },
  variants: {
    size: {
      '...size': (name, { tokens }) => {
        // 🤔 idk why, but i need to force this type to be correct... ¯\_(ツ)_/¯
        const sizeToken = tokens.size as unknown as Record<
          SizeTokens,
          { val: number }
        >;
        const size = sizeToken[name].val;

        return {
          gap: size * 0.2,
          paddingHorizontal: size,
          paddingVertical: size / 1.5,
        };
      },
    },
    variant: {
      danger: {
        backgroundColor: '$red8',
        borderColor: '$red8',
        hoverStyle: { backgroundColor: '$red9' },
        pressStyle: { backgroundColor: '$red9' },
      },
      primary: {
        backgroundColor: '$purple1',
        borderColor: '$purple1',
        hoverStyle: { backgroundColor: '$purple2' },
        pressStyle: { backgroundColor: '#purple2' },
      },
      secondary: {
        backgroundColor: '$evergreen3',
        borderColor: '$evergreen3',
        hoverStyle: { backgroundColor: '$evergreen4' },
        pressStyle: { backgroundColor: '$evergreen4' },
      },
      tertiary: {
        backgroundColor: '$white',
        borderColor: '$purple2',
        hoverStyle: { backgroundColor: '$purple1' },
        pressStyle: { backgroundColor: '$purple1' },
      },
    },
  } as const,
});

const ButtonText = styled(Text, {
  color: '$white',
  context: ButtonContext,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: '$body',
  fontSize: '$h3',
  fontWeight: '$600',
  name: 'ButtonText',
  textAlign: 'center',
  textTransform: 'capitalize',
  userSelect: 'none',
  variants: {
    size: {
      '...fontSize': (name, { font }) => {
        const fontSize = font?.size as unknown as Record<
          SizeTokens,
          { val: number }
        >;
        return { fontSize: fontSize[name].val };
      },
    },
    variant: {
      danger: {
        color: '$white',
      },
      primary: {
        color: '$white',
      },
      secondary: {
        color: '$evergreen9',
      },
      storyChain: {
        color: '$red',
        fontFamily: '$palmerLake',
        textTransform: 'uppercase',
      },
      tertiary: {
        color: '$evergreen',
      },
    },
  } as const,
});

function TwoLineLimitButtonText({ children, ...props }: TextProps) {
  return (
    <ButtonText
      numberOfLines={2}
      {...props}
    >
      {children}
    </ButtonText>
  );
}

/**
 * The button.
 *
 * See the example for how to use this.
 *
 * @variation size - the size of the button
 * @variation variant - the type of button
 *
 * @see https://tamagui.dev/docs/guides/how-to-build-a-button
 *
 * @example
 * ```tsx
 * <Button
 *  size="$md"
 *  variant="secondary"
 * >
 *  <Button.Text>Press Me</Button.Text>
 * </Button>
 * ```
 */
export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,

  /**
   * Button text needs to be wrapped with this.
   */
  Text: TwoLineLimitButtonText,
});
