import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector } from '../../../redux/store';
import { dataTables } from '../../../utils/constants';
import Download from '../icons/download';
import Pdf from '../icons/Pdf';
import Ticket from '../icons/ticket';
import Time from '../icons/Time';
const Invoice = (TableData: any) => {
  const { isError, isLoading, isSuccess, PageData = [], invoiceData = [], total, page, take } = useSelector((state: any) => state.billing);
    const { data, columns, tableName } = dataTables.BILLING(PageData)
    const { id } = useParams();
  return (
    <div>
    {data && data.filter((item : any)=> item.id == id ).map((item: any, index: any) => (
    
    <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {' '}
                  <a href="/">
                    <Time />
                  </a>{' '}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.Invoice_no}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.Customer_LE}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.Tata_Entity}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.PO_number}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.Payment_Status}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.Invoice_amt}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.Invoice_date}
                </TableCell>
                <TableCell component="th" scope="row">
                {item.Due_date}
                </TableCell>
              </TableRow>
              ))}
    </div>
  )
}

export default Invoice
