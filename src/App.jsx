/** @jsxImportSource @emotion/react */  
// 작성방법 1. 인라인 CSS 작성방법
import {useState, useEffect} from 'react';

import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Reset from './shared/styles/rest.css';

import {Link} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SubPage from './pages/Subpage';
import SubPageDetail from './pages/SubpageDetail';
import NoticeList from './pages/Board/Notice/NoticeList';
import NoticeDetails from './pages/Board/Notice/NoticeDetails';
import NoticeAjaxList from 'pages/Board/NoticeAjax/NoticeAjaxList';
import NoticeAjaxDetails from 'pages/Board/NoticeAjax/NoticeAjaxDetails';
import NotFound from './pages/NotFound';
import Event from './pages/Event';
import Main from './pages/Main';
import Example from './pages/Example'
import products from './assets/data/product.js';
import Cart from 'pages/Cart';
import CommonList from 'pages/Board/Common/CommonList';
import CommonDetails from 'pages/Board/Common/CommonDetails';
import FormExamples from 'pages/form-examples/FormExamples';


export default  function App() {
  let [product, setProduct] = useState(products);
  let [list, setList] = useState([])

  useEffect(() => {
    // 응용 새로고침해도 watcehd에 값이 있을 경우엔 초기화 진행 X
    if(JSON.parse(localStorage.getItem('watched')) && JSON.parse(localStorage.getItem('watched')).length > 0) {
      return
    }
    localStorage.setItem('watched', JSON.stringify([]))
  });

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
      <Routes>
        <Route path="/" element={<Main /> }/>
        <Route path="/subpage" element={<SubPage product={product}  setProduct={setProduct} />} />
        <Route path="/subpage/detail/:id" element={<SubPageDetail product={product} setList={setList}/>} /> 
        <Route path="/notice" element={<NoticeList list={list} setList={setList}/>} />
        <Route path="/notice/details/:id" element={<NoticeDetails />}  />
        <Route path="/notice_ajax" element={<NoticeAjaxList list={list} setList={setList}/>} />
        <Route path="/notice_ajax/details/:id" element={<NoticeAjaxDetails />}  />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p className="text-center">첫번째 이벤트</p>}/>
          <Route path="two" element={<p className="text-center">두번째 이벤트</p>}/>
        </Route>
        <Route path="/example" element={<Example />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/common" element={<CommonList />} />
        <Route path="/form-examples" element={<FormExamples />} />
        <Route path="/common/details/:id" element={<CommonDetails />}  />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

      
  );
}