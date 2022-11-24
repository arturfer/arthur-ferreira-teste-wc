import styled from 'styled-components';

const StyledCard = styled.div`
    width: 246.2px;
    height: 460px;
    display: flex;
    flex-direction: column;
    border: 0.5px solid #F2F2F2;

    box-sizing: border-box;
    
    .invisible {
        color: transparent;
        background-color: transparent;
    }

    .flex {
        width: 100%;
        justify-content: space-between;
        display: flex;
    }
`
const CardImageBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const CardImage = styled.img`
    width: 70%;
    transition: 2s;

    &:hover {
        transform: scale(1.2);
    }
`
const CardInfos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const CardTitle = styled.h2`
    font-family: 'Oswald';
    font-weight: 400;
    font-size: 17px;

    margin: 0;
    padding: 0;
    border: 0;
`

const FavoriteIcon = styled.img`
    cursor: pointer;
    width: 20px;
    max-width: 20px;
    min-height: 20px;
    transform: translate(-6px, 10px);
    overflow: hidden;
    transition: 1s;

    &:hover {
        transform: translate(-6px, 15px);

    }
`

const OffIcon = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    background-color: #CF960D;
    width: max-content;
    padding: 2px;
    color: white;
    transform: translate(-7px, 15px);
`

const RatingStars = styled.img`
    width:max-content;
    transform: translateY(-16px);
`

const OldPrice = styled.span`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    color: #828282;
    text-decoration: line-through;
    transform: translateY(-16px);
`

const PriceWithCents = styled.div`
    display: flex;
    transform: translateY(-25px);

    .real {
        font-family: 'Aktiv Grotesk Ex';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 18px;
        margin: 0;
        padding: 0;
    }
    .cents {
        font-family: 'Aktiv Grotesk Ex';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin: 0;
        padding: 0;
        transform: translateY(-4px) translateX(-19px);
    }
`

const ButtonComprarBox = styled.div`
    height: 100%;
    display: flex;
    align-items: end;
    bottom: 0;
    width: 100%;

`

const ButtonComprar = styled.button`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 11.7143px;
    color: #F2994A;
    background-color: transparent;
    border: 1px solid #F2994A;
    height: 58px;
    width: 100%;
    cursor: pointer; 

    &:hover {
        background-color: #F2994A;
        color: white;
    }
`
export {StyledCard, CardImageBox, OffIcon, CardImage, FavoriteIcon, CardInfos, CardTitle, RatingStars, OldPrice, PriceWithCents, ButtonComprar, ButtonComprarBox}