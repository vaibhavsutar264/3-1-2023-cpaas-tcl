import { createSlice } from '@reduxjs/toolkit'
import { dispatch } from '../store'
import { account } from '../../services/api/index'
import { slices } from '../../utils/constants'

const initialState: any = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    accountDetails: [],
    updateUser: ""
}

export const accountSlice = createSlice({
    name: slices.ACCOUNT_SLICE,
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true
        },
        hasError(state) {
            state.isLoading = false
            state.isError = true
        },
        getDetails: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.accountDetails = action.payload
        },
        updateDetails: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.updateUser = action.payload
        }
    },
})

// billingSlice
export default accountSlice.reducer

// actions
export const { startLoading, hasError } = accountSlice.actions

// -----------------------------------------------------------------
export const getAcDetails = () => {
    return async () => {
        try {
            const { data } = await account.getAccountDetails()
            if (data) {
                dispatch(accountSlice.actions.getDetails(data.data.data.legalentities[0]))
                // dispatch(accountSlice.actions.getDetails(data))
            } else {
                dispatch(accountSlice.actions.hasError())
            }
            return data
        } catch (error) {
            dispatch(accountSlice.actions.hasError())
        }
    }
}


export const updateUserDetails = (id: any, data: any) => {
    return async () => {
        try {
            const { data: any } = await account.editUserDetails(id, data)
            if (data) {
                dispatch(accountSlice.actions.updateDetails(data))
                // dispatch(accountSlice.actions.getDetails(data))
            } else {
                dispatch(accountSlice.actions.hasError())
            }
            return data
        } catch (error) {
            dispatch(accountSlice.actions.hasError())
        }
    }
}
