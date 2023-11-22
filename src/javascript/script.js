$(document).ready(function () {
    $('.edit-button').on('click', function () {
        var task = $(this).closest('.task');
        task.find('.progress').addClass('hidden');
        task.find('.task-description').addClass('hidden');
        task.find('.task-actions').addClass('hidden');
        task.find('.edit-task').removeClass('hidden');
    });

    $('.progress').on('click', function () {
        if ($(this).is(':checked')) {
            $(this).addClass('done');
        } else {
            $(this).removeClass('done');
        }
    });
});