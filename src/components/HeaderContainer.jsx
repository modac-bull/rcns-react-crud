import styled from '@emotion/styled';
import {Link, useNavigate} from "react-router-dom";
import logoimg from "../assets/imgs/logo_img.svg";

export default function HeaderContainer() {
  let navigate = useNavigate();

  return (
    <>
      <Header className='test'>
        <HeaderInner>
          <img className="cursor-pointer" src={logoimg} alt="노액트" onClick={() => { navigate('/') }}></img>
          <HeaderRight>
            <HeaderNavList>
              <LinkMenu to="/subpage">코딩애플 Part2</LinkMenu>
            </HeaderNavList>
            <HeaderNavList>
              <LinkMenu to="/notice">게시판</LinkMenu>
            </HeaderNavList>
            <HeaderNavList>
              <LinkMenu to="/example">실습 페이지</LinkMenu>
            </HeaderNavList>
            <HeaderNavList>
              <LinkMenu to="/cart">장바구니</LinkMenu>
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
`

const HeaderNavList = styled.li`

`

const LinkMenu = styled(Link)` 
  padding: 0 15px;
  border: 1px solid black;
`