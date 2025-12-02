task = 'task № 20.1';
console.log(task);

const modal = new bootstrap.Modal($('#todoModal'));

$('.todo-item').on('click', function () {
    let text = $(this).text();
    $('#modalText').text(text);
    modal.show();
})
