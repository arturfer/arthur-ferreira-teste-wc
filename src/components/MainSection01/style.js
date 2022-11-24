import styled from 'styled-components';

const SectionComponent = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;


`

const SectionTitle = styled.h1`

    margin-top: 9vh;
    font-family: 'Oswald';
    font-weight: 300;
    font-size: 46px;
    letter-spacing: 1px;
    line-height: 70px;
    text-transform: uppercase;
    text-align: center;
`

const VerMaisBox = styled.div`
        display: flex;
        align-items: center;
        align-self: end;
        margin-right: 10%;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        transform: translateY(-60px);
        gap: 3px;
        color: var(--gray_1);
        cursor: pointer;


        span {
            text-decoration: underline;
        }

        img{
            margin-top: 3px;
        }
`

export {SectionComponent, SectionTitle, VerMaisBox}