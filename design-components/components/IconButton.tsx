import { Button, ButtonProps } from 'tamagui';

export function IconButton({
  backgroundColor,
  children,
  pressStyle,
  size,
  ...props
}: ButtonProps) {
  return (
    <Button
      alignItems="center"
      animation="fast"
      backgroundColor={backgroundColor || '$black'}
      borderColor="$white"
      borderWidth={4}
      circular
      disabledStyle={{ opacity: 0.5, pointerEvents: 'none' }}
      hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}
      justifyContent="center"
      overflow="hidden"
      pressStyle={{ scale: 0.9, ...pressStyle }}
      size={size || '$xxl'}
      unstyled
      {...props}
    >
      {children}
    </Button>
  );
}
