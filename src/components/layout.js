import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';

const Layout = ({children}) => {
    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box
                    }
                    *, *:before, *:after{
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 1.6rem;
                        line-height: 2;
                        font-family: 'Lato', sans-serif;
                    }
                    h1,h2,h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1,h2{
                        text-align: center;
                        font-family: 'Lato', sans-serif;
                        font-weight: 300;
                    }
                    h3{
                        font-family: 'Roboto', sans-serif;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .contenedor{
                        max-width: 120rem;
                        margin: 0 auto;
                        width: 95%;
                    }
                    img{
                        max-width: 100%;
                    }
                `}
            />
            
            <Helmet>
                <title>Inmobiliaria Gatsby</title>
                <meta name="description" content="Inmobiliaria Gatsby hecha con Gatsby" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            {children}
        </>
     );
}
 
export default Layout;