import { State } from "./state";

// Helper function to generate a random string for the code verifier
export function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 128;
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

export async function generateCodeChallenge(codeVerifier) {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64encode(digest);
}

export function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return prompt("Copy to clipboard: Ctrl+C, Enter", text);
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

export async function spot(key, url, method, body) {
  const headers = {
    Authorization: `Bearer ${State.currentState.spotifyAccessToken}`,
  };
  if (!url.startsWith("https://")) {
    url = `https://api.spotify.com/v1/${url}`;
  }
  if (method === "POST") {
    const response = await fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    });

    return await response.json();
  }
  if (key) {
    const localData = localStorage.getItem(key);
    if (localData) {
      return JSON.parse(localData);
    }
  }

  const response = await fetch(url, {
    headers: headers,
  });
  const data = await response.json();
  if (key && !data.error) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  return data;
}

export async function fetchPlaylist(playlistId, cache) {
  let allSongs = [];

  function genkey(page) {
    if (cache) {
      return `${playlistId}-${page}`;
    }
    return null;
  }
  let pages = 0;
  let data = await spot(
    genkey(pages),
    `playlists/${playlistId}/tracks?limit=100`
  );
  allSongs = allSongs.concat(data.items);

  while (data.next) {
    pages += 1;

    data = await spot(genkey(pages), data.next);
    allSongs = allSongs.concat(data.items);
    if (pages > 3) {
      break;
    }
  }

  return allSongs;
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
