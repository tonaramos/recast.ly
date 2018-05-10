class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      // videoData: this.props.data,
      // videoPlaying: this.props.data[0]
      videoData: [],
      videoPlaying: {}
    };
  }
  
  handleClick(video) {
    this.setState({ videoPlaying: video });    
  }

  handleSearch(query) {
    this.props.searchYouTube({
      format: '5',
      key: window.YOUTUBE_API_KEY,
      maxResults: '5',
      part: 'snippet',
      q: query,
      type: 'video',
      videoSyndicated: 'any'
    }, (data) => this.setState({ videoData: data, videoPlaying: data[0] }) 
    );
  }

  render() {
    
    let searchComponent = ( <div className="search-bar form-inline"></div> );
    let videoPlayerComponent = ( <div className="video-player"></div> );
    let videoListComponent = ( <div className="video-list"></div> );
    if ( this.state.videoData.length > 0 ) {
      searchComponent = <Search youtubeData={this.props.youtubeData} onClick={(query) => this.handleSearch(query)} />;
      videoPlayerComponent = <VideoPlayer video={this.state.videoPlaying} />;
      videoListComponent = <VideoList videos={this.state.videoData} onClick={(video) => this.handleClick(video)} />;
    }

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {searchComponent}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {videoPlayerComponent}
          </div>
          <div className="col-md-5">
            {videoListComponent}
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    this.handleSearch('childish gambino');
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
