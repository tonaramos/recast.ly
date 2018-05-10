var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    dataType: 'json',
    success: function (data) {
      console.log('Success', data);
    },
    error: function (data) {
      console.error('Fail', data);
    },
    
  });
};

window.searchYouTube = searchYouTube({
  key: window.YOUTUBE_API_KEY,
  maxResults: '5',
  part: 'snippet',
  q: 'surfing'
});

console.log( window.searchYouTube );
