function showHide() {
    $(function () {
        $('button#show').click(function () {
            $('ul').show();
        });

        $('button#hide').click(function () {
            $('ul').hide();
        });

        $('button#toggle').click(function () {
            $('ul').toggle();
        });

        $('button#slideUp').click(function () {
            $('ul').slideUp();
        });

        $('button#slideDown').click(function () {
            $('ul').slideDown();
        });

        $('button#slideToggle').click(function () {
            $('ul').slideToggle(3000);
        });

        $('button#fadeIn').click(function () {
            $('img#nature').fadeIn('slow', function () {
                alert('Nature is shown');
            });
        });

        $('button#fadeOut').click(function () {
            $('img#nature').fadeOut(2000, function () {
                alert('Nature is hidden');
            });
        });

        $('button#fadeTo').click(function () {
            $('img#nature').fadeTo(2000, 0.5);
        });
    });
}

showHide();
