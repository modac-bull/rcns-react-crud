import { configureStore, createSlice, current } from '@reduxjs/toolkit'

import {user} from 'redux/userSlice'

let cart = createSlice({
  name : 'cart',
  initialState :[
    {id: 0, name: 'White and Black', count : 2},
    {id: 1, name: 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action) {
      state[action.payload].count += 1; // state 배열일 경우에 이렇게 수정했음
    }
  }
})

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer,
  }
})

export let { addCount } = cart.actions

/* 
1. createSlice() 상단에서 import 해온 후 state 생성
  { name : 'state이름', initialState : 'state값' }
  (createSlice() 는 useState() 와 용도가 비슷하다고 보면 됨)
  
2. state 등록은 configureStore() 안에 하면 됨
  { 작명 : createSlice만든거.reducer }

*/