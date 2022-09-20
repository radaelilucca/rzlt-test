import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      accent: string;
      focus: string;
      lightText: string;
      cardBackground: string;
      cardDarkerBackground: string;
    };
    fontFamily: {
      poppins: string;
    };

    fontWeight: {
      thin: number;
      xLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };

    rounded: {
      circle: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
