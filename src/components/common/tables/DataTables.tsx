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
import MoreVertIcon from '@mui/icons-material/MoreVert'
import useLocales from '../../../hooks/useLocales'
import Time from '../icons/Time'
import Pdf from '../icons/Pdf'
import Ticket from '../icons/ticket'
import Download from '../icons/download'
import { Actions } from './Actions'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const DataTable = ({ TableData }: { TableData: any }) => {
  const { t } = useLocales();
  const { data, columns, tableName } = TableData;

  return (
    <>
      <Actions />
      <TableContainer component={Paper} className="table__Container">
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead className="TableHead">
            <TableRow>
              <StyledTableCell><a href="/"><MoreVertIcon /></a> </StyledTableCell>

              {/* Table Heads */}
              {columns.map((head: any) => <StyledTableCell key={head.headTrans} align="right">
                <div className="th_wrapper">
                  <span>{t<string>(`tables.${tableName}.${head.headTrans}`)}</span>
                  <span> <UnfoldMoreIcon /> </span>
                </div>
              </StyledTableCell>)}

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
              <TableRow key={item.id}>
                <TableCell component="th" scope="row"> <a href="/"><Time /></a> </TableCell>
                {columns.map((clm: any) => <TableCell key={clm} style={{ width: 160 }} align="right">{item[clm.eleName]} </TableCell>)}
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
    </>
  )
}

export default DataTable
