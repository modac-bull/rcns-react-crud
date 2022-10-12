/** @jsxImportSource @emotion/react */  
import {useState, useEffect} from 'react';

import styled from '@emotion/styled'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import FooterContainer from '../components/FooterContainer';
import ShopNav from '../components/NavShop';

// import sample1 from '../assets/imgs/sample.png' // css 스타일로 적용할 땐 import 해와서 사용하기

import axios from 'axios'; // axios


export default function Subpage(props) {
  let navigate = useNavigate();
  let [input, setInput] = useState('');
  console.log(props)

  useEffect(() => {
    console.log(input);
    const REG_NUMBER = /[^0-9]/; // 숫자를 제외한 모든 문자
    console.log(REG_NUMBER.test(input), '숫자를 포함함');
    if(REG_NUMBER.test(input)) { // 문자열만 포함
      alert('안돼요')
    }
    
  }, [input])

  return(
    <>
      <div>
        <ShopNav />
        <div className="text-center">
          <p className="text-center mx-auto mt-4">이동 경로 useNavigate로 이동하기</p>
          <button className="p-3 mt-1 border border-solid text-center" onClick={() => { navigate('/subpage/detail') }}>이동 버튼</button>
        </div>

      </div>
      <PageContentWrap>
        <MainBg src="https://codingapple.com/wp-content/uploads/2022/04/bg.png"></MainBg>
        <ProductContainer>
          {/* <ItemProductCard product={props.product[0]} i={1}></ItemProductCard>
          <ItemProductCard product={props.product[1]} i={2}></ItemProductCard>
          <ItemProductCard product={props.product[2]} i={3}></ItemProductCard> */}
          {
            props.product.map((elem, idx) => {
              return <ItemProductCard key={idx} product={props.product[idx]} i={idx}></ItemProductCard>
            })
          }
        </ProductContainer>
      <Outlet product={props.product}></Outlet>

      <input className="border border-solid border-gray-900 w-full my-20 h-14"
        onChange={(e) => {
          input = e.target.value;
          setInput(input)
        }}></input>

      </PageContentWrap>

      <div className="text-center">
        <h3 className="text-center text-3xl">AJAX 요청 실습</h3>
        <button onClick={() => {
          // 리액트에선 거의 ajax로 통신한다.
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((data) => {
            console.log(data.data);
            let copy = [...props.product, ...data.data];
            // console.log(props);
            props.setProduct(copy); // 부모 컴포넌트에 setState 끌어올려보기
          })
          .catch(() => { 
            // AJAX 요청 숨기기. 예외처리 코드
            console.log("실패했을 경우")
          })
          // <응용문제>
          // 1. 더보기 여러번 눌를 때
          // 2. 상품이 더 없을 경우 버튼 없애거나, 비활성화 시키고 싶을 때
          // 3. 로딩중 표시하기

          // POST 요청
          // axios.post('/url', {name : 'kim'}) 서버로 보낼 때

          // 여러곳에 POST
          Promise.all([ axios.get('url1'), axios.get('url2')])
          .then(() => {
            // 둘다 완료 시 실행 코드
          })


          // fecth로 사용해보기
          fetch('https://codingapple1.github.io/shop/data2.json')
          .then(result => result.json())
          .then(data=> {
            console.log(data, 'fetch')
          })

        }}>더보기</button>
      </div>
      <FooterContainer />
    </>
  )
};

function ItemProductCard(props) {
  return(
    <ItemProduct key={props.product.id}>
      <Link to={'/subpage/detail/' + props.product.id}>
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.product.id + 1)+'.jpg'} alt={props.title}></img>
        <h4>{props.product.title}</h4>
        <p>{props.product.content}</p>
      </Link>
    </ItemProduct>
  )
}
const PageContentWrap = styled.div`
  padding: 120px 60px 0;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 997px;
`

const MainBg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ItemProduct = styled.div`
  flex: 0 0 33.33%;
  width: 33.33%;
  padding: 50px 30px;
  border: 1px solid black;
  text-align: center;
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
    color: #666;
  }
`