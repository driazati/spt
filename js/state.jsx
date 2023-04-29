import { Store } from "pullstate";

module.exports = {
  State: new Store({
    spotifyAccessToken: null,
    selectedSongs: null,
    validatedSongsToAdd: false,
    spotifyTracksToAdd: [],
  }),
};
