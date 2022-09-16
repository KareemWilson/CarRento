import cars from '../data/cars.js';

const generateCarCard = () => {
  const carsSection = document.querySelector('.cars');
  cars.forEach((car) => {
    const carCard = document.createElement('div');
    const carDiv = document.createElement('div');
    const carImg = document.createElement('img');
    const behindImg = document.createElement('img');
    const carInfo = document.createElement('div');
    const carName = document.createElement('h4');
    const carFeature = document.createElement('p');
    const border = document.createElement('hr');
    const carDesc = document.createElement('p');

    carCard.setAttribute('class', 'car-card d-flex flex-row');
    carDiv.setAttribute('class', 'car-img-container d-flex flex-column');
    carImg.setAttribute('class', 'car-img');
    carImg.setAttribute('src', car.carImg);
    behindImg.setAttribute('class', 'behind-img');
    behindImg.setAttribute('src', car.behindCarImg);
    carInfo.setAttribute('class', 'car-info d-flex flex-column');
    carName.setAttribute('class', 'car-name m-0');
    carName.innerHTML = car.name;
    carFeature.setAttribute('class', 'car-feature m-0');
    carFeature.innerHTML = car.shortInfo;
    border.setAttribute('class', 'bord');
    carDesc.setAttribute('class', 'car-desc m-0');
    carDesc.innerHTML = car.description;

    carsSection.appendChild(carCard);
    carCard.append(carDiv, carInfo);
    carDiv.append(behindImg, carImg);
    carInfo.append(carName, carFeature, border, carDesc);
  });
};

export default generateCarCard;
