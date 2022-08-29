import styled from "styled-components";
import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

type ThemeType = typeof darkTheme 

declare module 'styled-components' {
    export interface DefaultTheme  extends ThemeType {}
}

