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
    const menuItems = [
        createMenuItem('item 1', 'price 1'),
        createMenuItem('item 2', 'price 2'),
        createMenuItem('item 3', 'price 3'),
        createMenuItem('item 4', 'price 4'),
        createMenuItem('item 5', 'price 5'),
        createMenuItem('item 6', 'price 6'),
        createMenuItem('item 7', 'price 7'),
        createMenuItem('item 8', 'price 8')
    ];
    menuItems.forEach((menuItem) => {
        content.appendChild(menuItem);
    });
}

export default loadMenu;