let countGoalsButton = $('.countGoals');

$(function () {
    $('.draggableBall').draggable().mousedown(function cloneable (event) {
        $(event.target).css('zIndex', 1).clone().appendTo('body')
            .css('zIndex', -1).draggable().mousedown(cloneable);
    });

    $('.footballGoal').data('goalCounter', 0).droppable({
        drop: event => {
            for (let i = 0; i < 2; $('.scored').fadeToggle(500), i++);
            $(event.target).data('goalCounter', $(event.target).data('goalCounter') + 1);
        }
    });
});

countGoalsButton.click(function () {
    let goalCounter = $('.footballGoal').data('goalCounter');
    alert('Goals scored are ' + goalCounter);
});