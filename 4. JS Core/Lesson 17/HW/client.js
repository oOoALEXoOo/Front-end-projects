let sendToServerButton = document.querySelector('.sendToServer');
let inputsWithText = document.querySelectorAll('input[type="text"]');

for (let input of inputsWithText) {
    input.onfocus = () => {
        input.classList.contains('typingError') && input.classList.remove('typingError');
        input.value = '';
    }
}

function createNotification(request) {
    let notification = document.createElement('p');

    if (request.status !== 200) {
        notification.className = 'errorNotification';
        notification.textContent = `Error ${request.status}: ${request.statusText}`;
    } else {
        notification.className = 'successNotification';
        notification.textContent = 'Data are successfully sent';
    }

    return notification;
}

function isEmptyFields(fields) {
    let status = false;
    for (let field of fields) {
        if (field.value) continue;

        field.classList.add('typingError');
        field.value = 'field is empty';
        status = true;
    }
    return status;
}

function isFieldsWithError(fields) {
    for (let field of fields) {
        if (!field.classList.contains('typingError')) continue;

        return true;
    }
    return false;
}

function sendFormByPostHTTPMethod() {
    let url = '/user-data';

    getServerResponsePromise(url)
        .then(
            email => alert(email),
            error => alert(error)
        );
}

function getServerResponsePromise(url) {
    let userData = {};
    let inputs = document.querySelectorAll('input[type="text"]');

    if (isEmptyFields(inputs) || isFieldsWithError(inputs)) return;

    inputs.forEach(input => userData[input.name] = input.value);

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url);

        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.send(JSON.stringify(userData));

        xhr.onload = function () {
            let notification = createNotification(this);

            inputs.forEach(input => input.value = '');

            document.querySelector('input[type=button]').after(notification);

            new Promise(wait => setTimeout(wait, 500))
                .then(() => {
                    notification.remove();
                })
                .then(() => {
                    this.status === 200 ? resolve(this.response) : reject(new Error(this.statusText));
                });
        }

        xhr.onerror = function () {
            reject(new Error('No connection or invalid url'));
        }
    });
}

sendToServerButton.addEventListener('click', sendFormByPostHTTPMethod);