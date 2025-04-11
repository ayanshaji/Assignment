import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>

      <h1  style={{color:'darkblue'}}><b> Add Blog links</b></h1>

            
             <TextField id='outlined-basic' label='Blog Name' varient='outlined'/><br></br>
             <br></br>
             <TextField id='outlined-basic' label='Author Name' varient='outlined'/><br></br>
             <br></br>
             <TextField id='outlined-basic' label='Description' varient='outlined'/><br></br>
             <br></br>
             <Button color='error' variant="outlined" >Submit</Button>
             
             
    </div>
  )
}

export default Add
