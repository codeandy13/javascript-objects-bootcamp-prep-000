var playlist = {
  EdSheeran: 'Shape of You'
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist [artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  return object.assign({},delete playlist.artistName)
}
