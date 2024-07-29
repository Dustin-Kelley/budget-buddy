import React, { SetStateAction, useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ScrollViewProps,
  SheetProps,
  Sheet as TSheet,
  Text,
  TextProps,
  XStack,
  YStack,
  getTokens,
  withStaticProperties,
} from 'tamagui';
import { IconButton } from './IconButton';

interface BottomSheetProps extends SheetProps {
  readonly children: React.ReactNode;
  readonly darkMode?: boolean;
  readonly disableInsetBottom?: boolean;
  readonly hideBackButton?: boolean;
  readonly isOpen: boolean;
  readonly setIsSheetOpen: (value: SetStateAction<boolean>) => void;
}

function BottomSheet({
  children,
  darkMode = false,
  disableDrag,
  disableInsetBottom = false,
  hideBackButton = false,
  isOpen,
  onOpenChange,
  setIsSheetOpen,
  snapPoints,
  snapPointsMode,
}: BottomSheetProps) {
  const insets = useSafeAreaInsets();
  const closeSheet = useCallback(() => {
    setIsSheetOpen(false);
    if (onOpenChange) onOpenChange(false);
  }, [onOpenChange, setIsSheetOpen]);
  const accentColor = darkMode ? '$gray2' : '$gray8';

  return (
    <TSheet
      animation="sheet"
      disableDrag={disableDrag}
      dismissOnSnapToBottom
      modal
      onOpenChange={(open: boolean) => {
        setIsSheetOpen(open);
        if (onOpenChange) onOpenChange(open);
      }}
      open={isOpen}
      snapPoints={snapPoints}
      snapPointsMode={snapPointsMode}
      zIndex={100000}
    >
      <TSheet.Overlay
        animation="sheet"
        backgroundColor={darkMode ? 'rgba(255,255,255,0.48)' : '$black10'}
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <TSheet.Frame backgroundColor="$transparent">
        <YStack
          backgroundColor={darkMode ? '$black' : '$white'}
          borderTopEndRadius="$sm"
          borderTopStartRadius="$sm"
          flexGrow={1}
          paddingBottom={disableInsetBottom ? 0 : insets.bottom || '$sm'}
          paddingTop="$sm"
        >
          <XStack
            justifyContent="flex-end"
            paddingHorizontal="$sm"
          >
            {/* the `$xl` width is the width of the close button + padding */}
            <YStack width="$xl" />
            {disableDrag ? null : (
              <TSheet.Handle
                backgroundColor={darkMode ? '$gray2' : '$gray10'}
                height={5}
                marginBottom={24}
                marginHorizontal="auto"
                opacity={0.9}
                width={50}
              />
            )}
            {hideBackButton ? null : (
              <IconButton
                backgroundColor={
                  darkMode ? 'hsla(0, 0%, 100%, 0.3)' : '$black3'
                }
                borderWidth={0}
                onPress={closeSheet}
                padding="$xxs"
                pressStyle={{
                  backgroundColor: darkMode
                    ? 'hsla(0, 0%, 100%, 0.2)'
                    : '$black8',
                }}
                size="$xl"
              >
               <Text> -- </Text>
              </IconButton>
            )}
          </XStack>

          {children}
        </YStack>
      </TSheet.Frame>
    </TSheet>
  );
}

interface SheetHeaderProps extends TextProps {
  readonly children: React.ReactNode;
}

function Header(props: SheetHeaderProps) {
  const { children, ...textProps } = props;

  return (
    <Text
      fontSize="$h4"
      textAlign="center"
      {...textProps}
    >
      {children}
    </Text>
  );
}

function ScrollView(props: ScrollViewProps) {
  return (
    <TSheet.ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      paddingHorizontal="$sm"
      {...props}
    />
  );
}

/**
 * The bottom sheet.
 *
 * You can use the Sheet ScrollView for scrolling content, some list view, or anything else.
 *
 * 🚨 DO NOT STACK BOTTOM SHEETS. We should either put a flow in the sheet or use default screen stack navigation.
 *
 * @see https://tamagui.dev/docs/components/sheet
 *
 * Pass any child component to the bottom sheet.
 * @example
 * ```tsx
 * <Sheet>
 *  <Sheet.Header>Heading</Sheet.Header>
 *  { put whatever child component in here }
 * </Sheet>
 * ```
 *
 * Or use the Sheet ScrollView for scrolling content.
 * @example
 * ```tsx
 * <Sheet>
 *  <Sheet.ScrollView>
 *    <Sheet.Header>Heading</Sheet.Header>
 *    { put whatever child component in here }
 * </Sheet.ScrollView>
 * </Sheet>
 * ```
 */
export const Sheet = withStaticProperties(BottomSheet, {
  Header,
  ScrollView,
});
