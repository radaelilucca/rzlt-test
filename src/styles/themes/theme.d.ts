import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      accent: string;
    };
    fontFamily: {
      poppins: string;
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
