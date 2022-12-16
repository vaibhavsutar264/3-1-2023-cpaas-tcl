import React, { useState, useEffect, SyntheticEvent } from 'react'
import Table from '@mui/material/Table'
import { IconButton, Menu, MenuItem, ListItemIcon, Tooltip, ClickAwayListener } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import useLocales from '../../../hooks/useLocales'
import Time from '../icons/time'
import Pdf from '../icons/pdf'
import Ticket from '../icons/ticket'
import Download from '../icons/download'
import { Actions } from './Actions'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { getPageParms, setUlrParms } from '../../../utils/helpers'
import { useDispatch as useAppDispatch } from '../../../redux/store'
import { Link } from 'react-router-dom'
import MultiSelect from '../elements/multiSelect'
import { apiVrbls } from '../../../utils/constants';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const DataTable = ({
    TableData,
    sortAction,
    Total,
    pageAction,
    take,
    filterAction,
    page,
    handleShow,
    handledownloadPdf,
    handledownloadViewpdf
}: any) => {
    const { t } = useLocales()
    const { data, columns, tableName } = TableData
    const dispatch = useAppDispatch();
    const totalCount = Math.ceil(Total / take)
    const [sortdir, setSortdir]: any = useState(null)

    const changeTake = (take: any) => {
        updateData(page, take)
    }

    const changePage = (da: any, pageNumber: any) => {
        updateData(pageNumber, take)
    }

    const updateData = (page: any, take: any) => {
        dispatch(pageAction(page, take))
        setUlrParms(page, take)
    }
    const sort = (head: any) => {
        if (head.sort) {
            dispatch(sortAction(head, sortdir === -1 ? 1 : -1));
            setSortdir(sortdir === -1 ? 1 : -1)
        }

    }

    const handleDownload = (data: any) => {
        dispatch(handledownloadPdf(data))
    }

    const handleViewPdf = (data: any) => {
        dispatch(handledownloadViewpdf(data))
    }

    // Vertical Dropdown code
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle Tooltip closing & opening
    const [opened, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    

    const [invoiceState, setInvoiceState] = useState<boolean>(true);

    const handleInvoice = (e: SyntheticEvent) => {
        const invoiceIdHeadElement = document.getElementsByName('Invoice Id')[0]
        invoiceIdHeadElement.style.display = invoiceState? 'block': 'none'
        setInvoiceState(!invoiceState);
    };

    const [customerState, setCustomerState] = useState<boolean>(true);

    const handleCustomer = (e: SyntheticEvent) => {
        const customerIdHeadElement = document.getElementsByName('CUSTOMER LE')[0]
        customerIdHeadElement.style.display = customerState? 'block': 'none'
        setCustomerState(!customerState);
    };

    const [entityState, setEntityState] = useState<boolean>(true);

    const handleEntity = (e: SyntheticEvent) => {
        const entityIdHeadElement = document.getElementsByName('ENTITY')[0]
        entityIdHeadElement.style.display = entityState? 'block': 'none'
        setEntityState(!entityState);
    };

    const [poState, setPoState] = useState<boolean>(true);

    const handlePo = (e: SyntheticEvent) => {
        const poIdHeadElement = document.getElementsByName('PO NO.')[0]
        poIdHeadElement.style.display = poState? 'block': 'none'
        setPoState(!poState);
    };

    const [statusState, setStatusState] = useState<boolean>(true);

    const handleStatus = (e: SyntheticEvent) => {
        const statusIdHeadElement = document.getElementsByName('STATUS')[0]
        statusIdHeadElement.style.display = statusState? 'block': 'none'
        setStatusState(!statusState);
    };

    const [amountState, setAmountState] = useState<boolean>(true);

    const handleAmount = (e: SyntheticEvent) => {
        const amountIdHeadElement = document.getElementsByName('INVOICE AMOUNT')[0]
        amountIdHeadElement.style.display = amountState? 'block': 'none'
        setAmountState(!amountState);
    };

    const [invoiceIssueState, setInvoiceIssueState] = useState<boolean>(true);

    const handleInvoiceIssue = (e: SyntheticEvent) => {
        const invoiceIssueIdHeadElement = document.getElementsByName('INVOICE ISSUED DATE')[0]
        invoiceIssueIdHeadElement.style.display = invoiceIssueState? 'block': 'none'
        setInvoiceIssueState(!invoiceIssueState);
    };

    const [dueState, setDueState] = useState<boolean>(true);

    const handleDue = (e: SyntheticEvent) => {
        const dueIdHeadElement = document.getElementsByName('DUE DATE')[0]
        dueIdHeadElement.style.display = dueState? 'block': 'none'
        setDueState(!dueState);
    };

        const blank2CheckoutElement = document.getElementsByName('Invoice Id')[0]
        console.log(blank2CheckoutElement)
    return (
        <>
            <Actions data={data} pagination={{ take, Total }} changeTake={(e: any) => { changeTake(e) }} />
            <p data-testid="para-element"></p>
            <TableContainer
                component={Paper}
                className="table__Container"
            >
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead className="TableHead">
                        <TableRow id="table-head">
                            <StyledTableCell>
                                <IconButton 
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{
                                        position: 'relative',
                                    }}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                      }}
                                      transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                      }}
                                >
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleInvoice} id="checkbox" fontSize='small' style={ {display: invoiceState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleInvoice} fontSize='small' id='checkbox-blank' style={ {display: invoiceState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: invoiceState?'#303030':'#bbb' }}>Invoice Number</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleCustomer} id="checkbox-customer" fontSize='small' style={ {display: customerState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleCustomer} fontSize='small' id='checkbox-blank-customer' style={ {display: customerState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: customerState?'#303030':'#bbb' }}>Customer LE</span></MenuItem>
                                    <MenuItem>
                                    <ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleEntity} id="checkbox-entity" fontSize='small' style={ {display: entityState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleEntity} fontSize='small' id='checkbox-blank-entity' style={ {display: entityState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: entityState?'#303030':'#bbb' }}>Entity</span></MenuItem>
                                    <MenuItem><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handlePo} id="checkbox-po" fontSize='small' style={ {display: poState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handlePo} fontSize='small' id='checkbox-blank-po' style={ {display: poState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: poState?'#303030':'#bbb' }}>PO No.</span></MenuItem>
                                    <MenuItem><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleStatus} id="checkbox-status" fontSize='small' style={ {display: statusState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleStatus} fontSize='small' id='checkbox-blank-status' style={ {display: statusState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: statusState?'#303030':'#bbb' }}>Status</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleAmount} id="checkbox-invoice-amount" fontSize='small' style={ {display: amountState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleAmount} fontSize='small' id='checkbox-blank-invoice-amount' style={ {display: amountState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: amountState?'#303030':'#bbb' }}>Invoice Amount</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleInvoiceIssue} id="checkbox-invoice-issue" fontSize='small' style={ {display: invoiceIssueState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleInvoiceIssue} fontSize='small' id='checkbox-blank-invoice-issue' style={ {display: invoiceIssueState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: invoiceIssueState?'#303030':'#bbb' }}>Invoice Issued Date</span></MenuItem>
                                    <MenuItem ><ListItemIcon>
                                        {/* <Logout fontSize="small" /> */}
                                        <DragIndicatorIcon fontSize='small' />
                                        <CheckBoxIcon onClick={handleDue} id="checkbox-due-date" fontSize='small' style={ {display: dueState?'block':'none' }} />
                                        {/* remove above icon and use below icon for when user unchecks the option */}
                                        <CheckBoxOutlineBlankIcon onClick={handleDue} fontSize='small' id='checkbox-blank-due-date' style={ {display: dueState?'none':'block' }} />
                                    </ListItemIcon><span style={ {color: dueState?'#303030':'#bbb' }}>Due Date</span></MenuItem>
                                </Menu>
                            </StyledTableCell>

                            {/* Table Heads */}
                            {columns.map((head: any, index: any) => (
                                <StyledTableCell key={`${head.headTrans}${index}`} align="right">
                                    <div className="th_wrapper">
                                        <button id='hiding' name={t<string>(`tables.${tableName}.${head.headTrans}`)} className='voidBtn' onClick={sort.bind(null, head)} key={`clickkey-${head.headTrans}${index}`} >
                                            {t<string>(`tables.${tableName}.${head.headTrans}`)}
                                        </button>
                                        <span>
                                            {' '}
                                            {head && head.filter ? <MultiSelect filterAction={filterAction} filterData={head.filterData} id={`filter-${head.headTrans}${index}`} /> : null}
                                            {' '}
                                        </span>
                                    </div>
                                </StyledTableCell>
                            ))}

                            <StyledTableCell align="right">
                                <div className="th_wrapper">
                                    <span>&nbsp;</span>
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {/* Table Body */}
                    <TableBody data-testid="table-body-element" className="TableBody" data->
                        {data && data.map((item: any, index: any) => (
                            <TableRow id="table-data" key={item.id}>
                                <TableCell component="th" scope="row">
                                    {' '}
                                    <a href="/">
                                        <Time />
                                    </a>{' '}
                                </TableCell>
                                {columns.map((clm: any, index: any) => (
                                    <TableCell key={`tbl-clm${index}`} style={{ width: 160 }} align="right">
                                        {item[clm.eleName]}{' '}
                                    </TableCell>
                                ))}
                                <TableCell style={{ width: 160 }} align="right">
                                    <ul className="actionButtons">
                                    <Tooltip title="RAISE A TICKET">
                                    <button className="actionButton__item" onClick={(e) => { handleShow() }}>
                                    <span><Ticket /></span>
                                    </button>
                                    </Tooltip>
                                    <Tooltip title="VIEW INVOICE">
                                    <button className="actionButton__item" onClick={() => handleViewPdf(item)}>
                                    <span> <Pdf /> </span>
                                    </button>
                                    </Tooltip>
                                    <Tooltip title="DOWNLOAD">
                                        <button className="actionButton__item" onClick={() => handleDownload(item)} >
                                            <span><Download /></span>
                                        </button>
                                    </Tooltip>
                                    </ul>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack
                spacing={3}
                sx={{
                    marginTop: 3,
                }}
            >
                <Pagination onChange={changePage} page={page} className="tablePag" count={totalCount} variant="outlined" shape="rounded" />
            </Stack>
        </>
    )
}

export default DataTable
