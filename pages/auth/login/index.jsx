import {
  Box, Button, Paper, Typography,
} from '@mui/material'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

import styles from './styles.module.scss'

const Login = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className={styles.container}>
        Welcome user
        <br />
        <Button onClick={() => signOut()} className={styles.button} size='large' variant='contained'>Sign out</Button>
      </div>
    )
  }

  return (
    <Box className={[styles.container, styles.centerFlex].join(' ')}>
      <Paper elevation={3} className={[styles.paper, styles.centerFlex].join(' ')}>
        <Typography className={styles.heading} variant='h3'>
          Login
        </Typography>
        <Button onClick={() => signIn()} className={styles.button} size='large' variant='contained'>
          <Image src='/images/google.png' alt='google' width='30' height='30' />
          Continue with Google
        </Button>
      </Paper>
    </Box>
  )
}

export default Login
