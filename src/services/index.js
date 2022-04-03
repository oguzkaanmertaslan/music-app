const API_KEY = "cd7c2c365202ace2d3d4e59583d72f6f";
const baseUrl = "https://ws.audioscrobbler.com/2.0/";

const getTopArtists = () => {
  return fetch(
    `${baseUrl}?method=chart.gettopartists&api_key=${API_KEY}&format=json`
  )
    .then((response) => response.json())
    .then((data) => data.artists.artist);
};
const getTopTracks = (artist) => {
  return fetch(
    `${baseUrl}?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`
  )
    .then((response) => response.json())
    .then((data) => data.toptracks.track);
};

const getTopAlbums = (artist) => {
  return fetch(
    `${baseUrl}?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`
  )
    .then((response) => response.json())
    .then((data) => data.topalbums.album);
};
export { getTopArtists, getTopTracks, getTopAlbums };
