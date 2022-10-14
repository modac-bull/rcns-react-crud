import {useState} from 'react';

import styled from "@emotion/styled";
import FooterContainer from "components/FooterContainer";
import HeaderContainer from "components/HeaderContainer";
import imgs1 from "assets/imgs/sample.png";

import products from "assets/data/product"

export default function Example() {
  const [data, setData] = useState(products);
  const [productStatus, setProductStatus] = useState(0);
  console.log(data)
  return(
    <>
      <HeaderContainer />
        <PageContentWrap>
          <TabWrap>
            {
              data.map((item, index) => 
              <TabItem 
                key={index}
                className={productStatus === index ? 'active' : ''}
                onClick={() => {
                console.log('클릭');
                setProductStatus(index);
              }}>탭 {index+1} [{item.title}]</TabItem> 
              )
            }
          </TabWrap>
          <TabContentWap>
            <TabContentItem product={data[productStatus]} />
          </TabContentWap>
        </PageContentWrap>
      <FooterContainer />
    </>
  )
}

function TabContentItem(props) {
  console.log(props)
  return(
    <>
      <ImgWrap img={props.product.imgs} ></ImgWrap>
      <TextWrap>
        <TextTitle>{props.product.title}</TextTitle>
        <TextContent>{props.product.content}</TextContent>
        <TextPrice>{props.product.price}</TextPrice>
        <ButtonPurchase>구매하기</ButtonPurchase>
      </TextWrap>
    </>

  )
}

const PageContentWrap = styled.div`
  padding-top: 80px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 120px;
  min-height: 100vh;
`

const TabWrap = styled.div`
  display: flex;
  margin: 80px;
  justify-content: center;

`

const TabItem =styled.div`
  border: 1px solid black;
  padding: 15px 20px;
  cursor: pointer;
  transition: color .3s, background-color .3s;
  &.active {
    background-color: #000;
    color: #fff;
  }
`

const TabContentWap = styled.div`
  display: flex;
  border: 1px solid black;
`
const ImgWrap = styled.div`
  height: 300px;
  width: 500px;
  border: 1px solid black;
  background-image:url(${(props) => props.img}); // props로 이미지 background속성 적용하기
  background-position: center;
  background-size: cover;
`

const TextWrap = styled.div`
  padding: 30px 20px;
`

const TextTitle = styled.h3`
  font-size: 35px;
`
const TextContent = styled.h3`
  font-size: 15px;
`
const TextPrice = styled.h3`
  font-size: 15px;
`

const ButtonPurchase = styled.button`
  padding: 15px 20px;
  margin-top: 30px;
  border: 1px solid black;
  background-color: #000;
  color: #fff;
`