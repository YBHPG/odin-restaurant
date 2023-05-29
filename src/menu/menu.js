export default function renderMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const header = document.createElement('h1');
    header.textContent = "Menu page header";

    contentDiv.appendChild(header);
};