import { useEffect, useState } from 'react'
import { SideBar } from '../common/elements/SideBar'
import DataTable from '../common/tables/DataTables'
import { BreadCrums } from '../common/elements/BreadCrum'
import { InfoCard } from '../common/elements/InfoCard'
import { PageSearch } from '../common/elements/PageSearch'
import { breadCrums, dataTables } from '../../utils/constants'
import {
  useDispatch as useAppDispatch,
  useSelector
} from '../../redux/store'
import { ChangePageBilling, loadInvoices, searchData, sortData } from '../../redux/slices/billingSlice'

export const Billing = () => {
  const { isError, isLoading, isSuccess, PageData = [], invoiceData = [], total, page, take } = useSelector((state: any) => state.billing);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadInvoices({ searchValue: "" }))
  }, [])

  return (
    <div className="dashboard__wrapper">
      <SideBar />
      <div className="dashboard__content">
        <div className="content__header">
          <BreadCrums data={breadCrums.BILLING} />
          <PageSearch searchFn={searchData} />
        </div>
        <InfoCard />
        <DataTable
          pageAction={ChangePageBilling}
          sortAction={sortData}
          Total={total}
          page={page}
          take={take}
          TableData={dataTables.BILLING(PageData)} />
      </div>
    </div>
  )
}

export default Billing



