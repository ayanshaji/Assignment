import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NabBar = () => {
  return (
    <div>

      <AppBar>
            <Toolbar>
                <Typography variant='hs'>My app</Typography> &nbsp;
                <Link to='/add'> &nbsp;
                <Button color='error' variant="outlined" >Add</Button>
                </Link>&nbsp;

                <Link to='/home'> &nbsp;
                <Button color='error' variant="outlined" >Home</Button>
                </Link>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NabBar
