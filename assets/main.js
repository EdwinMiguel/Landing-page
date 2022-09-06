const API = 'https://spotify23.p.rapidapi.com/user_profile/?id=12138927519&playlistLimit=1&artistLimit=5';
const content = null || document.querySelector('#content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44a3d2e842msh21aa4e28f8f31d7p1ee6c4jsn1e210420b31e',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const artists = await fetchData(API);
    let view = `
    ${artists.recently_played_artists.map(artist => `
      
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${artist.image_url}" alt="${artist.name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <a href="${artist.uri}" target="_blank"><h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${artist.name}
          </h3></a>
        </div>
      </div>
    `).slice(0,5).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();