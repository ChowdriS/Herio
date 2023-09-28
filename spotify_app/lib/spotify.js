import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-playing",
    "user-follow-read",

].join(',')

const params ={
    scope: scopes,
}

const queryParamString = new URLSearchParams(params)

const LOGIN_URL ="https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
    clientId: "c442271d70e34e2b8c4fdd6b27c72df9",
    clientSecret: "f1600a4312714d45a90c6e1e8edf6715",
})

export default spotifyApi

export {LOGIN_URL}