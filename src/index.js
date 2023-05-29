import indexCSS from './index.css';
import renderHome from './home/home';
import renderMenu from './menu/menu';
import renderContacts from './contacts/contacts';

function indexRender() {
    const header = document.createElement('header');

    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');

    const headerList = document.createElement('ul');
    headerList.classList.add('header-list');

    const homeButton = document.createElement('li');
    homeButton.textContent = 'Home';
    homeButton.classList.add('header-list-button');
    homeButton.setAttribute('id', 'home');
    homeButton.addEventListener("click", clickHandler);

    const menuButton = document.createElement('li');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('header-list-button');
    menuButton.setAttribute('id', 'menu');
    menuButton.onclick = clickHandler;

    const contactsButton = document.createElement('li');
    contactsButton.textContent = 'Contacts';
    contactsButton.classList.add('header-list-button');
    contactsButton.setAttribute('id', 'contacts');
    contactsButton.onclick = clickHandler;

    headerList.append(homeButton, menuButton, contactsButton);
    header.appendChild(headerList);

    document.body.appendChild(header);

    document.body.appendChild(contentDiv);
};

function clickHandler() {
    let entryPoint = event.currentTarget.id;
    if (entryPoint === 'home') {
        renderHome();
    } else if (entryPoint === 'menu') {
        renderMenu();
    } else if (entryPoint === 'contacts') {
        renderContacts();
    }
};

window.onload = indexRender();