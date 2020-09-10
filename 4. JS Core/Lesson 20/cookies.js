function setCookie(name, value, options) {
    options = options || {};

    let expires = options.expires;

    if (typeof expires === 'number' && expires) {
        let date = new Date();
        date.setTime(date.getTime() + expires * 1000);
        expires = options.expires = date;
    }

    if (expires && expires.toUTCString()) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let cookieString = name + '=' + value;

    for (let propertyName in options) {
        cookieString += '; ' + propertyName;
        let propertyValue = options[propertyName];

        if (propertyValue !== true) {
            cookieString += '='+propertyValue;
        }
    }

    document.cookie = cookieString;
}

function getCookieByName(name) {
    let regexString = "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)";
    let matches = document.cookie.match(new RegExp(regexString));

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookieByName(name) {
    setCookie(name, '', { expires: -1 });
}