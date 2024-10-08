import { createTamagui } from 'tamagui';
import { animations } from './design-components/animations';
import {
  bodyFont,
  digitalFont,
  headingFont,
 
} from './design-components/fonts';
import { themes } from './design-components/themes';
import { tokens } from './design-components/tokens';

const config = createTamagui({
  animations,
  fonts: {
    body: bodyFont,
    digital: digitalFont,
    heading: headingFont,

  },
  shorthands: {
    f: 'flex',
    h: 'height',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    w: 'width',
  } as const,
  themes,
  tokens,
});

type AppConfig = typeof config;

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

// declare module '@tamagui/core' {
//   interface CustomData {
//     variant: 'error' | 'info' | 'success' | 'warning';
//   }
// }

export default config;
