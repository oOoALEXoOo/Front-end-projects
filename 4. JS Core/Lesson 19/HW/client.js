let getHTTPMethodButton = $('.getHTTPMethod');
let postHTTPMethodButton = $('.postHTTPMethod');

$('input[type="text"]').each(function () {
    $(this).focus(function () {
        if ($(this).hasClass('typingError')) {
            $(this).removeClass('typingError');
        }
        $(this).val('');
    });
});

function getCurrentSpaceOf(element) {
    let currentSpace = element.css('margin-top');
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
    let receivedObj = response;

    for (let key in receivedObj) {
        if (receivedObj.hasOwnProperty(key)) {
            console.log(`${key}: ${receivedObj[key]}\n`);
        }
    }
}

function isEmptyFields(fields) {
    let status = true;

    fields.each(function () {
        if (!$(this).val()) {
            $(this).addClass('typingError');
            $(this).val('field is empty');
            status = false;
        }
    });

    return status;
}

function isFieldInteger(ageField) {
    if (/[^0-9]/g.test(ageField.val())) {
        ageField.addClass('typingError');
        ageField.val(`age field isn't integer number`);

        return false;
    }
    return true;
}

function isFieldInRange(ageField) {
    if (ageField.val() < 1 || ageField.val() > 100) {
        ageField.addClass('typingError');
        ageField.val('incorrect filling the age');

        return false;
    }
    return true;
}

function sendFormByGetHTTPMethod() {
    let userData = {};
    let currentFormClassName = $('.regFormWithGetMth').attr('class');
    let inputs = $('.' + currentFormClassName + ' input[type="text"]');
    let ageInput = $('.' + currentFormClassName + ' input[name="age"]');

    if (!isEmptyFields(inputs)) return;
    if (!isFieldInteger(ageInput)) return;
    if (!isFieldInRange(ageInput)) return;

    inputs.each(function () {
        userData[$(this).attr('name')] = $(this).val();
    });

    $.get({
        url: '/formGet?fName=' + userData.fName + '&lName=' + userData.lName + '&age=' + userData.age + '&address=' + userData.address,
        notification: $('<p></p>'),
        elementAfterNotification: $('form + h1'),
        elementBeforeNotification: $('.' + currentFormClassName + ' input[type=button]')
    })
        .done(function (data) {
            this.notification.addClass('successNotification');
            this.notification.text('Registration is successfully completed');

            showReceivedData(data);
        })
        .fail(function (e) {
            this.notification.addClass('errorNotification');
            this.notification.text(`Error ${e.status}: ${e.statusText}`);
        })
        .always(function () {
            inputs.each(function() {
                $(this).val('');
            });
            this.elementBeforeNotification.after(this.notification);

            let compensatedSpace = this.notification.outerHeight();
            let currentSpace = getCurrentSpaceOf(this.elementAfterNotification);

            this.elementAfterNotification.css('margin-top', currentSpace - compensatedSpace);

            let currentSpaceUpd = getCurrentSpaceOf(this.elementAfterNotification);

            new Promise(resolve => {
                setTimeout(() => resolve(this.notification.remove()), 3000)
            })
                .then(() => {
                    this.elementAfterNotification.css('margin-top', currentSpaceUpd + compensatedSpace);
                });
        });
}

function sendFormByPostHTTPMethod() {
    let userData = {};
    let currentForm = $('.regFormWithPostMth');
    let inputs = $('.' + currentForm.attr('class') + ' input[type="text"]');
    let ageInput = $('.' + currentForm.attr('class') + ' input[name="age"]');

    if (!isEmptyFields(inputs)) return;
    if (!isFieldInteger(ageInput)) return;
    if (!isFieldInRange(ageInput)) return;

    inputs.each(function () {
        userData[$(this).attr('name')] = $(this).val();
    });

    // $.ajax({
    //     url: '/formPost',
    //     type: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify(userData),
    //     dataType: 'json'
    // });

    $.post({
        url: '/formPost',
        data: userData,
        notification: $('<p></p>'),
        elementBeforeNotification: $('.' + currentForm.attr('class') + ' input[type=button]')
    })
        .done(function (data) {
            this.notification.addClass('successNotification');
            this.notification.text('Registration is successfully completed');

            showReceivedData(data);
        })
        .fail(function (e) {
            this.notification.addClass('errorNotification');
            this.notification.text(`Error ${e.status}: ${e.statusText}`);
        })
        .always(function () {
            inputs.each(function() {
                $(this).val('');
            });
            this.elementBeforeNotification.after(this.notification);

            setTimeout(() => this.notification.remove(), 3000);
        });
}

getHTTPMethodButton.click(sendFormByGetHTTPMethod);
postHTTPMethodButton.click(sendFormByPostHTTPMethod);