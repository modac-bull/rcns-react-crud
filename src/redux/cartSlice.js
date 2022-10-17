import { createSlice } from '@reduxjs/toolkit'


export let cart = createSlice({
  name : 'cart',
  initialState :[
    {id: 0, title: 'White and Black', count : 2},
    {id: 1, title: 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action) {
      // state[action.payload].count += 1; // state 배열일 경우에 이렇게 수정했음
      // 더 정확한 코드는 상품 ID 값을 토대로 찾아서 증가 시켜줘야 함
      let matchIndex = state.findIndex((i) => { return i.id === action.payload  })
      state[matchIndex].count ++;

    },
    addCart(state, action) {
      state.push(action.payload)
      // console.log(state, action);
    }
  }
})

export let { addCount, addCart } = cart.actions
