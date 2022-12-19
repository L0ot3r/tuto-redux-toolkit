import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userSlice } from './reducers/userSlice'
import {counterSlice} from './reducers/counterSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'


const rootReducer = combineReducers({
  user: userSlice.reducer,
  counter: counterSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector