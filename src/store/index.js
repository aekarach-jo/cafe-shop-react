import { configureStore } from '@reduxjs/toolkit'
import appslice from './app-slice'

export const store = configureStore({
  reducer: {
    app : appslice.reducer
  },
})