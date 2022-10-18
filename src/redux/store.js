import { configureStore } from '@reduxjs/toolkit'

import {user} from 'redux/userSlice'
import {cart} from 'redux/cartSlice'
import {product} from 'redux/produtSlice'
import { board } from './boardSlice'


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer,
    product : product.reducer,
    board : board.reducer
  }
})


/* 
1. createSlice() 상단에서 import 해온 후 state 생성
  { name : 'state이름', initialState : 'state값' }
  (createSlice() 는 useState() 와 용도가 비슷하다고 보면 됨)
  
2. state 등록은 configureStore() 안에 하면 됨
  { 작명 : createSlice만든거.reducer }

*/