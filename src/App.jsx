/** @jsxImportSource @emotion/react */  
// 작성방법 1. 인라인 CSS 작성방법
import { css } from '@emotion/react'
import styled from '@emotion/styled'


export default  function App() {
  return (
    <AreaWrap>
      <h1 css={css`
        font-size: 50px;
        &:hover {
          color: skyblue;
        }
      `}>
        테스트 
      </h1>
      <Button>버튼</Button>
    </AreaWrap>
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

`