import CredentialsProvider from 'next-auth/providers/credentials';

export  const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {
              console.log(credentials.username)
              console.log(credentials.password)
  
              return {
                  id: "user1",
                  name:"Vedant joshi",
                  email: credentials.username,
                  password: credentials.password,
                  toreturn:"bniubguygvuyfguyt"
              };
          },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks : {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
            },
      session: ({session,token,user}: any) => {
              console.log(session)
              if(session && session.user) {
                session.user.id = token.sub
              }

              return token
      }
    },
    pages: {
        signIn : "/signin"
    }
    
  }