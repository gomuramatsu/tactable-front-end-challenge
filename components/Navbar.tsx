import styled from 'styled-components'

const NavbarContainer = styled.div`
  top: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

const Logo = styled.img`
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="/logo.png" />
    </NavbarContainer>
  )
}

export default Navbar;