import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root{
    overflow-x: hidden;
    --branco: #FFFFFF;
    --gray_1: #333333;

    }

    button {
        &:focus {
            outline: none;

        }
    }

    a {
        &:focus {
            outline: none;

        }
    }
`
export default GlobalStyle