import { h, Fragment, render, Component } from "preact";
import { State } from "./state";
import Auth from "./auth";
import { Usage } from "./usage";
import { PlaylistSelector } from "./selector";
import { RecommendConsumer } from "./consumer";

class App extends Component {
  render() {
    const loggedIn = State.useState((s) => s.spotifyAccessToken);
    let selector = null;
    let consumer = null;
    if (loggedIn) {
      selector = <PlaylistSelector />;
      consumer = <RecommendConsumer />;
    }
    return (
      <div>
        <Auth />
        <Usage />
        {selector}
        {consumer}
      </div>
    );
  }
}

render(<App />, document.querySelector("#container"));
