import styled from 'styled-components';




const HeaderMain03 = styled.nav`
    width: 100%;
    height: 3.063rem;
    background-color: #AA8232;
    box-sizing: border-box;
    padding: 0 10.42%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: -1;
    box-shadow: inset 0px 4px 10px 0px rgba(0,0,0,0.17);
`

const WithIconLink03 = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1rem;
    cursor: pointer;
`

const AnchorLink03 = styled.a`
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--branco);


`
const LinkIcon03 = styled.img`

`


export {HeaderMain03, WithIconLink03, AnchorLink03, LinkIcon03}