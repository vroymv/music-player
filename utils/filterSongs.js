function filter(songs, search) {
  const filteredSongs = songs.filter(
    (song) => song.title.includes(search) || song.artist.includes(search)
  );

  return filteredSongs;
}

export default filter;
