import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useLocales from '../../hooks/useLocales'

const Loading = () => {
  const { t } = useLocales()
  //we will provide a spinner over here, at present for showing purpose we kept loading word only
  return (
    <div className="preloader">
      <CircularProgress disableShrink />
    </div>
  )
}

export default Loading
