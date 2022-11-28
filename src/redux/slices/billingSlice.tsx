import { createSlice } from '@reduxjs/toolkit'
import { dispatch } from '../store'
import { billing } from '../../services/api/index'
import { slices } from '../../utils/constants'

const initialState: any = {
    invoiceData: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
}

export const billingSlice = createSlice({
    name: slices.BILLING_SLICE,
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true
        },
        hasError(state) {
            state.isLoading = false
            state.isError = true
        },
        loadInvoices: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.invoiceData = action.payload.data
        }
    },
})

// billingSlice
export default billingSlice.reducer

// actions
export const { startLoading, hasError } = billingSlice.actions

// -----------------------------------------------------------------

export const loadInvoices = (parms: any) => {
    return async () => {
        try {
            const response = await billing.loadInvoices(parms)
            if (response) {
                dispatch(billingSlice.actions.loadInvoices({ data: response.data }))
            } else {
                dispatch(billingSlice.actions.hasError())
            }
            return response.data
        } catch (error) {
            dispatch(billingSlice.actions.hasError())
        }
    }
}