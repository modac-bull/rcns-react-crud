import { createSlice} from '@reduxjs/toolkit'

export let user = createSlice({
  name : 'user',
  initialState :{ name: 'kim', age: 14 },
  reducers : {
    changeName(state) {
      state.name = 'park'
    },
    changeAge(state, action) {
      state.age += action.payload
      /* 
      두번째 파라미터 (action)
      action.type -> state 변경함수 이름 접근 가능
      action.payload -> 파라미터 접근 가능
      */
    }
  }
})

export let { changeName, changeAge } = user.actions
