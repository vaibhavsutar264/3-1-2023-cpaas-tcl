import { createSlice } from '@reduxjs/toolkit'
import { dispatch, store } from '../store'
import { billing } from '../../services/api/index'
import { slices } from '../../utils/constants'
import { useSelector } from 'react-redux'
import { getPageParms, setUlrParms } from '../../utils/helpers'

const initialState: any = {
    invoiceData: [],
    PageData: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    page: 1,
    take: 10,
    total: 0,
    searchValue: ""
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
            state.total = action.payload.data.length,
                state.searchValue = ""
        },
        setpageData: (state, action) => {
            state.PageData = action.payload.data
            state.page = action.payload.page
            state.take = action.payload.take
        },
        setSearchData: (state, action) => {
            state.PageData = action.payload.data
            state.page = action.payload.page
            state.take = action.payload.take
            state.total = action.payload.total
            state.searchValue = action.payload.searchValue
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
                const pg = getPageParms(response.data.length)
                dispatch(ChangePageBilling(pg.curr, pg.take))
            } else {
                dispatch(billingSlice.actions.hasError())
            }
            return response.data
        } catch (error) {
            dispatch(billingSlice.actions.hasError())
        }
    }
}

export const ChangePageBilling = (page: any, take: any) => {
    const { invoiceData, searchValue } = store.getState().billing;
    return async () => {
        if (searchValue == "" || searchValue == null || searchValue == undefined) {
            const data = invoiceData.slice((page - 1) * take, page * take);
            dispatch(billingSlice.actions.setpageData({ data, page, take }))
        } else {
            const data = invoiceData.filter((d: any) => `${Object.values(d).join(",")}`.includes(searchValue))
            dispatch(billingSlice.actions.setSearchData({ searchValue, data: data.slice((page - 1) * take, page * take), page, take, total: data.length }))
        }
    }
}

export const searchData = (searchValue: any) => {
    const { invoiceData = [] } = store.getState().billing;
    const pg = getPageParms(invoiceData.length)
    setUlrParms(1, pg.take)
    return async () => {
        const data = invoiceData.filter((d: any) => `${Object.values(d).join(",")}`.includes(searchValue))
        dispatch(billingSlice.actions.setSearchData({ searchValue, data: data.slice(1, 1 * pg.take), page: 1, take: pg.take, total: data.length }))
    }
}

export const sortData = (sortClm: any, direction: any) => {
    const { invoiceData = [] } = store.getState().billing;
    const pg = getPageParms(invoiceData.length)
    setUlrParms(1, pg.take)
    return async () => {
        console.log(123);
        
    }
}
