import React from 'react'
import { Avatar, Box, Button, Typography, Container } from '@mui/material'
import { user } from '../helpers/Items'
import { Link } from 'react-router-dom'

interface UserProfileProps {
  userName: string
  email: string
  avatarUrl: string
  onEditProfile: () => void
  onLogout: () => void
}

  const Profile: React.FC<UserProfileProps> = ({ onEditProfile, onLogout }) => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
        {
            user.map((userInfo) => (
                <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={userInfo.avatarUrl}
          alt={userInfo.userName}
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="h5" component="h1">
          {userInfo.userName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {userInfo.email}
        </Typography>
        <Box mt={3} mb={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={onEditProfile}
            sx={{ mb: 2 }}
          >
            Изменить информацию
          </Button>
          <br/>
          <Button component={Link} to='/' variant="outlined" color="secondary" onClick={onLogout}>
            Выйти
          </Button>
        </Box>
      </Box>
            ))
        }
      
   </Container>
  )
}

export default Profile

