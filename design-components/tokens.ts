import { createTokens } from 'tamagui';

const evergreen = {
  evergreen: 'hsla(146, 41%, 28%, 1)',
  evergreen1: 'hsla(147, 28%, 96%, 1)',
  evergreen10: 'hsla(146, 54%, 21%, 1)',
  evergreen11: 'hsla(148, 39%, 16%, 1)',
  evergreen12: 'hsla(151, 64%, 8%, 1)',
  evergreen2: 'hsla(146, 42%, 93%, 1)',
  evergreen3: 'hsla(146, 41%, 89%, 1)',
  evergreen4: 'hsla(146, 55%, 84%, 1)',
  evergreen5: 'hsla(146, 45%, 73%, 1)',
  evergreen6: 'hsla(146, 33%, 54%, 1)',
  evergreen7: 'hsla(147, 37%, 39%, 1)',
  evergreen8: 'hsla(146, 41%, 28%, 1)',
  evergreen9: 'hsla(147, 43%, 19%, 1)',
};

const amber = {
  amber: 'hsla(36, 90%, 64%, 1)',
  amber1: 'hsla(40, 100%, 96%, 1)',
  amber10: 'hsla(35, 95%, 36%, 1)',
  amber11: 'hsla(30, 62%, 17%, 1)',
  amber12: 'hsla(22, 100%, 9%, 1)',
  amber2: 'hsla(44, 100%, 92%, 1)',
  amber3: 'hsla(43, 100%, 87%, 1)',
  amber4: 'hsla(42, 100%, 82%, 1)',
  amber5: 'hsla(38, 100%, 76%, 1)',
  amber6: 'hsla(40, 60%, 99%, 1)',
  amber7: 'hsla(36, 90%, 64%, 1)',
  amber8: 'hsla(35, 85%, 55%, 1)',
  amber9: 'hsla(35, 81%, 49%, 1)',
};

const red = {
  red: 'hsla(358, 70%, 56%, 1)',
  red1: 'hsla(0, 100%, 99%, 1)',
  red10: 'hsla(358, 97%, 29%, 1)',
  red11: 'hsla(358, 100%, 20%, 1)',
  red12: 'hsla(355, 49%, 15%, 1)',
  red2: 'hsla(0, 100%, 97%, 1)',
  red3: 'hsla(0, 100%, 95%, 1)',
  red4: 'hsla(0, 100%, 93%, 1)',
  red5: 'hsla(0, 100%, 89%, 1)',
  red6: 'hsla(0, 90%, 81%, 1)',
  red7: 'hsla(0, 88%, 69%, 1)',
  red8: 'hsla(358, 70%, 56%, 1)',
  red9: 'hsla(358, 68%, 42%, 1)',
};

const green = {
  green: 'hsla(122, 37%, 56%, 1)',
  green1: 'hsla(120, 72%, 99%, 1)',
  green10: 'hsla(128, 29%, 15%, 1)',
  green11: 'hsla(133, 65%, 29%, 1)',
  green12: 'hsla(133, 71%, 21%, 1)',
  green2: 'hsla(120, 71%, 97%, 1)',
  green3: 'hsla(103, 54%, 92%, 1)',
  green4: 'hsla(106, 40%, 86%, 1)',
  green5: 'hsla(108, 38%, 80%, 1)',
  green6: 'hsla(108, 37%, 70%, 1)',
  green7: 'hsla(119, 38%, 65%, 1)',
  green8: 'hsla(122, 37%, 56%, 1)',
  green9: 'hsla(132, 41%, 47%, 1)',
};

const blue = {
  blue: 'hsla(206, 100%, 50%, 1)',
  blue1: 'hsla(210, 100%, 99%, 1)',
  blue10: 'hsla(211, 100%, 43%, 1)',
  blue11: 'hsla(211, 100%, 29%, 1)',
  blue12: 'hsla(211, 100%, 15%, 1)',
  blue2: 'hsla(210, 100%, 98%, 1)',
  blue3: 'hsla(210, 100%, 94%, 1)',
  blue4: 'hsla(209, 96%, 90%, 1)',
  blue5: 'hsla(209, 82%, 85%, 1)',
  blue6: 'hsla(208, 78%, 77%, 1)',
  blue7: 'hsla(206, 82%, 65%, 1)',
  blue8: 'hsla(206, 100%, 50%, 1)',
  blue9: 'hsla(208, 100%, 47%, 1)',
};

const yellow = {
  yellow: 'hsla(49, 100%, 50%, 1)',
  yellow1: 'hsla(60, 65%, 98%, 1)',
  yellow10: ' hsla(47, 99%, 38%, 1)',
  yellow11: ' hsla(42, 100%, 31%, 1)',
  yellow12: ' hsla(41, 56%, 13%, 1)',
  yellow2: 'hsla(52, 100%, 95%, 1)',
  yellow3: 'hsla(55, 100%, 91%, 1)',
  yellow4: 'hsla(50, 100%, 85%, 1)',
  yellow5: 'hsla(47, 98%, 81%, 1)',
  yellow6: 'hsla(47, 100%, 75%, 1)',
  yellow7: 'hsla(50, 100%, 58%, 1)',
  yellow8: 'hsla(49, 100%, 50%, 1)',
  yellow9: 'hsla(47, 92%, 46%, 1)',
};

const gray = {
  gray: 'hsla(217, 6%, 63%, 1)',
  gray1: 'hsla(210, 20%, 98%, 1)',
  gray10: 'hsla(200, 11%, 22%, 1)',
  gray11: 'hsla(202, 24%, 12%, 1)',
  gray12: 'hsla(200, 39%, 5%, 1)',
  gray2: 'hsla(217, 24%, 96%, 1)',
  gray3: 'hsla(217, 24%, 93%, 1)',
  gray4: 'hsla(216, 19%, 88%, 1)',
  gray5: 'hsla(217, 17%, 84%, 1)',
  gray6: 'hsla(217, 8%, 73%, 1)',
  gray7: 'hsla(217, 6%, 63%, 1)',
  gray8: 'hsla(205, 5%, 51%, 1)',
  gray9: 'hsla(200, 9%, 33%, 1)',
};

const black = {
  black: 'hsla(0, 0%, 0%, 1)',
  black1: 'hsla(0, 0%, 0%, 0.01)',
  black10: 'hsla(0, 0%, 0%, 0.48)',
  black11: 'hsla(0, 0%, 0%, 0.56)',
  black12: 'hsla(0, 0%, 0%, 1)',
  black2: 'hsla(0, 0%, 0%, 0.03)',
  black3: 'hsla(0, 0%, 0%, 0.05)',
  black4: 'hsla(0, 0%, 0%, 0.07)',
  black5: 'hsla(0, 0%, 0%, 0.09)',
  black6: 'hsla(0, 0%, 0%, 0.11)',
  black7: 'hsla(0, 0%, 0%, 0.14)',
  black8: 'hsla(0, 0%, 0%, 0.22)',
  black9: 'hsla(0, 0%, 0%, 0.44)',
};

const purple = {
  purple1: 'hsl(270, 100%, 95%)',
  purple2: 'hsl(270, 100%, 75%)',
  purple3: 'hsl(270, 100%, 50%)',
  purple4: 'hsl(270, 100%, 25%)',
  purple5: 'hsl(270, 100%, 10%)',
  purple6: 'hsl(270, 100%, 5%)',
  purple7: 'hsl(270, 100%, 0%)',
}

export const color = {
  ...amber,
  ...black,
  ...purple,
  ...blue,
  ...evergreen,
  ...gray,
  ...green,
  ...red,
  ...yellow,
  transparent: 'transparent',
  white: 'hsla(0, 0%, 100%, 1)',
};

const size = {
  // ! 🚨 DO NOT USE we have to have these for the built-in component styles
  0: 0,

  lg: 32,
  md: 24,
  sm: 16,
  true: 16,
  xl: 40,
  xml: 48, // extra medium large lol
  xs: 12,
  xxl: 64,
  xxs: 8,
  xxxl: 80,
  xxxs: 4,
};

const radius = {
  // ! 🚨 DO NOT USE we have to have these for the built-in component styles
  0: 0,
  1: 2,
  2: 4,
  3: 6,
  4: 8,

  default: 4,
  full: 9999,
  lg: 8,
  md: 6,
  sm: 2,
  true: 0,
  xl: 12,
  xxl: 16,
  xxxl: 24,
};

const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};

export const tokens = createTokens({
  color,
  radius,
  size,
  space: size,
  zIndex,
});
