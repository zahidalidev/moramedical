import Image from 'next/image'
import {
  signIn, getCsrfToken, getProviders, useSession,
} from 'next-auth/react'
import { LoadingModal } from 'components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import styles from '../../styles/Signin.module.scss'

const Signin = ({ providers }) => {
  const { callbackUrl } = useRouter().query
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) router.push('/events')
  }, [session])

  return session ? <LoadingModal show /> : (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <Image
            src='/images/katalog_full.svg'
            width='196px'
            height='64px'
            alt='App Logo'
            style={{ height: '85px', marginBottom: '20px' }}
          />
          <div className={styles.cardContent}>
            {providers && Object.values(providers).map((provider) => (
              <div key={provider.name} style={{ marginBottom: 0 }}>
                <button type='submit' onClick={() => signIn(provider.id, { callbackUrl })}>
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src='/images/login_pattern.svg'
        alt='Pattern Background'
        layout='fill'
        className={styles.styledPattern}
      />
    </div>
  )
}

export default Signin

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: {
      providers,
      csrfToken,
    },
  }
}
