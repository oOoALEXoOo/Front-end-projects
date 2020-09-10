let getHTTPMethodButton = document.querySelector('.getHTTPMethod');
let postHTTPMethodButton = document.querySelector('.postHTTPMethod');
let inputsWithText = document.querySelectorAll('input[type="text"]');

for (let input of inputsWithText) {
    input.onfocus = () => {
        input.classList.contains('typingError') && input.classList.remove('typingError');
        input.value = '';
    }
}

function getCurrentSpaceOf(element) {
    let currentSpace = getComputedStyle(element).marginTop;
    let indexOfPx = currentSpace.indexOf('px');
    return +currentSpace.slice(0, indexOfPx);
}

function showResponseIfReceived(request) {
    let notification = document.createElement('p');

    if (request.status !== 200) {
        notification.className = 'errorNotification';
        notification.textContent = `Error ${request.status}: ${request.statusText}`;
    } else {
        notification.className = 'successNotification';
        notification.textContent = 'Registration is successfully completed';
        
        showReceivedData(request.response)
    }

    return notification;
}

function showReceivedData(response) {
    let receivedObj = JSON.parse(response);

    for (let key in receivedObj) {
        if (receivedObj.hasOwnProperty(key)) {
            console.log(`${key}: ${receivedObj[key]}\n`);
        }
    }
}

function isEmptyFields(fields) {
    let status = true;
    for (let field of fields) {
        if (field.value) continue;

        field.classList.add('typingError');
        field.value = 'field is empty';
        status = false;
    }
    return status;
}

function isFieldInteger(ageField) {
    if (/[^0-9]/g.test(ageField.value)) {
        ageField.classList.add('typingError');
        ageField.value = `age field isn't integer number`;

        return false;
    }
    return true;
}

function isFieldInRange(ageField) {
    if (ageField.value < 1 || ageField.value > 100) {
        ageField.classList.add('typingError');
        ageField.value = 'incorrect filling the age';

        return false;
    }
    return true;
}

function sendFormByGetHTTPMethod() {
    let userData = {};
    let currentFormClassName = document.querySelector('.regFormWithGetMth').className;
    let inputs = document.querySelectorAll('.' + currentFormClassName + ' input[type="text"]');
    let ageInput = document.querySelector('.' + currentFormClassName + ' input[name="age"]');

    if (!isEmptyFields(inputs)) return;
    if (!isFieldInteger(ageInput)) return;
    if (!isFieldInRange(ageInput)) return;

    inputs.forEach(input => userData[input.name] = input.value);

    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/formGet?fName=' + userData.fName +
        '&lName=' + userData.lName + '&age=' + userData.age +
        '&address=' + userData.address);

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send();

    xhr.onload = function () {
        let notification = showResponseIfReceived(xhr);
        let elementAfter = document.querySelector('form + h1');

        inputs.forEach(input => input.value = '');

        document.querySelector('.' + currentFormClassName + ' input[type=button]').after(notification);

        let compensatedSpace = document.querySelector('.' + notification.className).offsetHeight;
        let currentSpace = getCurrentSpaceOf(elementAfter);

        elementAfter.style.marginTop = (currentSpace - compensatedSpace) + 'px';

        let currentSpaceUpd = getCurrentSpaceOf(elementAfter);

        new Promise(resolve => {
            setTimeout(() => resolve(notification.remove()), 3000)
        })
          .then(() => {
              elementAfter.style.marginTop = (currentSpaceUpd + compensatedSpace) + 'px'
          });
    }
}

function sendFormByPostHTTPMethod() {
    let userData = {};
    let currentForm = document.querySelector('.regFormWithPostMth');
    let inputs = document.querySelectorAll('.' + currentForm.className + ' input[type="text"]');
    let ageInput = document.querySelector('.' + currentForm.className + ' input[name="age"]');

    if (!isEmptyFields(inputs)) return;
    if (!isFieldInteger(ageInput)) return;
    if (!isFieldInRange(ageInput)) return;

    inputs.forEach(input => userData[input.name] = input.value);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/formPost');

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send(JSON.stringify(userData));

    xhr.onload = function () {
        let notification = showResponseIfReceived(xhr);

        inputs.forEach(input => input.value = '');

        document.querySelector('.' + currentForm.className + ' input[type=button]').after(notification);

        setTimeout(() => notification.remove(), 3000);
    }
}

getHTTPMethodButton.addEventListener('click', sendFormByGetHTTPMethod);
postHTTPMethodButton.addEventListener('click', sendFormByPostHTTPMethod);