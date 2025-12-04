task = 'task № 20.1';
console.log(task);

    let tasks = [];

    function addTaskToDOM(task) {
        const li = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center todo-item').attr('id', task.id);
        const div = $('<div>');
        const input = $('<input type="checkbox" class="mr-2">').prop('checked', task.done);
        const span = $('<span>').addClass('todo-item__description').text(task.text).css('cursor', 'pointer');
        const button = $('<button>').addClass('btn btn-sm btn-danger todo-item__delete').text('Видалити');

        div.append(input).append(span);
        li.append(div).append(button);
        $('.js--todos-wrapper').append(li);
    }

    $('.js--form').submit(function (event) {
        event.preventDefault();
        const value = $('.js--form__input').val().trim();
        if (!value) return;

        const newTask = {
            id: Date.now(),
            text: value,
            done: false
        };

        tasks.push(newTask);
        addTaskToDOM(newTask);
        $('.js--form__input').val('');
    });

    $('.js--todos-wrapper').on('click', '.todo-item__delete', function () {
        const parentLi = $(this).closest('.todo-item');
        const id = Number(parentLi.attr('id'));
        tasks = tasks.filter(task => task.id !== id);
        parentLi.remove();
    });

    $('.js--todos-wrapper').on('click', '.todo-item__description', function () {
        const text = $(this).text();
        $('#modalText').text(text);
        $('#todoModal').modal('show');
    });

    $('.btn-secondary').on('click', function () {
        $('#todoModal').modal('hide');
    });

    $('.cross').on('click', function () {
        $('#todoModal').modal('hide');
    });

