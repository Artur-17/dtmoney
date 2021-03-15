import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        
        --blue: #5429CC;
        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size da aplicação vem com 16px; 
    html {
        @media (max-width: 1080px) {
            font-size: 93.75% // 16px x0.93,75 = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }

        //Rem - 1rem = Ao font-size da aplicação, nesse caso 16px
    }

    body {
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400px;
    }

    h1, h2, h4, h5, h6, strong {
        font-weight: 600px;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`