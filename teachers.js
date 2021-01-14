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

function sliderLeft() {
    let parentsFeedBack = document.getElementsByClassName('c-skills__feedback-nav');

    for (let o = 0; o < parentsFeedBack.length; o++) {
        let current = parentsFeedBack[o];
        current.classList.add('a-slide-left');
    }
};

// function sliderRight() {
//     let parentsFeedBack = document.getElementsByClassName('c-skills__feedback-nav');

//     for (let o = 0; o < parentsFeedBack.length; o++) {
//         let current = parentsFeedBack[o];
//         current.classList.add('a-slide-right');
//     }
// };