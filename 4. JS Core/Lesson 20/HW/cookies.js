let saveUserDataButton = document.querySelector('.saveUserData');
let showCookiesButton = document.querySelector('.showCookies');
let showLocalStorageButton = document.querySelector('.showLocalStorage');

function saveUserData() {
    let userData = {};
    let inputs = document.querySelectorAll('input[type="text"]');
    let userKey = document.querySelector('input[name="name"]').value;

    inputs.forEach(input => userData[input.name] = input.value);

    localStorage.setItem(userKey, JSON.stringify(userData));

    let dayExpire = new Date();
    dayExpire.setDate(dayExpire.getDate() + 1);

    setCookie(userKey, JSON.stringify(userData), { expires: dayExpire });

    inputs.forEach(input => input.value = '');
    showNotification();
}

function showCookies() {
    console.log(document.cookie);
}

function showLocalStorage() {
    let keys = Object.keys(localStorage);

    for(let key of keys) {
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

function setCookie(name, value, options = {}) {

    let expires = options.expires;

    if (typeof expires === 'number' && expires) {
        let date = new Date();
        date.setTime(date.getTime() + (expires * 1000));
        expires = options.expires = date;
    }

    if (expires && expires.toUTCString()) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let propertyName in options) {
        cookieString += '; ' + propertyName;
        let propertyValue = options[propertyName];

        if (propertyValue !== true) {
            cookieString += '='+propertyValue;
        }
    }

    document.cookie = cookieString;
}

function showNotification() {
    let notification = document.createElement('p');

    notification.className = 'successNotification';
    notification.textContent = 'User data is saved';

    document.querySelector('form').after(notification);

    setTimeout(() => notification.remove(), 3000);
}

saveUserDataButton.addEventListener('click', saveUserData);
showCookiesButton.addEventListener('click', showCookies);
showLocalStorageButton.addEventListener('click', showLocalStorage);