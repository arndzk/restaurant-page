function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    header.appendChild(logo);
    return header;
}
function createNavBar(id) {
    const navBar = document.createElement('nav');
    navBar.setAttribute('id', id);
    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar;
}
function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('navbar-tab');
    return btn;
}
function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}
function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
}
function loadPage() {
    const content = document.getElementById('content');
    const header = createHeader('header', 'Restaurant');
    content.appendChild(header);
    const navBar = createNavBar('navbar');
    content.appendChild(navBar);
    const main = createMain('main');
    content.appendChild(main);
    const footer = createFooter('footer', 'Footer');
    content.appendChild(footer);
}

export default loadPage;