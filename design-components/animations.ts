import { createAnimations } from '@tamagui/animations-moti';

export const animations = createAnimations({
  fast: {
    damping: 25,
    mass: 1.25,
    stiffness: 250,
    type: 'spring',
  },
  medium: {
    damping: 20,
    mass: 1,
    stiffness: 200,
    type: 'spring',
  },
  sheet: {
    damping: 50,
    mass: 1,
    stiffness: 300,
    type: 'spring',
  },
  slow: {
    damping: 10,
    mass: 0.5,
    stiffness: 50,
    type: 'spring',
  },
});
