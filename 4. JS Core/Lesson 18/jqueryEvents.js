function testClick() {
    $(function () {
        $('button').bind('click', function () {
            alert('You have clicked on super button');
            $(this).wrap('<div id="wrapper" style="background-color: deepskyblue"></div>');
        });
    });
}

$(function () {
   $('button').first().click(function () {
        $(this).css('background-color', 'green');
   });

   $('button').last().click(function () {
        $('button').first().css('background-color', 'yellow');
   });
});