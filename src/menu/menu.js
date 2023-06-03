import menuCSS from './menu.css';
import chudu from './media/chudu.jpg';
import echpochmak from './media/echpochmak.jpg';
import kalitki from './media/kalitki.jpg';
import okroshka from './media/okroshka.jpg';
import sbiten from './media/sbiten.jpeg';

export default function renderMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Ruski restaurant menu";
    headline.classList.add('headline');

    contentDiv.appendChild(headline);

    const dishes = {
        "echpochmak": {
            "image": `${echpochmak}`,
            "name": "Echpochmak",
            "description": "Echpochmak used to be a traditional food of nomads: people would put raw meat stuffing into a triangle-shaped pastry and pour hot broth through a special hole, so it became a real hot dish. Nowadays, echpochmak is considered to be a trademark of the Republic of Tatarstan.",
            "price": "10$"
        },
        "sbiten": {
            "image": `${sbiten}`,
            "name": "Sbiten",
            "description": "Before the Russians discovered tea, sbiten was the main drink to warm up during the cold season. Honey was dissolved in boiling water with herbs (mint, sage, etc.) and spices (cardamom, cloves, cinnamon). Sbiten is especially tasty with pryaniki (gingerbread) and homemade cookies.",
            "price": "5$"
        },
        "chudu": {
            "image": `${chudu}`,
            "name": "Chudu",
            "description": "In Dagestan, chudus are as popular as chebureks on Black Sea coast. It's a thin or puffy flatbread with meat or vegetable fillings, cooked in a dry pan and smeared with butter or oil.",
            "price": "15$"
        },
        "okroshka": {
            "image": `${okroshka}`,
            "name": "Okroshka",
            "description": "Recipes for okroshka can be found in cookbooks since the late 18th century. Classic okroshka is made with finely chopped vegetables, meat and herbs with white kvass (not sweet). Later, a number of alternatives to kvass appeared - mineral water, kefir, ayran and other dairy products.",
            "price": "15$"
        },
        "kalitki": {
            "image": `${kalitki}`,
            "name": "Kalitki",
            "description": "This traditional dish of Karelian and North-Russian cuisine got its name after a small purse in Old Russian ('kalita'), which it resembles in shape. The fillings for kalitki, essentially pies made of unleavened rye dough, can be very different: cereals, mashed potatoes, berries, etc.",
            "price": "10$"
        }
    };

    for (const obj in dishes) {
        const div = document.createElement('div');
        div.classList.add('dishes');

        const image = new Image();
        image.classList.add('dishes-image');
        image.src = dishes[obj].image;

        const header = document.createElement('h2');
        header.classList.add('dishes-header');
        header.textContent = dishes[obj].name;

        const description = document.createElement('p');
        description.classList.add('text', 'dishes-description');
        description.textContent = dishes[obj].description;

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price-div');
        const priceHeader = document.createElement('span');
        priceHeader.innerHTML = 'Price:';
        priceHeader.classList.add('text', 'price-header');
        const price = document.createElement('span');
        price.classList.add('text', 'dishes-price');
        price.textContent = dishes[obj].price;
        priceDiv.append(priceHeader, price)

        div.appendChild(header);
        div.appendChild(image);
        div.appendChild(description);
        div.appendChild(priceDiv);
        contentDiv.append(div);
    };
};
