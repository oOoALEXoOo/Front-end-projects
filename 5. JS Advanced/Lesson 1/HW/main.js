const People = (function () {
    const personNames = [
        'Alex',
        'Mikel',
        'Jeffrey',
        'Rachel',
        'John',
    ];

    let personNameInput = null;
    let personNameList = null;
    let addToListButton = null;
    let delFromListButtons = null;

    function init() {
        render();
        cacheDom();
        bindEvent();
    }

    function cacheDom() {
        personNameInput = document.querySelector('input.personName');
        personNameList = document.querySelector('ul.personNameList');
        addToListButton = document.querySelector('input.addToList');
        delFromListButtons = document.querySelectorAll('img.delFromList');
    }

    function bindEvent() {
        personNameInput.addEventListener('focus', removeTextError);
        addToListButton.addEventListener('click', addPersonName);
        for (let delButton of delFromListButtons) {
            delButton.addEventListener('click', delPersonName);
        }
    }

    function render(option) {
        if (option === 'add') {
            let personName = personNames[personNames.length - 1];
            let personNameLi = wrapPersonName(personName);

            personNameList.append(personNameLi);
        } else if (option === 'del') {
            for (let li = personNameList.firstChild, i = 0; li; li = li.nextElementSibling, i++) {
                if (li.textContent === personNames[i]) continue;

                li.remove();
                break;
            }
        }
        else {
            let personNameList = document.querySelector('ul.personNameList');

            personNames.forEach(personName => {
                let personNameLi = wrapPersonName(personName);
                personNameList.append(personNameLi);
            });
        }
    }
    
    function addPersonName() {
        if (!isEmptyPersonName(personNameInput) || isAlreadyExist(personNameInput)) return;

        let personName = personNameInput.value;
        personNameInput.value = '';

        personNames.push(personName);

        render('add');
    }

    function delPersonName(event) {
        let deletingPersonName = event.currentTarget.parentElement.textContent;

        personNames.forEach((personName, deletingIndex) => {
            if (personName === deletingPersonName) {
                personNames.splice(deletingIndex, 1);
            }
        });

        render('del');
    }

    function removeTextError(event) {
        let personNameInput = event.currentTarget;

        personNameInput.classList.contains('typingError') && personNameInput.classList.remove('typingError');
        personNameInput.value = '';
    }

    function wrapPersonName(personName) {
        let liWrapper = document.createElement('li');
        let imgBtn = document.createElement('img');

        imgBtn.classList.add('delFromList');
        imgBtn.src = 'images/close.png';
        imgBtn.alt = 'cross button';
        imgBtn.addEventListener('click', delPersonName);

        liWrapper.textContent = personName;
        liWrapper.append(imgBtn);

        return liWrapper;
    }

    function isEmptyPersonName(personNameField) {
        let status = true;

        if (!personNameField.value || personNameField.classList.contains('typingError')) {
            personNameField.classList.add('typingError');
            personNameField.value = 'field is empty';
            status = false;
        }

        return status;
    }

    function isAlreadyExist(personNameField) {
        let status = false;

        if (personNames.includes(personNameField.value)) {
            personNameField.classList.add('typingError');
            personNameField.value = 'name is already exist';
            status = true;
        }

        return status;
    }

    return {
        init: init
    };

})();

People.init();