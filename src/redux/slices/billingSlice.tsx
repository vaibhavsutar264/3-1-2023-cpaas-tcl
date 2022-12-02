import { createSlice } from '@reduxjs/toolkit'
import { dispatch, store } from '../store'
import { billing } from '../../services/api/index'
import { slices } from '../../utils/constants'
import { getPageParms, searchArray, setUlrParms, sortArray } from '../../utils/helpers'

const initialState: any = {
    MasterData: [],
    invoiceData: [],
    PageData: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    page: 1,
    take: 10,
    total: 0,
    searchValue: "",
    sortElement: null,
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
            state.MasterData = action.payload.data
            state.total = action.payload.data.length
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
        },
        setSortData: (state, action) => {
            state.PageData = action.payload.data
            state.page = action.payload.page
            state.sortElement = action.payload.sortElement
            state.invoiceData = action.payload.invocieData
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
    console.log(searchValue);
    return async () => {
        if (searchValue == "" || searchValue == null || searchValue == undefined) {
            const data = invoiceData.slice((page - 1) * take, page * take);
            dispatch(billingSlice.actions.setpageData({ data, page, take }))
        } else {
            const data = searchArray(invoiceData, searchValue)
            dispatch(billingSlice.actions.setSearchData({ searchValue, data: data.slice((page - 1) * take, page * take), page, take, total: data.length }))
        }
    }
}

export const searchData = (searchValue: any) => {
    const { invoiceData = [] } = store.getState().billing;
    const pg = getPageParms(invoiceData.length)
    setUlrParms(1, pg.take)
    return async () => {
        const data = searchArray(invoiceData, searchValue)
        dispatch(billingSlice.actions.setSearchData({ searchValue, data: data.slice(1, 1 * pg.take), page: 1, take: pg.take, total: data.length }))
    }
}

export const sortData = (Field: any, dr: any) => {
    const { eleName } = Field;
    const { invoiceData, take, searchValue } = store.getState().billing;
    const dm = JSON.parse(JSON.stringify(invoiceData))
    setUlrParms(1, take)
    return async () => {
        if (searchValue == "" || searchValue == null || searchValue == undefined) {
            const data = sortArray(dm, eleName, dr)
            dispatch(billingSlice.actions.setSortData({ invocieData: data, sortElement: eleName, data: data.slice(0, 1 * take), page: 1 }))
        } else {
            const data = sortArray(searchArray(dm, searchValue), eleName, dr)
            dispatch(billingSlice.actions.setSortData({ invocieData: data, sortElement: eleName, data: data.slice(0, 1 * take), page: 1 }))
        }
    }
}
