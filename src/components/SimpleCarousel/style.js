import styled from 'styled-components';

const SimpleCarouselBox = styled.div `
    width: 100%;
    max-width: 1280px;
    div {
        display: flex;
        gap: 20px;


        div{

            min-width: 83.5%;


            div{
                min-width: initial;

            }
        }
    }

`

const CarouselItem = styled.div`


`
export {CarouselItem,SimpleCarouselBox}