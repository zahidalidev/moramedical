import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_APP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_APP_GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    FacebookProvider({
      clientId: process.env.NEXT_APP_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_APP_FACEBOOK_CLIENT_SECRET,
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.NEXT_APP_SECRET_TOKEN,
  callbacks: {
    async jwt(token, account) {
      const authToken = token
      if (account?.accessToken) {
        authToken.accessToken = account.accessToken
      }
      return authToken
    },
    redirect: async (url) => url.url,
  },
})
