import styled from 'styled-components';

export const FooterSection02 = styled.div`
    width: 100%;
    height: 422px;
    background-color: #E1DCD5;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 89px;

`

export const Footer02Card = styled.div`
    margin-top: 70px;

    display: flex;
    flex-direction: column;
`
export const Footer02ItemTitle = styled.h3` 
    margin-top: 0;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray_1);
    text-transform: uppercase;
`

export const Footer02ItemLink = styled.a` 

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray_1);
    text-decoration: none;

    &:hover {
        color: black;
    }
`
export const Footer02text = styled.span` 

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--gray_1);
    text-decoration: none;
    text-align: end;
`

export const ButtonFooter02 = styled.button`
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
    margin-bottom: 15px;


    &:hover{
        background-color: #00737d;
    }
`

export const FooterIconsBox = styled.div`
    margin-top: 15px;
    justify-content: end;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`


export const FooterIcon = styled.img`
    margin-left: 5px;
    width: max-content;
    height: max-content;
    cursor: pointer;
`