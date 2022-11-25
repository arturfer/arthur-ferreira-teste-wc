import styled from 'styled-components';

const Section02Content = styled.div`


    width: 80%;
    margin-bottom: 10px;
    margin: 0 auto;
    display: flex;
    gap: 26px;
    align-items: center;
`   
const Section02Cards = styled.div`
    min-width: 244px;
    min-height: 480px;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;


    .black{
        position: absolute;
        width: 244px;
        height: 480px;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
    }
    .gradient {
        z-index: 2;
        position: absolute;
        width: 244px;
        height: 480px;
        background: linear-gradient(181.18deg, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.15) 25.93%, rgba(0, 0, 0, 0.38) 61.16%, rgba(0, 0, 0, 0.71) 91.09%);
    }

    a {
        display: none;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15.4839px;
    }

    .cardTitle {
        z-index: 3
    }
    &:hover {
        justify-content: center;
        
        .black {
            display: inherit;
        }

        a {
            display: inherit;
            color: white;
            text-decoration: underline;
            z-index: 3;
            cursor: pointer;
        }
    }
`

const Section02CardTitle = styled.h3`
    text-align: center;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 23.2258px;
    letter-spacing: 2;
    text-transform: uppercase;
    color: white;
    z-index: 3;


`




export {Section02Content, Section02Cards, Section02CardTitle}