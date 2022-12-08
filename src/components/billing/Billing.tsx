import { useEffect, useState } from 'react'
import { SideBar } from '../common/elements/SideBar'
import DataTable from '../common/tables/DataTables'
import { BreadCrums } from '../common/elements/BreadCrum'
import { PageSearch } from '../common/elements/PageSearch'
import { breadCrums, dataTables } from '../../utils/constants'
import {
  useDispatch as useAppDispatch,
  useSelector
} from '../../redux/store'
import { cardFilter, ChangePageBilling, filterData, loadInvoices, searchData, sortData } from '../../redux/slices/billingSlice'
import useLocales from '../../hooks/useLocales'
import Invoice from '../common/icons/invoice'
import Overdue from '../common/icons/overdue'
import PaidInvoice from '../common/icons/paidInvoice'
import UnpaidInvoice from '../common/icons/unpaidInvoice'
import Card from '../common/elements/card'
import { getCardCount } from '../../utils/helpers'

export const Billing = ({ toggleTheme }: { toggleTheme: any }) => {
  const { isError, isLoading, isSuccess, PageData = [], MasterData = [], total, page, take } = useSelector((state: any) => state.billing);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadInvoices({ searchValue: "" }))
  }, [])
  const { t } = useLocales()
  const cards = [
    { titel: t('allInvoice'), value: getCardCount(MasterData, 'paymentStatus', ''), icon: <Invoice />, bgcolor: "white", textColor: "#1A73E8", cntColor: '#344857', action: cardFilter("paymentStatus", "") },
    { titel: t('overdue'), value: getCardCount(MasterData, 'paymentStatus', 'overdue'), icon: <Overdue />, bgcolor: "#363f5e", textColor: "white", cntColor: 'white', action: cardFilter("paymentStatus", "overdue") },
    { titel: t('unpaidInvoices'), value: getCardCount(MasterData, 'paymentStatus', 'pending'), icon: <UnpaidInvoice />, bgcolor: "#e54457", textColor: "white", cntColor: 'white', action: cardFilter("paymentStatus", "pending") },
    { titel: t('paidInvoices'), value: getCardCount(MasterData, 'paymentStatus', 'completed'), icon: <PaidInvoice />, bgcolor: "#3DB887", textColor: "white", cntColor: 'white', action: cardFilter("paymentStatus", "completed") },
  ]

  return (
    <div className="dashboard__wrapper">
      <SideBar toggleTheme={toggleTheme} />
      <div className="dashboard__content">
        <div className="content__header">
          <BreadCrums data={breadCrums.BILLING} />
          <PageSearch searchFn={searchData} />
        </div>
        <div className="card-wrapper-1">
          {cards.map((q: any, i: any) => <Card data={q} key={`card-warpper${i}`} />)}
        </div >
        <DataTable
          pageAction={ChangePageBilling}
          sortAction={sortData}
          filterAction={filterData}
          Total={total}
          page={page}
          take={take}
          TableData={dataTables.BILLING(PageData, MasterData)} />
      </div>
    </div>
  )
}

export default Billing



