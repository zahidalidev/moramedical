import {
  Box, Button, Paper, Typography,
} from '@mui/material'
// import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import styles from './styles.module.scss'

const Login = () => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) router.push('/events')
  }, [session])

  return (
    <Box className={[styles.container, styles.centerFlex].join(' ')}>
      <Paper elevation={3} className={[styles.paper, styles.centerFlex].join(' ')}>
        <Typography className={styles.heading} variant='h3'>
          Login
        </Typography>
        <Button onClick={() => signIn()} className={styles.button} size='large' variant='contained'>
          {/* <Image src='/images/google.png' alt='google' width='30' height='30' /> */}
          Continue login with
        </Button>
      </Paper>
    </Box>
  )
}

export default Login
