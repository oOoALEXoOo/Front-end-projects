$(document).ready(function () {
    $('button#getMethod').click(function () {
        $.get('/userGet?userName=Vitaliy&userAge=25', function (data) {
            $('#someServerData').html(data);
            console.log('Data is loaded by GET');
        });
    });

    $('button#postMethod').click(function () {
        // $.post('/userPost', { userName: 'Petro', userAge: 33 }, function (data) {
        //     $('#someServerData').html(data);
        //     console.log('Data is loaded by POST');
        // });

        let formData = {
            userName: 'Petro',
            userAge: 33
        }

        $.ajax({
            type: "POST",
            json: true, // added this
            url: '/userPost',
            'Content-Type': 'application/x-www-form-urlencoded',
            data: formData
        })
            .success(function (data) {
                $('#someServerData').html(data);
                console.log('Data is loaded by POST');
            });
    });
});