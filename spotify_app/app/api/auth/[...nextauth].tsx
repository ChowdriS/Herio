import {LOGIN_URL} from '../../../lib/spotify'
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: "cf8226e47f044dda9783369518711821",
            clientSecret: "614a8e52d3ea45a0853b0333d40d515c",
            authorization: LOGIN_URL,
        })
    ],
    secret:process.env.JWT_SECRET,
    pages:{
        signIn:'/login'
    },
    callbacks: {
        async jwt({ token, account, user }){
            //initial signin
            if(account && user){
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000,
                }
            }
            if(Date.now() < )
        }
    }
})