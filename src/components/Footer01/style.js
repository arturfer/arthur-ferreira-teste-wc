import styled from 'styled-components';

export const FooterSection01 = styled.div`
    width: 100%;
    height: 152px;
    background-color: #00002D;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterNews = styled.span`

    font-family: 'Aktiv Grotesk Ex';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: center;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: #FFFFFF;
    line-height: 44px;
    margin-right: 47px;
`
export const FooterInput = styled.input`
    color: white;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    background-color: transparent;
    border: 0;
    outline: 0;
    width: 207px;
    border-bottom: 1px solid white;
    margin-left: 16px;

    &::placeholder {
        color: white;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
    }
`

export const ButtonFooter01 = styled.button`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    background-color: #009BAA;
    padding: 15px 30px;
    border: none;
    outline: none;
    margin-left: 25px;

    &:hover{
        background-color: #00737d;
    }
`
