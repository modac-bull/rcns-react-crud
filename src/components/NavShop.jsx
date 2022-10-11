import styled from '@emotion/styled'


export default function ShopNav() {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
      <Logo href="#home">로고</Logo>
      <Nav className="mx-auto">
        <NavMenu href="#home">Home</NavMenu>
        <NavMenu href="#features">Features</NavMenu>
        <NavMenu href="#pricing">Pricing</NavMenu>
      </Nav>
      </Container>
    </Navbar>
  )
}



const Navbar = styled.div`
  background-color: #ddd;
`

const Container = styled.div`
  padding: 0 60px;
`

const Logo = styled.div`

`

const Nav = styled.ul`
  display: flex;
  align-items: center;

`

const NavMenu = styled.li`
  padding: 0 15px;
  border: 1px solid black;
`
