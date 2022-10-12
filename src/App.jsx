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

import products from './assets/data/product.js';


// 추후 진행
// function ListItem() {
//   return (
//     <li></li>
//   )
// }


export default  function App() {
  let [product, setProduct] = useState(products);



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
        <Route path="/subpage/detail/:id" element={<SubPageDetail product={product}/>} /> 
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/notice/details" element={<NoticeDetails />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p className="text-center">첫번째 이벤트</p>}/>
          <Route path="two" element={<p className="text-center">두번째 이벤트</p>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

      
  );
}