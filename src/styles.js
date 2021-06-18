import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: blue;
        color: white;
        font-family: 'work-sans', sans-serif;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antiliased;
        text-rendering: optimizedLegibility;
    }
`