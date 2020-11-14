function setBtnActive(id) {
    const activeBtn = document.querySelector('.active');
    if (activeBtn) {
        activeBtn.classList.remove('active');
    }
    const newActiveBtn = document.getElementById(id);
    newActiveBtn.classList.add('active');
}

export default setBtnActive;