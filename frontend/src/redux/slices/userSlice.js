import { createSlice } from '@reduxjs/toolkit' 
 
const userSlice = createSlice({ 
  name: 'user', 
  initialState: { 
    data: null, 
    loading: false, 
    error: null, 
  }, 
  reducers: { 
    setUser: (state, action) =
      state.data = action.payload 
    }, 
    updateUserCoins: (state, action) =
      if (state.data) { 
        state.data.coins += action.payload 
      } 
    }, 
    updateUserTier: (state, action) =
      if (state.data) { 
        state.data.tier = action.payload 
      } 
    }, 
    clearUser: (state) =
      state.data = null 
      state.error = null 
    }, 
  }, 
}) 
 
export const { setUser, updateUserCoins, updateUserTier, clearUser } = userSlice.actions 
export default userSlice.reducer 