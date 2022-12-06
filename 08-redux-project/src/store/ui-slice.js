import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  notification: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNotification(state, action){
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status
      }
    }
  }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
