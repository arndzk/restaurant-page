function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.setAttribute('id', 'logo');
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
function createFooter(id) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const div = document.createElement('div');
    div.setAttribute('id', 'footer-content');
    const spanOne = document.createElement('span');
    spanOne.textContent = 'Made with ';
    const spanTwo = document.createElement('span');
    spanTwo.setAttribute('id', 'red-heart');
    spanTwo.innerHTML = '&#x2764';
    const spanThree = document.createElement('span');
    spanThree.textContent = ' & ';
    const spanFour = document.createElement('span');
    spanFour.setAttribute('id', 'coffee-cup');
    spanFour.innerHTML = '&#x2615';
    const spanFive = document.createElement('span');
    spanFive.textContent = ' by ';
    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'https://github.com/arndzk');
    anchor.innerHTML = 'arndzk';
    div.appendChild(spanOne);
    div.appendChild(spanTwo);
    div.appendChild(spanThree);
    div.appendChild(spanFour);
    div.appendChild(spanFive);
    div.appendChild(anchor);
    footer.appendChild(div);
    return footer;
}
function loadPage() {
    const content = document.getElementById('content');
    const header = createHeader('header', 'Minimalist Restaurant Page');
    content.appendChild(header);
    const navBar = createNavBar('navbar');
    content.appendChild(navBar);
    const main = createMain('main');
    content.appendChild(main);
    const footer = createFooter('footer');
    content.appendChild(footer);
}

export default loadPage;