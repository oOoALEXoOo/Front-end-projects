let buttonFillListsWithText = document.querySelector('.fillListsWithText');

buttonFillListsWithText.onclick = function () {
    let currentList = document.querySelector('.' + this.dataset.currentList);
    let currentNumberOfList = currentList.className.split('-')[0];

    for (let i = 0; i < currentList.children.length; i++) {
        currentList.children[i].textContent = `${i + 1} list item of ${currentList.className}`;
    }

    this.dataset.currentList = currentList.nextElementSibling.nextElementSibling.className;

    if (this.dataset.currentList.includes('list')) {
        this.textContent = this.textContent.replace(
            currentNumberOfList, this.dataset.currentList.split('-')[0]
        );
    } else {
        this.textContent = 'lists are filled';
    }
}

let buttonShowAmountOfAllLi = document.querySelector('.showAmountOfAllLi');

buttonShowAmountOfAllLi.onclick = function () {
    let listItems = document.querySelectorAll('ul li');
    if (this.dataset.isClicked === 'false') {
        buttonShowAmountOfAllLi.after('Amount of all list items: ' + listItems.length);
    }
    this.dataset.isClicked = 'true';
}