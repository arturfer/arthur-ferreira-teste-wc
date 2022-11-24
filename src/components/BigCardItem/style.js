import styled from 'styled-components';

const BigCardItemMain = styled.div`
    width: 475px;
    height: 613px;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
const BigCardInfos = styled.div`
    width: 190px;
    height: 140px;
    background-color: white;
    border-radius: 16px;
    margin:10px 15px;
    padding: 15px 15px;
    display: flex;
    flex-direction: column;

    .centavos {
        transform: translate(-32px, -4px);
        font-family: 'Aktiv Grotesk Ex';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
    }
    .parcelado {
        font-family: 'Aktiv Grotesk Ex';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        transform: translateY(-50px);
        color: #828282;
    }
`

const BigCardTitle = styled.h3`
    width: max-content;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    margin: 0;
    padding: 0;
`

const FiveStars = styled.img`
    margin: 0;
    padding: 0;
    width: max-content;
    height: max-content;
    transform: translateY(-16px);
`

const BigCardButton = styled.button`
    color: #F2994A;
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    height: max-content;
    align-self: center;
    justify-self: end;
    margin-bottom: 26px;
    padding: 15px  75px;
    border: 2px solid #F2994A;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #F2994A;
    }

`
export {BigCardItemMain, BigCardInfos, BigCardTitle, FiveStars, BigCardButton}