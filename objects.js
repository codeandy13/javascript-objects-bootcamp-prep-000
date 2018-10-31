var playlist = {
  artistNames: songTitles
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, {[artistName]: songTitle} )
}
