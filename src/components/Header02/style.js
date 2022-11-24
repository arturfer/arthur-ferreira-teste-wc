import styled from 'styled-components';

const MainHeader02 = styled.div`
    font-family: 'Open Sans';
    background-color: var(--branco);  
    height: 5.625rem;
    max-width: 100%;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;

    
    button {
        width: 0;
        height: 100%;
        margin: 0;
        padding: 0;
        border: 0;
    }
    .zindex {
        transform: translate(10px);
        padding-bottom: 3px;
    }

    .zindex2 {
        transform: translateX(-26px);
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: 700;
        font-size: 10px;
        margin-bottom: 3px;

    }

`   
const LogoHinode = styled.img`

    max-width: 14%;
    height: max-content;
`
const InputHeader = styled.input`
    max-width: 399px;
    min-width: 330px;
    border-radius: 100px;
    height: 37px;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
    background-color: rgba(225, 220, 213, 0.5);
    margin-left: 48px;
    padding-left: 23px;

    &::placeholder {
        font-family: 'Open Sans';
        color: var(--gray_1);
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
    }
`

const LupaIcon = styled.img`
    transform: translate(-40px);
    

    cursor: pointer;

`
const BoxComponent02 = styled.div`
    display: flex;
    width: 100%;
    margin-right: 5%;
    height: max-content;
    align-items: center;
    justify-content: start;
    gap: 22px;
    margin-left: 1.625rem;
    

`

const BoxVisitante = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 23px;
    
    
    span {
        font-size: 9px;
        font-weight: 600;
        line-height: 22px;
        transform: translate(0, 3px);
    }
`

const WithImageBox2 = styled.div`
    display: flex;
    width: max-content;
    height: max-content;
    align-items: center;
    gap: 7px;


`

const AnchorLink2 = styled.a`
    font-weight: 600;
    font-size: 12px;
    color: var(--gray_1);
    border-bottom: 1px transparent black;

`
export {MainHeader02, LogoHinode, InputHeader, LupaIcon, BoxComponent02, BoxVisitante, AnchorLink2, WithImageBox2}