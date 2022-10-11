/** @jsxImportSource @emotion/react */  
import {useState, useEffect} from 'react';

import styled from '@emotion/styled'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import FooterContainer from '../components/FooterContainer';

// import sample1 from '../assets/imgs/sample.png' // css 스타일로 적용할 땐 import 해와서 사용하기

import ShopNav from '../components/NavShop';

export default function Subpage(props) {
  let navigate = useNavigate();
  let [input, setInput] = useState('');

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
          <ItemProductCard product={props.product[0]} i={1}></ItemProductCard>
          <ItemProductCard product={props.product[1]} i={2}></ItemProductCard>
          <ItemProductCard product={props.product[2]} i={3}></ItemProductCard>
          {/* {
            product.map((elem, idx) => {
              return <ItemProductCard product={product[idx]} i={idx+1}></ItemProductCard>
            })
          } */}
        </ProductContainer>
      <Outlet product={props.product}></Outlet>

      <input className="border border-solid border-gray-900 w-full my-20 h-14"
        onChange={(e) => {
          input = e.target.value;
          setInput(input)
        }}></input>

      </PageContentWrap>
      <FooterContainer />
    </>
  )
};

function ItemProductCard(props) {
  return(
    <ItemProduct key={props.product.id}>
      <Link to={'/subpage/detail/' + props.product.id}>
        <img src={props.product.imgs} alt={props.title}></img>
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