import { h, Fragment, render, Component } from "preact";
import { State } from "./state";
import { copyToClipboard, shuffle, fetchPlaylist, spot } from "./utils";

export class PlaylistList extends Component {
  async update() {
    const me = await spot("me", "me");
    const playlists = await spot("playlists", `users/${me.id}/playlists`);
    this.setState({
      playlists: playlists.items,
    });
  }
  componentDidMount() {
    if (State.currentState.spotifyAccessToken) {
      this.update();
    } else {
      State.subscribe(
        (s) => s.spotifyAccessToken,
        () => {
          this.update();
        }
      );
    }
  }
  render() {
    const playlists = this.state.playlists;
    const selectedPlaylistId = State.useState((s) => s.selectedPlaylistId);
    if (!playlists) {
      return <p>Loading playlists...</p>;
    }

    let rows = playlists.map((playlist) => (
      <tr
        style={{
          color: selectedPlaylistId == playlist.id ? "red" : "green",
        }}
        class="cursor-pointer"
        onClick={async () => {
          State.update((s) => {
            s.selectedPlaylistId = playlist.id;
            s.prompt = "loading playlist";
          });
          const allSongs = await fetchPlaylist(playlist.id, true);
          State.update((s) => {
            console.log(`Updated state with ${allSongs.length} songs`);
            s.selectedPlaylistTracks = allSongs;
            s.selectedSongs = pickN(allSongs, 20);
            s.prompt = buildPrompt(s.selectedSongs);
          });
        }}
      >
        {playlist.name}
      </tr>
    ));
    return <table>{rows}</table>;
  }
}

function pickN(array, n) {
  let shuffled = shuffle(array);
  if (shuffled.length > n) {
    shuffled = shuffled.slice(0, n);
  }
  return shuffled;
}

function buildPrompt(songs) {
  let s =
    "Suggest 20 songs similar to these, in the format of a compressed JSON array with entries for artist and title.\n";
  for (const song of songs) {
    let artist = song.track.artists.map((artist) => artist.name).join(", ");
    s += `${song.track.name} - ${artist}\n  `;
  }
  s +=
    "Be sure to format the results as a compressed JSON array with entries for artist and title";
  return s;
}

class Prompt extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }

  render() {
    const prompt = State.useState((s) => s.prompt);
    if (prompt == "loading playlist") {
      return <p>Loading playlist details...</p>;
    }
    if (!prompt) {
      return <p>Choose a playlist first!</p>;
    }

    const nextSteps = (
      <p>
        Paste the prompt into{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://chat.openai.com/">https://chat.openai.com/</a> and copy
        the result into the box below
      </p>
    );

    let promptPre = null;
    if (this.state.expanded) {
      promptPre = (
        <pre
          style={{
            maxHeight: "5em",
          }}
          class="mb-2 overflow-scroll"
        >
          {prompt}
        </pre>
      );
    }

    return (
      <div>
        <div class="mb-2">
          <button
            onClick={() => {
              this.setState({ expanded: !this.state.expanded });
            }}
            class="mr-2"
          >
            {this.state.expanded ? "Hide" : "Show"} prompt
          </button>
          <button
            onClick={() => {
              copyToClipboard(prompt);
              this.setState({ copied: true });
            }}
            class="mr-2"
          >
            Copy to clipboard
          </button>
          <button
            onClick={() => {
              this.setState({
                copied: false,
              });
            }}
          >
            Re-roll sampling
          </button>
        </div>
        {promptPre}
        {nextSteps}
      </div>
    );
  }
}

export class PlaylistSelector extends Component {
  render() {
    return (
      <div>
        <p class="font-bold">Playlists</p>
        <PlaylistList />
        <p class="font-bold">Prompt</p>
        <Prompt />
      </div>
    );
  }
}
