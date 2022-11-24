import styled from 'styled-components';

const MainCarousel = styled.div`
width: 100%;

max-height: 100vh;
background-color: red;


div {
    background-color: #D5B69A;
    display: flex;

    justify-content: center;
    height: 100vh;
    

    a {
        color: white;
        font-family: 'Open Sans';

        font-weight: 700;
        font-size: 11.7143px;
        border: 2px solid white;
        height: max-content;
        padding: 16px 36px;
        position: absolute;
        top: 49%;
        left: 60%;
    }
}


`


export {MainCarousel}