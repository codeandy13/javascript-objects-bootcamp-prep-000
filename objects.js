var playlist = {
  EdSheeran: 'Shape of You'
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, artistName, songTitle)
}
