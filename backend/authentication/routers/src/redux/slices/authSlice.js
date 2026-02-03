import { createSlice } from '@reduxjs/toolkit' 
 
const authSlice = createSlice({ 
  name: 'auth', 
  initialState: { 
    token: localStorage.getItem('token'), 
    isAuthenticated: !!localStorage.getItem('token'), 
    loading: false, 
    error: null, 
    verificationSent: false, 
  }, 
  reducers: { 
    loginSuccess: (state, action) =
      state.token = action.payload.token 
      state.isAuthenticated =true
      localStorage.setItem('token', action.payload.token) 
    }, 
    logout: (state) =
      state.token = null 
      state.isAuthenticated = false 
      localStorage.removeItem('token') 
    }, 
      setVerificationSent(state, action) =
      state.verificationSent = action.payload 
  
    clearError: (state) =
      state.error = null 
    
    setError: (state, action) =
      state.error = action.payload 
  
 
 
export const { loginSuccess, logout, setVerificationSent, clearError, setError } = authSlice.actions 
export default authSlice.reducer 
