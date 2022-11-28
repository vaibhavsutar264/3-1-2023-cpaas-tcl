import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import useLocales from '../../../hooks/useLocales';
import axios from "axios"

export const BreadCrums = ({ data }: { data: any }) => {
    const { t } = useLocales();

    return (
        <div className="content__breadcrum">
            <Stack spacing={2} className="breadcrum-stack">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" >
                    {[
                        data.path.map((ele: any) =>
                            ele.type == 'link' ? <Link underline="hover" key="1" color="inherit" href={ele.linkURL}>
                                {t<string>(ele.transName)} </Link> :
                                <Typography key="3" color="text.primary">{t<string>(ele.transName)}  </Typography>
                        )
                    ]}
                </Breadcrumbs>
            </Stack>
            <h3 className="content_pageTitle">
                {t<string>('billingInvoiceshead')}
            </h3>
        </div>
    )
}
