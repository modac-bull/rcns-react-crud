import {React} from 'react'


import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

import ShopNav from '../components/NavShop'
import { Outlet } from 'react-router-dom'


export default function Event() {
  return(
    <>
      <ShopNav />
      <h1 className="text-center text-5xl my-5">오늘의 이벤트</h1>
      <Outlet></Outlet>
    </>
  )
}