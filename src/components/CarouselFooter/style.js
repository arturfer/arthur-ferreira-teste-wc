import styled from 'styled-components';

const MainCarouselFooter = styled.div`
    font-family: 'Open Sans';
    width: 100%;
    max-width: 100%;
    height: 7.313rem;
    background-color: #F5F6FA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10.42%;
`

const DivCarouselFooterBox = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`


const SpanCarouselFooter = styled.span`
        font-family: 'Open Sans';
        max-width: 256px;
        height: max-content;
        font-weight: 600;
        font-size: 14px;
        color: var(--gray_1);
`
export { MainCarouselFooter, DivCarouselFooterBox, SpanCarouselFooter }