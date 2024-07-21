import { createThemeBuilder } from '@tamagui/theme-builder';
import { color } from './tokens';

const themesBuilder = createThemeBuilder()
  .addPalettes({
    light: Object.values(color),
  })
  .addTemplates({
    base: {
      background: color.white,
      backgroundFocus: color.gray3,
      backgroundHover: color.gray3,
      backgroundPress: color.gray4,
      backgroundStrong: color.gray4,
      backgroundTransparent: color.white,
      borderColor: color.gray11,
      borderColorFocus: color.gray10,
      borderColorHover: color.gray10,
      borderColorPress: color.gray12,
      color: color.black,
      colorFocus: color.black,
      colorHover: color.black,
      colorPress: color.black,
      colorTransparent: color.black1,
      placeholderColor: color.gray5,
      shadowColor: color.gray11,
      shadowColorFocus: color.gray11,
      shadowColorHover: color.gray11,
      shadowColorPress: color.gray11,
    },
  })
  .addThemes({
    light: {
      palette: 'light',
      template: 'base',
    },
  });

export const themes = themesBuilder.build();
