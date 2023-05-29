import ruskiImage from './ruski.jpg';
import homeCSS from './home.css';

export default function renderHome() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const header = document.createElement('h1');
    header.textContent = "Home page header";

    const headerImage = new Image();
    headerImage.src = ruskiImage;

    const review = document.createElement('p');
    review.textContent = '"Ruski" is a one-of-a-kind restaurant that offers guests an authentic taste of Russian cuisine in an elegant setting. The restaurant\'s menu features traditional Russian dishes made with fresh locally sourced ingredients,  such as hearty stews, tender meats, and flavorful vegetable dishes. The presentation of the dishes is a work of art in itself, and each plate is beautifully crafted with careful attention paid to every detail.';

    const openHours = document.createElement('span');
    openHours.innerHTML = 'Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm';

    const location = document.createElement('span');
    location.innerHTML = 'Kremlin Square, 1';

    contentDiv.appendChild(header);
    contentDiv.appendChild(headerImage);
    contentDiv.appendChild(review);
    contentDiv.appendChild(openHours);
    contentDiv.appendChild(location);

};