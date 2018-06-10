var Trackster = {};
const API_KEY = '8cef11f0f1a8a38f87d08c7d32a15299'

$(document).ready(function() {
  $('#button').click(function() {
    Trackster.searchTracksByTitle($('#input').val());
  });
});


Trackster.searchTracksByTitle = function(title) {
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
      success: function(response) {
        Trackster.renderTracks(response.results.trackmatches.track);
    }
  });
};

Trackster.renderTracks = function(tracks) {

  $('#list').empty();

  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
    var track = tracks[trackIndex];
    var image = track.image[2]['#text'];
    var html =
    '    <div class="row list align-items-center">' +
    '      <a href="' + track.url + '" target="_blank" class="col-1 offset-1"><i class="fas fa-play-circle"></i></a>' +
    '      <span class="col-3">' + track.name + '</span>' +
    '      <span class="col-2">' + track.artist + '</span>' +
    '      <div class="col-2 image-container"><img src="' + image + '" alt=""></div>' +
    '      <span class="col-2">' + track.listeners + '</span>' +
    '    </div>' ;

    $('#list').append(html);
  }
};
