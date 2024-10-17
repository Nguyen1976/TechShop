import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone:'',
  address: '',
  avatar: '',
  access_token: '',
  id: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
        const {name='', email='', address='', avatar='', phone='', access_token='', exp='', _id=''} = action.payload
        state.name = name;
        state.email = email;
        state.address = address;
        state.phone = phone;
        state.avatar = avatar;
        state.id = _id;
        state.access_token = access_token;
    },
    resetUser: (state) => {
        state.name = '';
        state.email = '';
        state.address = '';
        state.phone = '';
        state.avatar = '';
        state.id = '';
        state.access_token = '';
    }
  },
})


export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer;