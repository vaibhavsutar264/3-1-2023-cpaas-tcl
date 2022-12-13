import React from 'react'
import {Box, Grid} from '@mui/material'

import BillingAvatar from './BillingComponents/BillingAvatar'
import BillingContact from './BillingComponents/BillingContact'
import BillingDetail from './BillingComponents/BillingDetail'
import BillingInvoice from './BillingComponents/BillingInvoice'
import { SideBar } from '../common/elements/SideBar'


const BillingDetails = ({ toggleTheme }: { toggleTheme: any }) => {
  return (
    <>
      <SideBar toggleTheme={toggleTheme} />
    <Box className="bd-container">
        <Grid className="bd-inner-container" container columns={{sm:8, md: 12}}>

            <Grid className="bd-single-container"  item container columnSpacing={5} columns={12} sm={12} md={12}>

                <Grid item xs={4}>
                <BillingAvatar />
                </Grid>

                <Grid item xs={8}>
                <BillingDetail />
                </Grid>

            </Grid>

            <Grid className="bd-single-container" item container columnSpacing={5} columns={12} sm={12} md={12}>

                <Grid item xs={4}>
                <BillingContact />
                </Grid>

                <Grid item xs={8}>
                <BillingInvoice />
                </Grid>

            </Grid>

        </Grid>
    </Box>
    </>
  )
}

export default BillingDetails;