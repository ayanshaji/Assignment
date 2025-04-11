import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Home = () => {
    var[crd,setCrd]=useState([]);


    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response.data);
            setCrd(response.data)
    })
    
  return (
    <div>
        <Grid container spacing={2}>
            {crd.map((val)=>{
                return(

            
            <Grid  item xs={12} sm={6} key={val.id}>
         <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={`https://picsum.photos/seed/${val.id}/300/140`}
                title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
    </Grid>
                )

            })
            
        }

    </Grid>
      
        
      
    </div>
  )
}

export default Home
