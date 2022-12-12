import { createSlice } from '@reduxjs/toolkit'
import { dispatch } from '../store'
import { UserLogin, Password, Email, AuthState } from '../../types/authType'
import {
  removeFromLocalStorage,
  setInLocalStorage,
  getFromLocalStorage,
} from '../../hooks/useLocalStorage'
import { userLoginData } from '../../services/api/index'
import { apiDefaultrespons, localStorageVar } from '../../utils/constants'
import axios from 'axios'

const initialState: AuthState = {
  user: null,
  profile: undefined,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
  message: '',
  emailSent: '',
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
      state.isAuthenticated = false
    },
    hasError(state, action) {
      state.isLoading = false
      state.isError = true
      state.isAuthenticated = false
      state.message = action.payload.data?.message
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.user = action.payload.user
      state.isAuthenticated = true
      state.message = action.payload.message
    },
    setPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    },
    forgotPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.emailSent = action.payload.message as string
    },
    resetPasswordSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload.message as string
    },
    logOutSuccess: (state) => {
      state.isLoading = false
      state.user = null
      state.isAuthenticated = false
    },
  },
})

// reducers
export default userSlice.reducer

// actions
export const { startLoading, hasError } = userSlice.actions

// -----------------------------------------------------------------

export const login = (userData: UserLogin) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response: any = await userLoginData.login(userData)
      const { data } = response
      if (response) {
        console.log(response)
        setInLocalStorage(localStorageVar.USER_VAR, JSON.stringify(data.data.data))
        const token: any = data.data.data.access_token
        if (token) { setInLocalStorage(localStorageVar.TOKEN_VAR, token) }

        const user = { token : token, email : userData.username }

        const resp = { user }
        dispatch(userSlice.actions.loginSuccess(resp))
      }
    }  catch ({ data = apiDefaultrespons.LOGIN_ERRRO }) {
      dispatch(userSlice.actions.hasError(data))
    }
  }
}

export const logout = () => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      removeFromLocalStorage(localStorageVar.TOKEN_VAR)
      removeFromLocalStorage(localStorageVar.USER_VAR)
      //Logout API will take below input, refreshToken received during login + user email Id
      /*{
        "refreshToken": "string",
        "username": "string"
      }*/
      // await userLoginData.logout()
      dispatch(userSlice.actions.logOutSuccess())
    } catch (error) {
      console.log(error)
      dispatch(userSlice.actions.hasError(error))
    }
  }
}
export const updatePassword = (passwordData: Password) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response = await userLoginData.updatePassword(passwordData)
      dispatch(userSlice.actions.setPasswordSuccess(response.data))
      return response.data
    } catch (error) {
      dispatch(userSlice.actions.hasError(error))
    }
  }
}

export const forgotPassword = (userEmail: Email) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const response = await userLoginData.forgotPassword(userEmail)
      dispatch(userSlice.actions.forgotPasswordSuccess(response.data))
      return response.data
    } catch (error) {
      dispatch(userSlice.actions.hasError(error))
    }
  }
}

export const resetPassword = (token: any, passwordData: Password) => {
  dispatch(userSlice.actions.startLoading())
  return async () => {
    try {
      const { data } = await userLoginData.resetPassword(token, passwordData)
      dispatch(userSlice.actions.resetPasswordSuccess(data))
    } catch (error) {
      dispatch(userSlice.actions.hasError(error))
    }
  }
}
