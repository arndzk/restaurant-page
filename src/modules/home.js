import setBtnActive from '../utils/active-button-setter'

function createSection() {
    const section = document.createElement('section');
    section.classList.add('section');
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = "Section Title";
    section.appendChild(title);
    const paragraph = document.createElement('p');
    paragraph.classList.add('section-paragraph');
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur libero quis molestie fermentum. Vestibulum eleifend porttitor enim, non convallis nunc lobortis sed. Morbi ullamcorper nibh leo, sit amet lacinia enim dictum et. Quisque facilisis justo sit amet nisl pharetra posuere. Integer quis nulla metus. Duis eleifend dapibus tortor, in imperdiet lacus rhoncus vitae. Ut massa elit, vehicula at leo volutpat, tempus tristique ligula. Pellentesque quis eros magna. Donec ac dignissim dui. Fusce mollis urna vel fringilla feugiat. Cras dignissim eleifend arcu sed dictum. Nulla facilisi. In eu nunc ut ligula lacinia placerat quis et elit. Sed dapibus velit in nibh rutrum tincidunt eget nec magna. Maecenas ultricies augue hendrerit nisi semper, sit amet ultricies turpis aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    section.appendChild(paragraph);
    return section;
}
function loadHome() {
    const content = document.getElementById('main');
    content.textContent = '';
    const homeSection = createSection();
    setBtnActive('home');
    content.appendChild(homeSection);
}

export default loadHome;