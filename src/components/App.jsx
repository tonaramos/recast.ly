class App extends React.Component {
  constructor (props) {
    super(props);
    
    console.log('Props', this.props.data);

    this.state = {
      videoData: this.props.data,
      videoPlaying: this.props.data[0]
    };
  }
  
  handleClick(video) {
    this.setState({ videoPlaying: video});
  }
 
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoData} onClick={(video) => this.handleClick(video)} />
          </div>
        </div>
      </div>
    );
  }  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
