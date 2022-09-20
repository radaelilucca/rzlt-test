import 'styled-components';
import { mainTheme } from './main';

declare module 'styled-components' {
  type MainTheme = typeof mainTheme;
  export interface DefaultTheme extends DefaultTheme, MainTheme {}
}
