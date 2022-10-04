import styled from '@emotion/styled';
import {Link} from "react-router-dom";
import logoimg from "../assets/imgs/logo_img.svg";

export default function HeaderContainer() {
  return (
    <>
      <Header className='test'>
        <HeaderInner>
          <img src={logoimg} alt="노액트"></img>
          <HeaderRight>
            <HeaderNavList>
              <Link to="/">메뉴1</Link>
            </HeaderNavList>
            <HeaderNavList>
              <Link to="/">메뉴2</Link>
            </HeaderNavList>
            <HeaderNavList>
              <Link to="/">메뉴3</Link>
            </HeaderNavList>
          </HeaderRight>
        </HeaderInner>
      </Header>
    </>
  )
}

const Header = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`
const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  padding: 0 60px;
  img {
    width: 170px;
  }

`

const HeaderRight = styled.ul`
  display: flex;
  border: 1px solid red;
`

const HeaderNavList = styled.li`

`