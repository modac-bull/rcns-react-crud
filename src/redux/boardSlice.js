import { createSlice } from '@reduxjs/toolkit'
import dummyLists from "assets/data/dummy_lists" // 임시 데이터

export let board = createSlice({
  name : 'board',
  initialState :dummyLists
})
