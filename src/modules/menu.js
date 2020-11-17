import setBtnActive from '../utils/active-button-setter'

function createMenuItem(text, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const menuItemContents = document.createElement('div');
    menuItemContents.classList.add('menu-item-contents');
    const itemText = document.createElement('h3');
    itemText.textContent = text;
    const itemPrice = document.createElement('h4');
    itemPrice.textContent = price;
    menuItemContents.appendChild(itemText);
    menuItemContents.appendChild(itemPrice);
    menuItem.appendChild(menuItemContents);
    return menuItem;
}

function loadMenu() {
    const content = document.getElementById('main');
    content.textContent = '';
    setBtnActive('menu');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-container');
    const menuItems = [
        createMenuItem('Menu Item #1', '€ 0,00'),
        createMenuItem('Menu Item #2', '€ 0,00'),
        createMenuItem('Menu Item #3', '€ 0,00'),
        createMenuItem('Menu Item #4', '€ 0,00'),
        createMenuItem('Menu Item #5', '€ 0,00'),
        createMenuItem('Menu Item #6', '€ 0,00'),
        createMenuItem('Menu Item #7', '€ 0,00'),
        createMenuItem('Menu Item #8', '€ 0,00')
    ];
    menuItems.forEach((menuItem) => {
        menu.appendChild(menuItem);
    });
    content.appendChild(menu);
}

export default loadMenu;