import { h, Fragment, render, Component } from "preact";

export class Usage extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }

  render() {
    let expanded = this.state.expanded;
    let icon = <span>show more</span>;
    if (expanded) {
      icon = <span>show less</span>;
    }
    let usage = null;
    if (expanded) {
      usage = (
        <ol>
          <li>Log in</li>
          <li>Choose one of your playlists to generate recommendations from</li>
          <li>
            Generate the prompt and copy-paste it to{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://chat.openai.com/">https://chat.openai.com/</a>
          </li>
          <li>Copy the code response from chatGPT back to this page</li>
          <li>
            Click the update button to validate chatGPT's suggestions and add
            them to a Spotify playlist called "GPT Recs"
          </li>
        </ol>
      );
    }
    return (
      <div>
        <p>
          Usage instructions{" "}
          <span
            onClick={() => {
              this.setState({
                expanded: !this.state.expanded,
              });
            }}
            class="cursor-pointer select-none"
          >
            {icon}
          </span>
        </p>
        {usage}
      </div>
    );
  }
}
