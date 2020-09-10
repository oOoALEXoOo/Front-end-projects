let getDayAft20YearsButton = $('.getDayAft20Years');
let dateOfBirthInput = $('input[name="dateOfBirth"]');

let getCursorPosition = input => input[0].selectionStart;
let setCursorPosition = (input, pos) => input[0].setSelectionRange(pos, pos);

$('input[type="text"]').each(function () {
    $(this).on('focus', function () {
        if ($(this).hasClass('typingError')) {
            $(this).removeClass('typingError');
            $(this).val('');
        }
    });
});

function isEmptyDate(dateField) {
    let status = true;

    if (!dateField.val() || dateField.hasClass('typingError')) {
        dateField.addClass('typingError');
        dateField.val('field is empty');
        status = false;
    }

    return status;
}

function isValidDate(dateField) {
    let validDate = new RegExp("^(0[1-9]|[12][0-9]|3[01])-([A-S][a-y]{2})-(19|20)[0-9]{2}$");

    if (!validDate.test(dateField.val())) {
        dateField.addClass('typingError');
        dateField.val('date is entered in incorrect form');

        return false;
    }
    return true;
}

function isValidDateMonth(dateField) {
    let dateMonth = dateField.val().split('-')[1];
    let monthsAbbr = [
        'Jan', 'Feb',
        'Mar', 'Apr',
        'May', 'Jun',
        'Jul', 'Aug',
        'Sep', 'Oct',
        'Nov', 'Dec'
    ];

    if (!monthsAbbr.includes(dateMonth)) {
        dateField.addClass('typingError');
        dateField.val('incorrect abbreviation of the month');

        return false;
    }
    return true;
}

function showDayAft20Years(day) {
    let lastElement = $('.registrationForm input').last(), notification;

    if (!lastElement.next()[0]) {
        notification = $('<p></p>');
        notification.addClass('successNotification');
        lastElement.after(notification);
    } else {
        notification = lastElement.next();
    }

    notification.text('The day of entered date after 20 years is: ' + day);
}

function getDayAft20Years() {
    let currentForm = $('.registrationForm');
    let dateInput = $('.registrationForm input[name="dateOfBirth"]');

    if (!isEmptyDate(dateInput) || !isValidDate(dateInput) || !isValidDateMonth(dateInput)) {
        shakeTheForm();
        return;
    }

    let dateOfBirth = moment(dateInput.val());

    dateOfBirth.add('year', 20);

    showDayAft20Years(dateOfBirth.format('dddd'));


    function shakeTheForm() {
        let notification = $('<p></p>');
        notification.addClass('errorNotification');
        notification.text('Entered date is incorrect');

        currentForm.effect('shake', {times: 2}, 500, function () {
            $(this).after(notification);

            setTimeout(() => notification.hide(), 2500);
        });
    }
}

dateOfBirthInput.on('click', function () {
    if (!$(this).val()) {
        $(this).val('__-___-____');
        setCursorPosition($(this), 0);
    }
});

dateOfBirthInput.on('keydown', function (event) {
    let currentPosition = getCursorPosition($(this));
    let validDateSymbols = new RegExp("[0-9a-zA-Z]");
    let dateValue = $(this).val();

    if (validDateSymbols.test(event.key) && event.key.length === 1 &&
        currentPosition < dateValue.length && dateValue[currentPosition] !== '-') {
        $(this).val(dateValue.replaceAt(currentPosition, event.key));

        if (dateValue[currentPosition + 1] === '-') {
            setCursorPosition($(this), currentPosition + 2);
        } else {
            setCursorPosition($(this), currentPosition + 1);
        }
    } else if (event.key === 'Backspace') {
        if (currentPosition && dateValue[currentPosition - 1] !== '-') {
            $(this).val(dateValue.replaceAt(currentPosition - 1, '_'));

            setCursorPosition($(this), currentPosition - 1);
        } else if (dateValue[currentPosition - 1] === '-') {
            $(this).val(dateValue.replaceAt(currentPosition - 2, '_'));

            setCursorPosition($(this), currentPosition - 2);
        }
    } else if (event.key === 'Delete') {
        let deletingSymbolPosition;

        if ((deletingSymbolPosition = dateValue.search(validDateSymbols)) !== -1) {
            if (deletingSymbolPosition < currentPosition) {
                let valueSearchFrom = dateValue.slice(currentPosition);

                if ((deletingSymbolPosition = valueSearchFrom.search(validDateSymbols)) !== -1) {
                    valueSearchFrom = valueSearchFrom.replaceAt(deletingSymbolPosition, '_');

                    $(this).val(dateValue.slice(0, currentPosition) + valueSearchFrom);
                }
            } else {
                $(this).val(dateValue.replaceAt(deletingSymbolPosition, '_'));
            }

            setCursorPosition($(this), currentPosition);
        }
    } else if (event.key === 'ArrowLeft') {
        if (dateValue[currentPosition - 1] === '-') {
            setCursorPosition($(this), currentPosition - 2);
        } else if (currentPosition) {
            setCursorPosition($(this), currentPosition - 1);
        }
    } else if (event.key === 'ArrowRight') {
        if (dateValue[currentPosition + 1] === '-') {
            setCursorPosition($(this), currentPosition + 2);
        } else if (currentPosition < dateValue.length) {
            setCursorPosition($(this), currentPosition + 1);
        }
    }

    return false;
});

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

getDayAft20YearsButton.on('click', getDayAft20Years);