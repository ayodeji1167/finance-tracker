import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

import { colors, components, fontConfig } from './custom';

const config: ThemeConfig = {
  useSystemColorMode: false,
  cssVarPrefix: 'compstack',
};

export const theme = extendTheme({
  config,
  colors,
  ...fontConfig,
  components,
});
