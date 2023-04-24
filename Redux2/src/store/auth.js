import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated : false
}

const authSlise = createSlice({
  name : 'authentication',
  initialState : initialAuthState,
  reducers : {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

export const authAction = authSlise.actions;
export default authSlise.reducer;