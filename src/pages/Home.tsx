import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { items } from '../helpers/Items';

const Home: React.FC = () => {
  return (
    <div style={{width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gridTemplateRows:'1fr 1fr 1fr', gap:'1vw', textAlign: 'center' }}>
    {
        items.map((cardObj) => (
            <Card key={cardObj.id} sx={{ maxWidth: 345, margin: '20px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={cardObj.imageUrl}
                alt="coffee"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cardObj.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {cardObj.price} p.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>   
        ))
    }
    </div>
  )
}

export default Home
