import { useEffect, useState } from 'react'
import RaiseTicket from '../common/elements/RaiseTicket'
import { SideBar } from '../common/elements/SideBar'
import DataTable from '../common/tables/DataTables'
import { BreadCrums } from '../common/elements/BreadCrum'
import { PageSearch } from '../common/elements/PageSearch'
import { breadCrums, dataTables } from '../../utils/constants'
import {
    useDispatch as useAppDispatch,
    useSelector
} from '../../redux/store'
import { cardFilter, ChangePageBilling, downloadBillingInvoice, downloadBillingInvoiceCDR, filterData, loadInvoices, searchData, sortData } from '../../redux/slices/billingSlice'
import useLocales from '../../hooks/useLocales'
import Invoice from '../common/icons/invoice'
import Overdue from '../common/icons/overdue'
import PaidInvoice from '../common/icons/paidInvoice'
import UnpaidInvoice from '../common/icons/unpaidInvoice'
import Card from '../common/elements/card'
import { getCardCount } from '../../utils/helpers'
import { getAcDetails } from '../../redux/slices/accountSlice'

export const Dashboard = ({ toggleTheme }: { toggleTheme: any }) => {

    const { isError, isLoading, isSuccess, PageData = [], MasterData = [], total, page, take } = useSelector((state: any) => state.billing);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadInvoices({ searchValue: "" }))
        dispatch(getAcDetails())
    }, [dispatch])
    const { t } = useLocales()


    const [showIt, setShowIt] = useState(false);
    const handleShow = () => {
        setShowIt(!showIt);
    };

    const [bDWidth, setBDWidth] = useState('300px');
  const handleBDWidth = () => {
    const currentWidth = bDWidth == '300px'? '180px' : '300px';
    setBDWidth(currentWidth);
  };


    return (
        <div className="dashboard__wrapper">
            <SideBar toggleTheme={toggleTheme} handleBDWidth={handleBDWidth} />
            <div className="dashboard__content" style={{ width: `calc(100% - ${bDWidth})`, marginLeft: `${bDWidth}` }}>
                <div>
                    <h1>Welcome to Dashboard</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
