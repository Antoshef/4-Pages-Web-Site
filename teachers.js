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
        navElements.className = 'c-header__nav';
    } else {
        navElements.className += ' u-block';
    };
};

function slider() {
    console.log('fqwdqw');
};