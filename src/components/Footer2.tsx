import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import Grid from '@mui/system/Grid'

const Footer2: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        p: 6,
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={15}>
          <Grid>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
            An international
            franchise in the "coffee with you" format
            </Typography>
          </Grid>
          <Grid>

            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid>

            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex">
              <Link
                href="https://www.facebook.com/"
                color="inherit"
                sx={{ mr: 1 }}
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ mr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}></Box>
      </Container>
    </Box>
  )
}

export default Footer2