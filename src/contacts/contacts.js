export default function renderContacts() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const header = document.createElement('h1');
    header.textContent = "Contacts page header";

    contentDiv.appendChild(header);
};