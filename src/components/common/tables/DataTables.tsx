import { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import { tableCellClasses } from '@mui/material/TableCell'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import useLocales from '../../../hooks/useLocales'
import Time from '../icons/Time'
import Pdf from '../icons/Pdf'
import Ticket from '../icons/ticket'
import Download from '../icons/download'
import { Actions } from './Actions'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { getPageParms, setUlrParms } from '../../../utils/helpers'
import { useDispatch as useAppDispatch } from '../../../redux/store'


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
  Total,
  pageAction,
  take,
  page
}: { take: any, page: any, TableData: any, Total: any, pageAction: any }) => {
  const { t } = useLocales();
  const { data, columns, tableName } = TableData
  const dispatch = useAppDispatch();
  const totalCount = Math.ceil(Total / take)

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
    console.log(head);
  }

  return (
    <>
      <Actions pagination={{ take, Total }} changeTake={(e: any) => { changeTake(e) }} />
      <TableContainer component={Paper} className="table__Container">
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead className="TableHead">
            <TableRow  >
              <StyledTableCell><MoreVertIcon /> </StyledTableCell>

              {/* Table Heads */}
              {columns.map((head: any) => {
                return <StyledTableCell key={head.headTrans} align="right">
                  <div id={head.headTrans}  className="th_wrapper">
                    <span>{t<string>(`tables.${tableName}.${head.headTrans}`)}</span>
                    <span> <UnfoldMoreIcon /> </span>
                    <span><KeyboardArrowDownIcon /></span>
                    <span><KeyboardArrowUpIcon /></span>
                  </div>
                </StyledTableCell>
              })}

              <StyledTableCell align="right">
                <div className="th_wrapper">
                  <span>&nbsp;</span>
                </div>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody className="TableBody">
            {data.map((item: any, index: any) => (
              <TableRow key={`${item.id}${index}`}>
                <TableCell component="th" scope="row"> <a href="/"><Time /></a> </TableCell>
                {columns.map((clm: any, ind: any) => <TableCell key={`ZXC${ind}`} style={{ width: 160 }} align="right">{item[clm.eleName]} </TableCell>)}
                <TableCell style={{ width: 160 }} align="right">
                  <ul className="actionButtons">
                    <li className="actionButton__item"><a href="/"><Pdf /></a></li>
                    <li className="actionButton__item"><a href="/"><Ticket /></a></li>
                    <li className="actionButton__item"><a href="/"><Download /></a></li>
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
