import React from 'react'
import {useRouteError, Link} from "react-router-dom";
import {Box, Typography} from "@mui/material";

interface Props { }

export const NotFound: React.FC<Props> = () => {
  const error: any = useRouteError();
  return (
    <Box>
      <Typography variant='h1'>404</Typography>
      <Typography>Page not found</Typography>
      <Typography>{error.statusText || error.message}</Typography>
        <Link to="/">Home</Link>
    </Box>
  )
}
