import { Global, css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = () => {
    return (
        <>
            <Global
                styles={css`

                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Montserrat:wght@400;600&display=swap');

          body {
            margin: 0;
            font-family: 'Manrope', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 14px;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }
          
          ul{
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
           `}
            />
        </>
    );
}