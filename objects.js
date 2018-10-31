var playlist = {
  SamSmith: "Lay me Down",
  EdSheeran: "Shape of You"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, {[artistName]: songTitle} )
}
