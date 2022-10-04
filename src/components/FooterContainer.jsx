import styled from '@emotion/styled'

export default function FooterContainer() {
  return(
    <>
      <FooterWrap>
        <FooterInner>
          푸터 영역입니다.
        </FooterInner>
      </FooterWrap>
    </>
  )
}

const FooterWrap = styled.div`
  height: 200px;
  background-color: #222;
`

const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 60px;
  color: #fff;
`