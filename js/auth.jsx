import { h, Fragment, render, Component } from "preact";
import { State } from "./state";
import { generateRandomString, generateCodeChallenge } from "./utils";
const clientId = "6c33c75c94c44805bcf8fee81d8c9fa5";
const redirectUri = window.location.href.replace(/\/$/, "");
console.log(window.location.href);
const spotifyEndpoint = "https://api.spotify.com/v1";
const spotifyAuthUrl = "https://accounts.spotify.com/authorize";

class Auth extends Component {
  async update() {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");

    const savedCodeVerifier = localStorage.getItem("code-verifier");

    if (authorizationCode) {
      // Remove the code from the URL
      urlParams.delete("code");
      urlParams.delete("state");
      let query = urlParams.toString();
      if (query.length > 0) {
        query = `?${query}`;
      }
      const newUrl = `${window.location.pathname}${query}`;
      window.history.replaceState({}, document.title, newUrl);

      // Exchange the authorization code and code verifier for an access token
      const tokenParams = new URLSearchParams({
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: savedCodeVerifier,
      });
      const tokenUrl = "https://accounts.spotify.com/api/token";

      fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: tokenParams.toString(),
      })
        .then((response) => response.json())
        .then((data) => {
          // Save the access token to local storage or a cookie
          if (data.error) {
            console.log("ERROR", data);
            localStorage.removeItem("spotifyAccessToken");
          } else {
            State.update((s) => {
              localStorage.setItem("spotifyAccessToken", data.access_token);
              s.spotifyAccessToken = data.access_token;
            });
          }
        })
        .catch((error) => console.error(error));
    }

    const spotifyAccessToken = localStorage.getItem("spotifyAccessToken");
    if (spotifyAccessToken) {
      State.update((s) => {
        s.spotifyAccessToken = spotifyAccessToken;
      });
    }
  }
  componentDidMount() {
    this.update();
  }
  async goToSpotifyOauthPage() {
    const codeVerifier = generateRandomString();
    // const codeChallenge = b64encode(await sha256(codeVerifier));
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const authParams = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: redirectUri,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      scope:
        "user-read-private playlist-read-private playlist-modify-private playlist-modify-public playlist-read-collaborative user-read-recently-played user-library-read",
    });
    const authUrl = `${spotifyAuthUrl}?${authParams.toString()}`;

    // Redirect the user to the Spotify authorization page
    localStorage.setItem("code-verifier", codeVerifier);
    window.location.href = authUrl;
  }
  logout() {
    State.update((s) => {
      localStorage.clear();
      s.spotifyAccessToken = null;
    });
    window.location.reload();
  }
  render() {
    const spotifyAccessToken = State.useState((s) => s.spotifyAccessToken);
    const login = (
      <button class="mr-2" onClick={this.goToSpotifyOauthPage}>
        Log in with Spotify
      </button>
    );
    const logout = (
      <button class="mr-2" onClick={this.logout}>
        Log out
      </button>
    );
    return (
      <div>
        {spotifyAccessToken ? logout : login}
        <button
          onClick={() => {
            for (let i = 0, len = localStorage.length; i < len; ++i) {
              let key = localStorage.key(i);
              if (key === "spotifyAccessToken") {
                continue;
              }
              localStorage.removeItem(key);
            }
          }}
        >
          Clear Cache
        </button>
      </div>
    );
  }
}

module.exports = Auth;
