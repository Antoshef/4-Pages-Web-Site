function solve() {

    let invokeSearch = document.getElementsByClassName('c-header__search-bar')[0];
    let searchIcon = document.getElementsByClassName('c-header__search')[0];
    searchIcon.addEventListener('click', () => {
        if (invokeSearch.style.display === 'none') {
            invokeSearch.style.display = 'block';
        } else {
            invokeSearch.style.display = 'none';
        }
    });
}
solve()

function burger() {
    let navElements = document.getElementsByClassName('c-header__nav')[0];
    if (navElements.className.includes('u-block')) {
        navElements.classList.remove('u-block');
    } else {
        navElements.classList.add('u-block');
    };
};

// let parentsFeedBack = document.getElementsByClassName('c-skills__feedback-nav');
// let i = 0;

// function sliderLeft() {
//     let current = parentsFeedBack[i]
//     current.classList.add('a-slide-left');
//     i++;
//     if (i > 2) {i = 0};
// };

// function sliderRight() {
    
// };