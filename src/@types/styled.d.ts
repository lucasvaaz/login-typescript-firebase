import styled from "styled-components";
import { darkTheme } from '../themes/dark'
import { lightTheme } from '../themes/light'

type ThemeType = typeof darkTheme 

declare module 'styled-components' {
    export interface DefaultTheme  extends ThemeType {}
}

