import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './reducers/userSlice'
import {counterSlice} from './reducers/counterSlice'



export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    counter: counterSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch