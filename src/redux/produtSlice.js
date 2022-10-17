import { createSlice } from '@reduxjs/toolkit'
import products from 'assets/data/product';


export let product = createSlice({
  name : 'product',
  initialState :products,
  reducers : {
   
  }
})

