import fetch from 'node-fetch';

export async function searchYouTube(query) {
  const url = `https://youtube138.p.rapidapi.com/search/?q=${encodeURIComponent(query)}&hl=en&gl=US`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (
    data &&
    data.contents &&
    data.contents.length > 0 &&
    data.contents[0].video
  ) {
    const videoId = data.contents[0].video.videoId;
    return videoId;
  }

  return null;
}
