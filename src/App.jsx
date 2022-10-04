/** @jsxImportSource @emotion/react */  
// 작성방법 1. 인라인 CSS 작성방법
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Reset from './shared/styles/rest.css';

import {Link} from 'react-router-dom'


import HeaderContainer from './components/HeaderContainer';
import FooterContainer from './components/FooterContainer';


export default  function App() {
  return (
    <>
      <Global
        styles={css`
          ${Reset}
          body{
            position: relative;
            min-width:320px;
            overflow-x: hidden;
          }
        `}
      >
      </Global>

      <HeaderContainer />
      <AreaWrap>
        <h1 css={css`
          font-size: 50px;
          &:hover {
            color: skyblue;
          }
        `}>
        <div css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}>
          메인 화면 테스트 
        </div>
        </h1>
        <Button>버튼</Button>
        <Link to="/notice">게시판 바로가기</Link>
        <p>컴포넌트로 섹션 추가해보기</p>
      </AreaWrap>
      <FooterContainer />
    </>
  );
}

const Button = styled.button`
  padding: 20px 10px;

`

// area 공통 컴포넌트로 묶는 방식에 대해 고민 필요. 
const AreaWrap = styled.div`
  padding: 0 60px;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 200vh;
  padding-top: 120px;
`