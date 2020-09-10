'use strict';

const array = [
  { name: 'name11', url: 'url11'},
  { name: 'name12', url: 'url12'},
  [
    { name: 'name21', url: 'url21'},
    { name: 'name22', url: 'url22'},
  ],
  { name: 'name13', url: 'url13'},
  [
    { name: 'name23', url: 'url23'},
    [
      { name: 'name31', url: 'url31'},
    ]
  ]
];
const tabIndex = (function () {
  let currentTabIndex = 0;

  function next() {
    return ++currentTabIndex;
  }

  return {
    next,
  };
}());
const fileSystem = document.querySelector('.fileSystem');

displayArray(array, fileSystem);

window.addEventListener('DOMContentLoaded', setDefaultSettings);
fileSystem.addEventListener('mousewheel', switchFocus);
fileSystem.addEventListener('keydown', switchFocus);
fileSystem.addEventListener('keydown', togglePopup);


function displayArray(array, list) {
  let index = 0;
  let currentSideline = createSideline(list);
  list.classList.contains('fileSystem') && createHeader(list);

  iterate(array[index], currentSideline);

  function iterate(item, currentList) {
    if (typeof item === 'undefined') return;

    if (Array.isArray(item)) {
      displayArray(item, createSublist(currentList));
    } else {
      addItemToList(item, currentList);
    }

    iterate(array[++index], currentList);
  }
}

function addItemToList(item, currentList) {
  let li = document.createElement('li');

  li.classList.add('item');

  li.append(createText(item));

  currentList.append(li);
}

function createSublist(currentList) {
  let li = document.createElement('li');
  let ul = document.createElement('ul');

  li.classList.add('sublist');
  ul.hidden = true;

  li.append(createPlusButton(), createText(), ul);
  currentList.append(li);

  return ul;
}

function createHeader(mainList) {
  let header = document.createElement('li');

  header.classList.add('header');
  header.textContent = 'File System';

  mainList.prepend(header);
}

function createSideline(currentList) {
  let div = document.createElement('div');

  div.classList.add('sideline');

  return currentList.appendChild(div);
}

function createEndLine() {
  let div = document.createElement('div');

  div.classList.add('endLine');

  return div;
}

function createText(item) {
  let text = document.createElement('span');

  if (item) {
    text.textContent = `name: ${item.name}, url: ${item.url}`;
  } else {
    text.textContent = 'Directory';
  }
  text.tabIndex = tabIndex.next();
  text.classList.add('text');
  text.addEventListener('click', togglePopup);

  return text;
}

function createPlusButton() {
  let imgButton = document.createElement('img');
  imgButton.classList.add('plusBtn');
  imgButton.src = 'images/plus.png';
  imgButton.alt = 'plus';
  imgButton.addEventListener('click', toggleSublist);

  return imgButton;
}

function createPopupWindow(text) {
  let popupWindow = document.createElement('span');

  popupWindow.textContent = text;
  popupWindow.classList.add('popup');
  return popupWindow;
}

function toggleSublist(event) {
  let src = event.target.src;
  let sublist = event.target.parentElement.lastElementChild;

  sublist.hidden = !sublist.hidden;
  event.target.src = `images/${/plus/.test(src) ? 'minus' : 'plus'}.png`;

  if (!sublist.hidden) {
    let focusingElm = sublist.firstElementChild;

    while (!focusingElm.hasAttribute('tabindex')) {
      (focusingElm.children && (focusingElm = focusingElm.firstElementChild)) ||
      (focusingElm = focusingElm.nextElementSibling);
    }

    focusingElm.focus();
  }
}

function togglePopup(event) {
  let nextElement;

  if (event.type === 'click') {
    nextElement = event.target.nextElementSibling;
  } else if (event.type === 'keydown') {
    if (event.key !== 'Enter' || !document.activeElement) return;
    nextElement = document.activeElement.nextElementSibling;
  }

  if (!nextElement || !nextElement.classList.contains('popup')) {
    let text = event.target.textContent;
    event.target.after(createPopupWindow(text));
  } else {
    nextElement.hidden = !nextElement.hidden;
  }
}

function setDefaultSettings() {
  document.querySelector('.sublist .text').focus();
  let sidelines = document.querySelectorAll('.sideline');

  for (let sideline of sidelines) {
    sideline.append(createEndLine());
  }
}

function switchFocus(event) {
  event.preventDefault();
  let focusingElm;
  let direction = null;
  let focusedElm = document.activeElement;
  let currTabInd = focusedElm.tabIndex;

  if (event.type === 'mousewheel') {
    direction = event.deltaY/Math.abs(event.deltaY);
  } else if (event.type === 'keydown') {
    direction = event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : 0;
  }
  focusingElm = document.querySelector(`.text[tabindex="${currTabInd + direction}"]`);

  while (focusingElm && focusingElm.parentElement.parentElement.parentElement.hidden) {
    currTabInd = focusingElm.tabIndex
    focusingElm = document.querySelector(`.text[tabindex="${currTabInd + direction}"]`);
  }

  focusingElm && focusingElm.focus();
}
