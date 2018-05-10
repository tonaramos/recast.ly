
// console.log( 'Ivocation', window.searchYouTube({
//   key: window.YOUTUBE_API_KEY,
//   maxResults: '5',
//   part: 'snippet',
//   q: 'surfing'
// }) );

ReactDOM.render(<App data={window.exampleVideoData} youtubeData={window.searchYouTube} />, document.getElementById('app'));