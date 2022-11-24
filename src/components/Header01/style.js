import styled from 'styled-components';

const MainHeader01 = styled.div`
    font-family: 'Open Sans';
    background-color: #F9F9F9;
    display: flex;
    justify-content: space-between;
    height: 2.362rem;
    align-items: center;
    width: 100%;

    padding: 0 10.42%;
    box-sizing: border-box;
`

const AnchorLink = styled.a`
    font-size: 0.625rem;
    font-weight: ${props => props.upper ? '700' : '400'};
    text-decoration: ${props => props.upper ? 'underline' : 'none'};
    line-height: 1.375rem;
    color: var(--gray_1);
`

const BoxComponent = styled.div`
    display: flex;
    gap: 2rem;
    
`

const WithImageBox = styled.div`

    display: flex;
    width: max-content;
    height: max-content;
    align-items: center;
    gap: 0.134rem;
    
`
const LinkIcon = styled.img`
        width: max-content;
        height: max-content;
        cursor: pointer;
`
export {MainHeader01, AnchorLink, BoxComponent, WithImageBox, LinkIcon}