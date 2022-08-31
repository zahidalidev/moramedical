import {
  AppBar, Box, Button, Toolbar,
} from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { menu } from 'utils/constants/common'

import styles from './styles.module.scss'

export default () => {
  const router = useRouter()
  const { data: session } = useSession()

  const handleLogout = async () => {
    signOut()
  }

  useEffect(() => {
    if (!session) {
      router.push('/auth/login')
    }
  }, [])

  return (
    <Box>
      <AppBar className={styles.appbarBox} position='static'>
        <Toolbar>
          {menu.map((item) => (
            <Button
              key={item.name}
              className={styles.appMenu}
              onClick={() => router.push(item.path)}
              color='inherit'
            >
              {item.name}
            </Button>
          ))}
          <Button className={styles.appMenu} onClick={handleLogout} color='inherit'>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
