import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import Users from 'db/models/users'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      authorizationUrl: process.env.NEXT_PUBLIC_AUTHORIZATION_URL,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  jwt: {
    encryption: true,
  },
  secret: process.env.NEXT_PUBLIC_SECRET_TOKEN,
  callbacks: {
    async signIn({ user, account }) {
      return Users.findOne({ where: { email: user.email } })
        .then((res) => {
          const userBody = {
            name: user.name,
            access_token: account.access_token,
            email: user.email,
            image: user.image,
          }
          return res === null
            ? Users.create(userBody)
              .then(() => true)
              .catch(() => false)
            : true
        })
        .catch(() => false)
    },
    async session({ session }) {
      return Users.findOne({ where: { email: session.user.email } }).then(({ dataValues }) => {
        // eslint-disable-next-line no-param-reassign
        session.user.id = dataValues.id
        // eslint-disable-next-line no-param-reassign
        session.user.is_admin = dataValues.is_admin
        return session
      }).catch(() => false)
    },
  },
})
