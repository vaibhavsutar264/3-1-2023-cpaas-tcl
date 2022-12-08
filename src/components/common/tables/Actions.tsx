import React, { useEffect } from 'react'

import { CSVLink } from 'react-csv'
import { typeVar } from '../../../utils/constants'
import useLocales from '../../../hooks/useLocales'
import Export from '../icons/export'

export const Actions = ({ data, pagination, changeTake }: { data: [], pagination: any, changeTake: any }) => {
    const { t } = useLocales()
    const modifyTake = (e: any) => {
        changeTake(+e.target.value)
    }

    useEffect(() => {
        const l: any = document.getElementById('PageNumberInput');
        l.value = pagination.take;
    })
    const headers = [
        { label: 'Invoice No.', key: 'Invoice_no' },
        { label: 'Customer LE', key: 'Customer_LE' },
        { label: 'Tata Entity', key: 'Tata_Entity' },
        { label: 'PO number', key: 'PO_number' },
        { label: 'Payment Status', key: 'Payment_Status' },
        { label: 'Invoice amt', key: 'Invoice_amt' },
        { label: 'Currency', key: 'Currency' },
        { label: 'Invoice date', key: 'Invoice_date' },
        { label: 'Due date', key: 'Due_date' },
        { label: 'Payment done date & time', key: 'Payment done date & time' },
        { label: 'Time Zone', key: 'Time Zone' },
    ]

    const ExportToCsv = {
        filename: 'InvoicesData.csv',
        headers: headers,
        data: data,
    }

    return (
        <div className="action__elements">
            <div className="action__elementItem">
                <div className="tableRow__show">
                    <div className="selectRow">
                        <select name="" id="PageNumberInput" onChange={modifyTake}>
                            <option value="10">{t<string>('showing')} 10</option>
                            <option value="15">{t<string>('showing')} 15</option>
                            <option value="25">{t<string>('showing')} 25</option>
                        </select>
                    </div>
                    <div className="outOfRow">
                        <span id="results">{t<string>('of')} {pagination.Total} {t<string>('results')}</span>
                    </div>
                </div>
            </div>
            <div className="action__elementItem">{t<string>('datePicker')}</div>
            <div className="action__elementItem">
                <a href="/" className="iconCta">
                    <span className="icon">
                        <Export />
                    </span>
                    <CSVLink {...ExportToCsv} className="text">
                        {t<string>('exportToCsv')}
                    </CSVLink>
                </a>
            </div>
        </div>
    )
}
