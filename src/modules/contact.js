import setBtnActive from '../utils/active-button-setter'

function createSection(sectionTitle, data) {
    const section = document.createElement('section');
    section.classList.add('section');
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = sectionTitle;
    section.appendChild(title);
    data.forEach((d) => {
        const paragraph = document.createElement('p');
        paragraph.classList.add('section-contents');
        paragraph.textContent = d;
        section.appendChild(paragraph);
    });
    return section;
}
function loadContact() {
    const content = document.getElementById('main');
    content.textContent = '';
    const addressSection = createSection('Address', ['Street Name & Number','Postal Code', 'City']);
    const telephoneSection = createSection('Telephone', ['Telephone Number']);
    setBtnActive('contact');
    content.appendChild(addressSection);
    content.appendChild(telephoneSection);
}

export default loadContact;