let hideTextButton = document.querySelector('.hideText');
let hideItselfButton = document.querySelector('.hideItself');
let headerItem = document.querySelector('.headerItem');

hideTextButton.onclick = () => document.querySelector('#text').hidden = true;

hideItselfButton.onclick = function () {
    this.hidden = true;
}

headerItem.onclick = function () {
    let hiddenMenu = document.querySelector('.hiddenMenu');
    let compensatedSpace = hiddenMenu.offsetHeight;

    hiddenMenu.hidden = !hiddenMenu.hidden;

    this.style.marginBottom = compensatedSpace + 'px';
}