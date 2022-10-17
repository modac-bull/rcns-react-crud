  import styled from "@emotion/styled";
  import FooterContainer from "components/FooterContainer";
  import HeaderContainer from "components/HeaderContainer";

  import { useDispatch, useSelector } from 'react-redux'
  import {  addCount } from "redux/cartSlice";
  import { changeName, changeAge} from "redux/userSlice";

  export default function Cart() {
    let a = useSelector((state) => {return state});
    let cart = useSelector((state) => { return state.cart });
    let user = useSelector((state) => {return state.user})
    let dispatch = useDispatch(); // store.js로 요청해줌

    return(
      <>
        <HeaderContainer />
          <PageContentWrap>
            <p>{user.name}, {user.age}</p>
            <button className="p-5 border-1 border-solid"
              onClick={() => {
              dispatch(changeName())
            }}>이름 변경
            </button>
            <button className="p-5 border-1 border-solid"
              onClick={() => {
              dispatch(changeAge(100))
            }}>나이 변경
            </button>
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
                {
                  cart.length > 0 ?
                  cart.map((product, i) => {
                    return (
                      <tr key={i}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.count}</td>
                        <td>
                        <button className="p-4 border-solid border"
                          onClick={() => {
                            // dispatch(changeName());
                            // console.log(user)
                            dispatch(addCount(product.id))
                        }}>+</button>
                        </td>
                      </tr>
                    )
                  }) :
                  <tr>
                    <td colspan="4">제품이 없습니다.</td>
                  </tr>
                }
                
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
    padding-bottom: 200px;
    min-height: 100vh;
  `

  const Table = styled.table`
    width: 100%;
    tr,td,th {
      border: 1px solid black;
      text-align: center;
    }
    th,td {
      padding: 5px 10px;
    }
  `