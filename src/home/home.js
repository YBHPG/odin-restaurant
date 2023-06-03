import ruskiImage from './ruski.jpg';
import homeCSS from './home.css';

export default function renderHome() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.classList.add('headline');
    headline.textContent = "Ruski - Russian cuisine restaurant";

    const headlineDiv = document.createElement('div');
    const headerImage = new Image();
    headerImage.classList.add('header-image');
    headerImage.src = ruskiImage;

    const review = document.createElement('p');
    review.classList.add('text');
    review.textContent = '"Ruski" is a one-of-a-kind restaurant that offers guests an authentic taste of Russian cuisine in an elegant setting. The restaurant\'s menu features traditional Russian dishes made with fresh locally sourced ingredients,  such as hearty stews, tender meats, and flavorful vegetable dishes. The presentation of the dishes is a work of art in itself, and each plate is beautifully crafted with careful attention paid to every detail.';
    headlineDiv.classList.add('headlineDiv');
    headlineDiv.append(headerImage, review);

    const openHoursDiv = document.createElement('div');
    openHoursDiv.classList.add('open-hours-div');
    const openHoursHeadline = document.createElement('h2');
    openHoursHeadline.innerHTML = 'Open hours:';
    const openHours = document.createElement('span');
    openHours.classList.add('text');
    openHours.innerHTML = 'Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm';
    openHoursDiv.append(openHoursHeadline, openHours)

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');
    const locationHeadline = document.createElement('h2');
    locationHeadline.innerHTML = 'Address:';
    const location = document.createElement('span');
    location.classList.add('text');
    location.innerHTML = 'Mansurovsky lane, 10 building 2, Moscow, 119034';
    locationDiv.append(locationHeadline, location);

    contentDiv.appendChild(headline);
    contentDiv.appendChild(headlineDiv);
    contentDiv.appendChild(openHoursDiv);
    contentDiv.appendChild(locationDiv);

};