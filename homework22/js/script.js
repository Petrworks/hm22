const container = document.querySelector('.container');

function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('title');
  const cardTitleH1 = document.createElement('h1');
  cardTitleH1.innerHTML = item.name;
  cardTitle.append(cardTitleH1);

  const cardStatus = document.createElement('div');
  cardStatus.classList.add('status');
  const cardLiveStatus = document.createElement('div');
  cardLiveStatus.classList.add('live-status');

  const cardStatusP = document.createElement('p');
  const cardStatusPText = document.createTextNode(item.status);
  cardStatus.append(cardLiveStatus);
  cardStatusP.append(cardStatusPText);
  cardStatus.append(cardStatusP);
  cardTitle.append(cardStatus);
  cardInfo.append(cardTitle);

  const cardContent = document.createElement('div');
  cardContent.classList.add('content');
  const cardContentText = document.createTextNode(item.location.name);
  cardContent.append(cardContentText);
  cardInfo.append(cardContent);

  card.append(cardInfo);

  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  const image = document.createElement('img');
  image.src = item.image;
  image.alt = 'Some image';
  cardImage.append(image);
  card.append(cardImage);

  container.append(card);
}

const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max)).join(',');

const randomArr = generateArray(10, 826);

fetch('https://rickandmortyapi.com/api/character/' + randomArr)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => res.forEach((item) => createCard(item)));
