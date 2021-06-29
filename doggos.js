const BREED_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(BREED_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });

async function getDoggo(event) {
  const response = await fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`);
  const responseJson = await response.json();
  document.getElementById('doggo').src = responseJson.message;
}

document.getElementById('get-doggo').addEventListener('click', getDoggo);
