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

export const PageSearch = ({ searchFn }: { searchFn: any }) => {
    const { t } = useLocales();
    const [searchValue, setSearchValue] = useState("");
    // const [data, setData] = useState<any[]>([]);
    const handleSearch = async () => {
        // searchFn()
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            {t<string>('dashboard')}
        </Link>,
        <Typography key="3" color="text.primary">
            {t<string>('billingInvoices')}
        </Typography>,
    ]
    return (
        <div className="">
            <div className="right__elementsItem search__group">
                <Paper
                    component="form"
                    className="search__form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 350,
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={t<string>('searchProductsOrdersAndClients')}
                        inputProps={{
                            'aria-label': 'Search Products, Orders and Clients',
                        }}
                        type="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <IconButton onClick={handleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    )
}
