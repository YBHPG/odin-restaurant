import administratorImage from './media/administrator.jpg';
import chefImage from './media/chef.jpg';
import ownerImage from './media/owner.jpg';
import contactsCSS from './contacts.css';

export default function renderContacts() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const header = document.createElement('h1');
    header.classList.add('headline');
    header.textContent = "Contacts page header";

    contentDiv.appendChild(header);

    const contacts = {
        "owner": {
            "name": "Vladislav, owner",
            "image": `${ownerImage}`,
            "email": "realEmail@email.com"
        },
        "cheif-administrator": {
            "name": "Alexandra, chief administrator",
            "image": `${administratorImage}`,
            "email": "oneMoreRealEmail@email.com"
        },
        "chef": {
            "name": "Dmitri, chef",
            "image": `${chefImage}`,
            "email": "finalRealEmail@email.com"
        },
    }

    const divOfContent = [];
    for (const obj in contacts) {
        const div = document.createElement('div');
        div.classList.add('contacts');

        const image = new Image();
        image.classList.add('contacts-image');
        image.src = contacts[obj].image;

        const header = document.createElement('h2');
        header.classList.add('contacts-header');
        header.textContent = contacts[obj].name;

        const email = document.createElement('span');
        email.classList.add('text', 'contacts-email');
        email.textContent = `Email: ${contacts[obj].email}`;

        const textDiv = document.createElement('div');
        textDiv.classList.add('text-div');
        textDiv.append(header, email);

        div.appendChild(image);
        div.appendChild(textDiv);
        contentDiv.append(div);
    }
};