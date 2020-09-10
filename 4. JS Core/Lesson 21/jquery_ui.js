$(function () {
    $('#draggable').draggable();

    $('#droppable').droppable({
        drop: (event, ui) => {
            $(this)
                .addClass("ui-state-highlight")
                .find('#droppable p')
                .html('Dropped!');
        }
    });

    $('#resizable').resizable({
        ghost: true
    });

    $('#sortable').sortable().disableSelection();

    $('#accordion').accordion();

    let countries = [
        'Ukraine',
        'USA',
        'Spain',
        'Italy',
        'Egypt',
        'Latvia',
        'Finland',
        'Sweden',
        'Estonia',
        'Canada',
        'Mexico',
        'Germany'
    ];

    $('#autocomplete').autocomplete({
        source: countries
    });

    $('#datepicker').datepicker();

    $('#menu').menu();

    $('#progressbar').progressbar({
        value: 70
    });
});