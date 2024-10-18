import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent) => {
    if(!username || !password) {
      setError('The username and password cannot be empty')
      return
    }
    const url = 'http://localhost:5000/auth/login'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json()

    if (!response.ok) {
      setError(data.message || 'Error occurred')
    } else {
      setError('')
      localStorage.setItem('token', data.token)
      navigate('/profile')
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault()
    const url = 'http://localhost:5000/auth/registration'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()

    if (!response.ok) {
      setError(data.message || 'Registration failed')
    } else {
      setError('Registration successful')
    }
  }

  return (
    <div>
      <h1>Coffee Bar</h1>
      {error && <p style={{ color: 'red', fontSize:'20px', textAlign: 'center' }}>{error}</p>} {}
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        textAlign={'center'}
      >
        <TextField
          id="outlined-basic"
          label="Login"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Stack spacing={2} direction="row" justifyContent={'center'} gap={'100px'} mt={'20px'} mb={'35px'}>
        <Button variant="contained" onClick={handleLogin}>Enter</Button>
        <Button variant="contained" onClick={handleRegister}>Register</Button>
      </Stack>
    </div>
  )
}

export default Login