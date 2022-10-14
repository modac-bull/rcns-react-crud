/** @jsxImportSource @emotion/react */  
// 작성방법 1. 인라인 CSS 작성방법
import {useState} from 'react';

import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Reset from './shared/styles/rest.css';

import {Link} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import SubPage from './pages/Subpage';
import SubPageDetail from './pages/SubpageDetail';
import NoticeList from './pages/Board/Notice/NoticeList';
import NoticeDetails from './pages/Board/Notice/NoticeDetails';
import NotFound from './pages/NotFound';
import Event from './pages/Event';
import Main from './pages/Main';
import Example from './pages/Example'
import products from './assets/data/product.js';
import Cart from 'pages/Cart';


export default  function App() {
  let [product, setProduct] = useState(products);
  let [list, setList] = useState([])

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
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p className="text-center">첫번째 이벤트</p>}/>
          <Route path="two" element={<p className="text-center">두번째 이벤트</p>}/>
        </Route>
        <Route path="/example" element={<Example />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

      
  );
}