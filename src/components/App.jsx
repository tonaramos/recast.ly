class App extends React.Component {
  constructor (props) {
    super(props);

    // this.props.youtubeData({
    //   key: window.YOUTUBE_API_KEY,
    //   maxResults: '5',
    //   part: 'snippet',
    //   q: 'surfing'
    // });
    
    this.state = {
      videoData: this.props.data,
      videoPlaying: this.props.data[0]
    };
  }
  
  handleClick(video) {
    console.log(video);
    this.setState({ videoPlaying: video});
    
  }

  handleSearch(query) {
    this.props.youtubeData({
      key: window.YOUTUBE_API_KEY,
      maxResults: '5',
      part: 'snippet',
      q: query
    }, (data) => this.setState({ videoData: data }) );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search youtubeData={this.props.youtubeData} onClick={(query) => this.handleSearch(query)} />
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
