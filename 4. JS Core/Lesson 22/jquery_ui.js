$(function () {
    $('#slider').slider();

    let spinner = $('#spinner').spinner();

    $('#getSpinnerValue').on('click', function () {
        alert(spinner.spinner('value'));
    });

    $(document).tooltip();

    $('#tabs').tabs();

    $('#runEffect').on('click', function () {
        $('#effects').addClass('customAddClass', 2000, function () {
            setTimeout(() => $('#effects').removeClass('customAddClass'), 2500);
        });
    });

    $('#customEffect').on('click', function () {
        runCustomEffect();
        return false;
    });
});

function runCustomEffect() {
    let selectedEffect = $('#effectTypes').val();
    let options = {};

    if (selectedEffect === 'scale') {
        options.percent = 50;
    } else if (selectedEffect === 'transfer') {
        options.to = '#customEffect';
        options.className = 'UI-effects-transfer';
    } else if (selectedEffect === 'size') {
        options.to = {
            width: 200,
            height: 60
        };
    }

    $('#effects').effect(selectedEffect, options, 500, function () {
        setTimeout(() => $('#effects').removeAttr('style').hide().fadeIn(), 1000);
    });
}