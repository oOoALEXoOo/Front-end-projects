function sendDataByGetMethod() {
    let userName = document.getElementById("userNameGet").value;
    let userAge = document.getElementById("userAgeGet").value;

    let url = '/userGet?userName=' + userName + '&userAge=' + userAge;

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };

        xhr.send();
    })
        .then(
            response => {
                alert(response);
                return response;
        },  error => alert(error)
        )
        .then(
            response => console.log(response),
            error => alert(error)
        );
}

function sendDataByPostMethod() {
    let userData = {
        userName: document.getElementById("userNamePost").value,
        userAge: document.getElementById("userAgePost").value
    };

    let url = '/userPost';

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };

        xhr.send(JSON.stringify(userData));
    })
        .then(
            response => alert(response),
            error => alert(error)
        );
}