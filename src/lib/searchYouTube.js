var searchYouTube = (options, callback) => {
  var theData;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    dataType: 'json',
    success: function (data) {
      callback(data.items);
      console.log('Success', data.items);
    },
    error: function (data) {
      console.error('Fail', data);
    },
    done: function(data) {
      console.log('All done!');
    }

  });
};
