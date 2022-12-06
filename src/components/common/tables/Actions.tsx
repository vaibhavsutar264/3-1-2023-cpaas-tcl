import React, { useEffect } from 'react'

import { CSVLink } from 'react-csv'
import { typeVar } from '../../../utils/constants'
import useLocales from '../../../hooks/useLocales'

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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            type={typeVar.IMAGE_SVG}
                            width="15.556"
                            height="15.5"
                            viewBox="0 0 15.556 15.5"
                        >
                            <g
                                id="Group_168472"
                                data-name="Group 168472"
                                transform="translate(-1184.1 -638.75)"
                            >
                                <path
                                    id="Path_13745"
                                    data-name="Path 13745"
                                    d="M250.443,57.1v-.131l-.037-.075-.037-.056-.094-.112h-.019l-.112-.094-.056-.037-.075-.037h-4.625a.749.749,0,0,0,0,1.5H247.9l-8.446,8.389a.755.755,0,0,0,1.067,1.067l8.446-8.446v2.509a.749.749,0,0,0,1.5,0V57.27a.747.747,0,0,0-.019-.169Z"
                                    transform="translate(948.945 582.441)"
                                    fill="#d63548"
                                    stroke="#d63548"
                                    strokeWidth="0.5"
                                />
                                <path
                                    id="Path_13746"
                                    data-name="Path 13746"
                                    d="M127.129,154.372h7.64a2.247,2.247,0,0,0,2.247-2.247v-3.577a.749.749,0,0,0-1.5,0v3.577a.749.749,0,0,1-.749.749h-7.64a.749.749,0,0,1-.749-.749v-7.64a.749.749,0,0,1,.749-.749h3.577a.749.749,0,0,0,0-1.5h-3.577a2.247,2.247,0,0,0-2.247,2.247v7.64a2.247,2.247,0,0,0,2.247,2.247Z"
                                    transform="translate(1059.469 499.628)"
                                    fill="#d63548"
                                    stroke="#d63548"
                                    strokeWidth="0.5"
                                />
                            </g>
                        </svg>
                    </span>
                    <CSVLink {...ExportToCsv} className="text" data-testid='csv-link'>
                        {t<string>('exportToCsv')}
                    </CSVLink>
                </a>
            </div>
        </div>
    )
}
