import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  access_token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
        const {name, email, access_token, exp, id} = action.payload
        state.name = name;
        state.email = email;
        state.access_token = access_token;
    }
  },
})


export const { updateUser } = userSlice.actions

export default userSlice.reducer;