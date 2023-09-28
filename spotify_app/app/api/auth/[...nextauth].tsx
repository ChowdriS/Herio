import {LOGIN_URL} from '../../../lib/spotify'
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: "c442271d70e34e2b8c4fdd6b27c72df9",
            clientSecret: "f1600a4312714d45a90c6e1e8edf6715",
            authorization: LOGIN_URL
        })
    ],
})