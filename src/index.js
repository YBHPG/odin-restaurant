import ruskiImage from './ruski.jpg';

function createContent() {
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
    
    const headerImage = new Image;
    headerImage.src = ruskiImage;

    const headline = document.createElement('h1');
    headline.textContent = 'Indulge in Exquisite Flavors at Our Award-Winning Restaurant';

    const review = document.createElement('p');
    review.textContent = '"Ruski" is a one-of-a-kind restaurant that offers guests an authentic taste of Russian cuisine in an elegant setting. The restaurant\'s menu features traditional Russian dishes made with fresh locally sourced ingredients, such as hearty stews, tender meats, and flavorful vegetable dishes. The presentation of the dishes is a work of art in itself, and each plate is beautifully crafted with careful attention paid to every detail.';

    contentDiv.appendChild(headerImage);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(review);

    document.body.appendChild(contentDiv);
}

window.onload = createContent();