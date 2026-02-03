import { configureStore } from '@reduxjs/toolkit' 
import userReducer from '../slices/userSlice' 
import authReducer from '../slices/authSlice' 
import coinReducer from '../slices/coinSlice' 
import surveyReducer from '../slices/surveySlice' 
 
export const store = configureStore({ 
  reducer: { 
    user: userReducer, 
    auth: authReducer, 
    coins: coinReducer, 
    survey: surveyReducer, 
  }, 
}) 
