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

    var footer = document.createElement('div');
    footer.classList.add('footer');
    footer = addToFooter(footer);
    document.body.appendChild(footer);

    renderHome();
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

function addToFooter(footer) {
    const footerContent = {
        '1': 'Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/photos/wVoP_Q2Bg_A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        '2': 'Photo by <a href="https://unsplash.com/fr/@dongmingwei?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">mingwei dong</a> on <a href="https://unsplash.com/photos/irA2xa68xNA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        '3': 'Photo by <a href="https://unsplash.com/@johnathanmphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johnathan Macedo</a> on <a href="https://unsplash.com/photos/4NQEvxW2_4w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        '4': 'Photo by <a href="https://unsplash.com/@84media?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brian Tromp</a> on <a href="https://unsplash.com/photos/MO8afII4J_o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        '5': 'Photo by <a href="https://unsplash.com/@pablomerchanm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pablo Merchán Montes</a> on <a href="https://unsplash.com/photos/Orz90t6o0e4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    }

    for (const photo in footerContent) {
        const element = document.createElement('span');
        element.innerHTML = footerContent[photo];
        element.classList.add('text');
        footer.appendChild(element);
    }

    return footer;
}