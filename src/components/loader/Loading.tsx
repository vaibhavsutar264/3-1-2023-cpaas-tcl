import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import useLocales from '../../hooks/useLocales'

const Loading = () => {
  const { t } = useLocales()
  return (
    <div className="preloader">
      <CircularProgress disableShrink />
    </div>
  )
}

export default Loading

