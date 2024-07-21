import { createFont } from 'tamagui';

const size = {
  1: 12,
  2: 14,
  3: 16,
  4: 18,
  base: 16,
  h1: 44,
  h2: 32,
  h3: 24,
  h4: 20,
  h5: 16,
  h6: 14,
  lg: 18,
  md: 16,
  sm: 14,
  xl: 20,
  xml: 48,
  xs: 12,
  xxl: 24,
  xxs: 10,
  xxxl: 30,
};

export const bodyFont = createFont({
  face: {
    300: { normal: 'HankenGroteskRegular' },
    400: { normal: 'HankenGroteskMedium' },
    600: { normal: 'HankenGroteskBold' },
  },
  family: 'HankenGroteskRegular, Helvetica, Arial, sans-serif',
  size,
  weight: {
    300: '300',
    400: '400',
    600: '600',
  },
});

export const headingFont = createFont({
  face: {
    300: { normal: 'HankenGroteskBold' },
    400: { normal: 'HankenGroteskBold' },
    600: { normal: 'HankenGroteskBold' },
  },
  family: 'HankenGroteskBold, Helvetica, Arial, sans-serif',
  size,
  weight: {
    300: '300',
    400: '400',
    600: '600',
  },
});

export const staatlichesFont = createFont({
  face: {
    300: { normal: 'Staatliches_400Regular' },
    400: { normal: 'Staatliches_400Regular' },
  },
  family: 'Staatliches_400Regular, Helvetica, Arial, sans-serif',
  size,
  weight: {
    300: '300',
    400: '400',
  },
});

export const palmerLakeFont = createFont({
  face: {
    300: { normal: 'PalmerLakeRegular' },
    400: { normal: 'PalmerLakeRegular' },
  },
  family: 'PalmerLakeRegular, Helvetica, Arial, sans-serif',
  size,
  weight: {
    300: '300',
    400: '400',
  },
});

export const digitalFont = createFont({
  face: {
    300: { normal: 'Digital' },
  },
  family: 'Digital, Helvetica, Arial, sans-serif',
  size,
  weight: {
    300: '300',
  },
});
