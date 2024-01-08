import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.isDarkTheme = !state.isDarkTheme
    },
  },
})

export const { changeTheme } = themeSlice.actions
export const getTheme = (state) => state.theme.isDarkTheme