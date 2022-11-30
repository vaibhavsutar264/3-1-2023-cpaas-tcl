import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  //we will provide a spinner over here, at present for showing purpose we kept loading word only
  return (
    <>
      <CircularProgress disableShrink />
    </>
  )
}

export default Loading
