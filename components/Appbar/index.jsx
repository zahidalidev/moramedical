import {
  AppBar, Box, Button, Toolbar,
} from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { adminMenus, userMenus } from 'utils/constants/common'

import styles from './styles.module.scss'

export default () => {
  const router = useRouter()
  const { data: session } = useSession()

  const handleLogout = async () => {
    signOut({ callbackUrl: '/auth/signin' })
  }

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin')
    }
  }, [session])

  function MenuBtn({ item }) {
    return session?.user ? (
      <Button
        className={[styles.appMenu, router.pathname === item.path && styles.activeMenu].join(' ')}
        onClick={() => router.push(item.path)}
        color='inherit'
      >
        {item.name}
      </Button>
    ) : null
  }

  const logoutBtn = (
    <Button className={styles.appMenu} onClick={handleLogout} color='inherit'>
      Logout
    </Button>
  )

  return (
    <Box>
      <AppBar className={styles.appbarBox} position='static'>
        <Toolbar>
          {session?.user.is_admin
            ? adminMenus.map((item) => <MenuBtn key={item.path} item={item} />)
            : userMenus.map((item) => <MenuBtn key={item.path} item={item} />)}
          {session && logoutBtn}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
