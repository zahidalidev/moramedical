import {
  Box, Button, Paper, Typography,
} from '@mui/material'
import Image from 'next/image'
import { LoadingModal } from 'components'
import {
  signIn, getProviders, useSession,
} from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import logo from 'public/images/medical.png'
import backgroundImg from 'public/images/login_pattern.svg'
import styles from './styles.module.scss'

const Signin = ({ providers }) => {
  const { callbackUrl } = useRouter().query
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) router.push('/events')
  }, [session])

  return session ? <LoadingModal show /> : (
    <Box className={styles.signinContainer}>
      <Box className={styles.wrapper} />
      <Box className={styles.content}>
        <Paper elevation={4} className={styles.cardWrapper}>
          <Image
            src={logo}
            alt='App Logo'
            width='150px'
            height='140px'
            className={styles.logo}
          />
          <Box className={styles.cardContent}>
            {providers && Object.values(providers).map((provider) => (
              <Box key={provider.name} className={styles.buttonContainer}>
                <Button variant='outlined' size='large' className={styles.socialButtons} onClick={() => signIn(provider.id, { callbackUrl })}>
                  <Image src={`/images/${provider.name}.png`} className={styles.socialLogo} alt='google' width='25' height='25' />
                  <Typography className={styles.providerName}>
                    Sign in with {provider.name}
                  </Typography>
                </Button>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
      <Image
        src={backgroundImg}
        alt='Pattern Background'
        layout='fill'
        className={styles.styledPattern}
      />
    </Box>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default Signin
