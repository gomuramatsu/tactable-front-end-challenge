import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100vw;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      Tactablog by Go Muramatsu
    </FooterContainer>
  )
}

export default Footer;