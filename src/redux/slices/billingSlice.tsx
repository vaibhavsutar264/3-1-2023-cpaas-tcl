import { createSlice } from '@reduxjs/toolkit'
import { dispatch, store } from '../store'
import { billing } from '../../services/api/index'
import { slices } from '../../utils/constants'
import { getFilterConditons, getPageParms, searchArray, setUlrParms, sortArray } from '../../utils/helpers'
import axios from 'axios'
import routes from '../../services/api/routes'

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
    filterValue: [],
    download: ""
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
            state.filterValue = []
        },
        setpageData: (state, action) => {
            state.PageData = action.payload.data
            state.page = action.payload.page
            state.take = action.payload.take
        },
        downloadInvoiceData: (state, action) => {
            state.download = action.payload.data
            state.isLoading = false
        },
        setSearchData: (state, action) => {
            state.PageData = action.payload.data
            state.page = action.payload.page
            state.take = action.payload.take
            state.total = action.payload.total
            state.searchValue = action.payload.searchValue
        },
        setSortData: (state, action) => {
            state.sortElement = action.payload.sortElement
            state.invoiceData = action.payload.invocieData
        },
        setFilterParms: (state, action) => {
            state.filterValue = action.payload.filterValue
        },
        setFilterData: (state, action) => {
            state.PageData = action.payload.data
            state.page = action.payload.page
            state.take = action.payload.take
            state.total = action.payload.total
            state.searchValue = action.payload.searchValue
        },
    },
})

// billingSlice
export default billingSlice.reducer

// actions
export const { startLoading, hasError } = billingSlice.actions

// -----------------------------------------------------------------
export const runFilters = ({ page, take, sort }: any) => {
    return async () => {
        const { invoiceData, searchValue, filterValue = [] } = store.getState().billing;
        let filteredData: any = []
        if (sort) {
            const dm = JSON.parse(JSON.stringify(invoiceData))
            filteredData = sortArray(dm, sort.eleName, sort.dr)
            dispatch(billingSlice.actions.setSortData({ invocieData: filteredData, sortElement: sort.eleName }))
        }
        const con = getFilterConditons(filterValue);
        if (con == "" || con == null) {
            filteredData = searchArray(invoiceData, searchValue)
        } else {
            filteredData = searchArray(invoiceData, searchValue).filter((f: any) => {
                return eval(con)
            })
        }
        const d = {
            data: filteredData.slice((page - 1) * take, (page * take)),
            page: page,
            take: take,
            total: filteredData.length,
            searchValue: searchValue
        }
        dispatch(billingSlice.actions.setFilterData(d))
        setUlrParms(page, take)

    }
}


export const loadInvoices = (parms: any) => {
    return async () => {
        try {
            const { data } = await billing.loadInvoices(parms)
            const d = data.result_data.Invoices
            if (data) {
                dispatch(billingSlice.actions.loadInvoices({ data: d }))
                const pg = getPageParms(d.length)
                dispatch(ChangePageBilling(pg.curr, pg.take))
            } else {
                dispatch(billingSlice.actions.hasError())
                dispatch(billingSlice.actions.loadInvoices({ data: [] }))
                dispatch(billingSlice.actions.setpageData({ data: [], page: 1, take: 10 }))
            }
            return d
        } catch (error) {
            dispatch(billingSlice.actions.hasError())
            dispatch(billingSlice.actions.loadInvoices({ data: [] }))
            dispatch(billingSlice.actions.setpageData({ data: [], page: 1, take: 10 }))
        }
    }
}
export const viewInvoice = (id: any) => {
    return async () => {
        try {
            const response = await billing.viewInvoice(id)
            const d = response.data.Invoices
            if (response) {
                dispatch(billingSlice.actions.loadInvoices({ data: d }))
                const pg = getPageParms(d.length)
                dispatch(ChangePageBilling(pg.curr, pg.take))
            } else {
                dispatch(billingSlice.actions.hasError())
                dispatch(billingSlice.actions.loadInvoices({ data: [] }))
                dispatch(billingSlice.actions.setpageData({ data: [], page: 1, take: 10 }))
            }
            return d
        } catch (error) {
            dispatch(billingSlice.actions.hasError())
            dispatch(billingSlice.actions.loadInvoices({ data: [] }))
            dispatch(billingSlice.actions.setpageData({ data: [], page: 1, take: 10 }))
        }
    }
}
export const downloadBillingInvoice = (data: any) => {
    dispatch(billingSlice.actions.startLoading())
    return async () => {
        const response = await billing.downloadInvoice(data)
        if (response) {
            // window.open(URL.createObjectURL(response.data));
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }
    }
}

export const viewBillingInvoice = (data: any) => {
    dispatch(billingSlice.actions.startLoading())
    return async () => {
        const response = await billing.downloadInvoice(data)
        if (response) {
            window.open(URL.createObjectURL(response.data));
        }
    }
}


export const downloadBillingInvoiceCDR = (data: any) => {
    return async () => {
        const response = await billing.downloadInvoiceCdr(data)
        if (response) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }
    }
}

export const cardFilter = (element: any, value: any) => {
    const { take } = store.getState().billing;
    return async () => {
        const f = [{ element: element, values: [value] }]
        dispatch(billingSlice.actions.setFilterParms({ filterValue: f }));
        dispatch(runFilters({ page: 1, take, sort: false }))
    }
}

export const ChangePageBilling = (page: any, take: any) => {
    return async () => {
        dispatch(runFilters({ page, take, sort: false }))
    }
}

export const searchData = (searchValue: any) => {   
    const { take } = store.getState().billing;
    return async () => {
        dispatch(billingSlice.actions.setSearchData({ searchValue }))
        dispatch(runFilters({ page: 1, take, sort: false }))
    }
}
export const sortData = (Field: any, dr: any) => {
    const { eleName } = Field;
    const { take } = store.getState().billing;
    setUlrParms(1, take)
    return async () => {
        dispatch(runFilters({ page: 1, take, sort: { eleName, dr } }))
    }
}

export const filterData = (element: any, value: any, checked: any) => {
    const { filterValue = [], take } = store.getState().billing;
    let fild = JSON.parse(JSON.stringify(filterValue.filter((e: any) => e.element == element)));
    return async () => {
        let eleFound = false;
        if (fild.length > 0) {
            eleFound = true;
            if (checked == true) {
                fild[0].values.push(value)
            } else {
                fild[0].values.splice(fild[0].values.indexOf(value), 1)
            }
        } else {
            fild = [{ element: element, values: [value] }]
        }
        if (eleFound) {
            const finalObj = JSON.parse(JSON.stringify(filterValue));
            finalObj.filter((e: any) => e.element == element)[0].values = fild[0].values
            dispatch(billingSlice.actions.setFilterParms({ filterValue: finalObj }))
        } else {
            dispatch(billingSlice.actions.setFilterParms({ filterValue: [...filterValue, fild[0]] }))
        }
        dispatch(runFilters({ page: 1, take, sort: false }))
    }
}
