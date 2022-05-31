import styled from 'styled-components'
import Link from 'next/link'

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
      <Link href="/">
        <a>
          <Logo src="/logo.png" />
        </a>
      </Link>
    </NavbarContainer>
  )
}

export default Navbar;
