import menuCSS from './menu.css';
import menuData from './restaurantMenu.json';

export default function renderMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const header = document.createElement('h1');
    header.textContent = "Menu page header";

    contentDiv.appendChild(header);

    const restaurantMenuString = JSON.stringify(menuData);
    const restaurantMenuJSON = JSON.parse(restaurantMenuString);
    const restaurantMenu = [];
    for (const obj = 0; obj < restaurantMenuJSON.length(); obj++) {
        restaurantMenu.push(restaurantMenuJSON[obj]);
        console.log(restaurantMenuJSON[obj], obj);
    };

};
