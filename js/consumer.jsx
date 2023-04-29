import { h, Fragment, render, Component } from "preact";
import { State } from "./state";
import { fetchPlaylist, spot } from "./utils";

SAMPLE_SONGS = `[]
`;

class Status extends Component {
  render() {
    const spotifyTracksToAdd = State.useState((s) => s.spotifyTracksToAdd);
    if (!spotifyTracksToAdd) {
      return <p>nothing to add</p>;
    }

    let rows = [];
    for (const item of spotifyTracksToAdd) {
      if (item.songStatus == "duplicate") {
        rows.push(
          <tr class="text-gray-500">
            (already present) {item.title} by {item.artist}
          </tr>
        );
      } else if (item.songStatus == "not found") {
        rows.push(
          <tr class="text-red-400">
            (missing) {item.title} by {item.artist}
          </tr>
        );
      } else {
        rows.push(
          <tr>
            {item.title} by {item.artist}
          </tr>
        );
      }
    }

    return <table>{rows}</table>;
  }
}

class PlaylistLink extends Component {
  render() {
    const doneUploading = State.useState((s) => s.doneUploading);
    const gptPlaylist = State.useState((s) => s.gptPlaylist);
    if (!gptPlaylist) {
      return null;
    }
    let url = `https://open.spotify.com/playlist/${gptPlaylist.id}`;
    return (
      <a target="_blank" rel="noopener noreferrer" class="ml-2" href={url}>
        View Playlist
      </a>
    );
  }
}

class AddSongs extends Component {
  render() {
    const validated = State.useState((s) => s.validatedSongsToAdd);
    if (!validated) {
      return null;
    }
    const spotifyTracksToAdd = State.useState((s) => s.spotifyTracksToAdd);
    const gptPlaylist = State.useState((s) => s.gptPlaylist);
    const toAdd = spotifyTracksToAdd.filter((s) => s.songStatus === "good");
    console.log(toAdd);

    return (
      <button
        onClick={async () => {
          let uris = toAdd.map((d) => `spotify:track:${d.result.id}`);
          await spot(null, `playlists/${gptPlaylist.id}/tracks`, "POST", {
            uris: uris,
          });
          State.update((s) => {
            s.doneUploading = true;
          });
          alert("Done adding songs! Check your Spotify account");
        }}
        class="ml-2"
      >
        Add {toAdd.length} Songs to 'GPT Recs' playlist
      </button>
    );
  }
}

export class RecommendConsumer extends Component {
  async createOrFindGptPlaylist() {
    const me = await spot("me", "me");
    const playlists = await spot(null, `users/${me.id}/playlists`);
    for (const playlist of playlists.items) {
      if (playlist.name === "GPT Recs") {
        return playlist;
      }
    }

    let playlist = await spot(null, `users/${me.id}/playlists`, "POST", {
      name: "GPT Recs",
      public: false,
    });
    return playlist;
  }
  async findExistingIds(playlist) {
    // const = items = await spot(null, `playlists/${playlist.id}/tracks?limit=100`);
    const allSongs = await fetchPlaylist(playlist.id, false);
    console.log(allSongs);
    let data = {};

    for (const song of allSongs) {
      data[song.track.id] = true;
    }

    return data;
  }
  async addSongsToGptPlaylist(songs) {
    let playlist = await this.createOrFindGptPlaylist();
    State.update((s) => {
      s.gptPlaylist = playlist;
    });
    const existingIds = await this.findExistingIds(playlist);

    State.update((s) => {
      s.spotifyTracksToAdd = [];
      update();
    });

    // async function validated() {
    //   State.update((s) => {
    //     console.log("set to true");
    //     s.validatedSongsT2oAdd = true;
    //   });
    // }

    async function update() {
      for (const song of songs) {
        const title = song.title || song.name || song.track;
        const artist = song.artist || song.artists;
        let artists = artist.split(",").map((a) => a.trim());
        const query = encodeURI(`${title} ${artists[0]}`);
        const data = await spot(
          `song-${artist}-${title}`,
          `search?type=track&q=${query}&limit=1`
        );

        const result = data.tracks.items[0];
        let songStatus = null;
        if (!result) {
          songStatus = "not found";
        } else if (existingIds[result.id]) {
          songStatus = "duplicate";
        } else {
          songStatus = "good";
        }
        State.update((s) => {
          s.spotifyTracksToAdd.push({
            title: title,
            artist: artist,
            songStatus: songStatus,
            result: result,
          });
        });
        State.update((s) => {
          s.validatedSongsToAdd = true;
        });
      }
    }
  }
  render() {
    let updateDiv = null;
    const prompt = State.useState((s) => s.prompt);
    if (!prompt) {
      return null;
    }
    updateDiv = (
      <button
        onClick={() => {
          this.addSongsToGptPlaylist(this.state.gptSongs);
        }}
        disabled={!this.state.gptSongs}
        class="mb-2"
      >
        Validate
      </button>
    );
    return (
      <div>
        <p class="font-bold">Upload</p>
        <input
          onChange={(v) => {
            let json = v.target.value;
            this.setState({
              gptSongs: JSON.parse(json),
            });
          }}
          placeholder="paste the JSON part of ChatGPT's response here"
          class="mb-2"
          type="text"
        />
        {updateDiv}
        <PlaylistLink />
        <AddSongs />
        <Status />
      </div>
    );
  }
}
