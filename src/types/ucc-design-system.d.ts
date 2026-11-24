declare module 'ucc-design-system' {
  import * as React from 'react';

  export interface ThemeColors {
    primary: {
      'vodafone-red': string;
      'vodafone-grey': string;
      white: string;
      black: string;
      vodafoneRedTransparent: string;
    };
    secondary: {
      'lemon-yellow': string;
      'fresh-orange': string;
      'dark-orange': string;
      'spring-green': string;
      'aqua-blue': string;
      turquoise: string;
      'red-violet': string;
      aubergine: string;
    };
    monochrome: {
      mineshaft: string;
      'dove-grey': string;
      'dusty-grey': string;
      platinum: string;
      'silver-chalice': string;
      aluminium: string;
      'light-grey': string;
      'white-smoke': string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    ui: {
      background: string;
      notification: string;
      navbar: string;
      mineshaft: string;
      error: string;
    };
  }

  export interface Theme {
    space: number[];
    sizes: number[];
    fonts: {
      vodafoneLight: string;
      vodafoneRg: string;
      vodafoneBold: string;
      vodafoneExtraBold: string;
    };
    fontSizes: string[];
    fontWeights: {
      regular: number;
      bold: number;
    };
    lineHeights: string[];
    colors: ThemeColors;
  }

  export const theme: {
    light: Theme;
    dark: Theme;
  };

  export const Heading: React.FC<any>;
  export const Text: React.FC<any>;
  export const Button: React.FC<any>;
  export const Box: React.FC<any>;
  export const Grid: React.FC<any>;
  export const Flex: React.FC<any>;
  export const GlobalStyles: React.FC<any>;
  export const Icons: Record<string, React.FC<any>>;
}
