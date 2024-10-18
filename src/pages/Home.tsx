import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'

interface Item {
  id: number
  name: string
  price: number
  imageUrl: string
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 6
  
  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:5000/items?page=${page}&limit=${itemsPerPage}`)
        const data = await response.json()
        
        setItems(data.items)
        setTotalPages(Math.ceil(data.total / itemsPerPage))
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    };

    fetchItems()
  }, [page])


const onChangePage = (value) => {
  setPage(value)
}


  return (
    <Box>
    <div style={{ 
      width: '100%', 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 300px)', 
      gap: '20px', 
      textAlign: 'justify', 
      justifyContent: 'space-evenly'
       }}>
      {items.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, margin: '20px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={item.imageUrl}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.price} p.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      </div>
      <Box>
      <Pagination 
      count={totalPages} 
      page={page} 
      onChange={onChangePage}
      variant="outlined" 
      color="primary" 
      sx={{mt: '20px', mb: '40px'}}/>
      </Box>
    </Box>
  );
}

export default Home