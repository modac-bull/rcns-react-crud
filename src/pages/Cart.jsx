import styled from "@emotion/styled";
import FooterContainer from "components/FooterContainer";
import HeaderContainer from "components/HeaderContainer";

export default function Cart() {
  return(
    <>
      <HeaderContainer />
        <PageContentWrap>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>안녕</td>
                <td>안녕</td>
                <td>안녕</td>
              </tr>
            </tbody>
          </Table>
        </PageContentWrap>
      <FooterContainer />
    </>
  )
}

const PageContentWrap = styled.div`
  padding-top: 200px;
  padding-left: 60px;
  padding-right: 60px;
  min-height: 100vh;

`

const Table = styled.table`
  width: 100%;
  tr,td,th {
    border: 1px solid black;
    text-align: center;
  }

`