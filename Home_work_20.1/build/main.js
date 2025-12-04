task = 'task № 21.1';
console.log(task);
var tasks = [];
function addTaskToDOM(task) {
  var li = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center todo-item').attr('id', task.id);
  var div = $('<div>');
  var input = $('<input type="checkbox" class="mr-2">').prop('checked', task.done);
  var span = $('<span>').addClass('todo-item__description').text(task.text).css('cursor', 'pointer');
  var button = $('<button>').addClass('btn btn-sm btn-danger todo-item__delete').text('Видалити');
  div.append(input).append(span);
  li.append(div).append(button);
  $('.js--todos-wrapper').append(li);
}
$('.js--form').submit(function (event) {
  event.preventDefault();
  var value = $('.js--form__input').val().trim();
  if (!value) return;
  var newTask = {
    id: Date.now(),
    text: value,
    done: false
  };
  tasks.push(newTask);
  addTaskToDOM(newTask);
  $('.js--form__input').val('');
});
$('.js--todos-wrapper').on('click', '.todo-item__delete', function () {
  var parentLi = $(this).closest('.todo-item');
  var id = Number(parentLi.attr('id'));
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  parentLi.remove();
});
$('.js--todos-wrapper').on('click', '.todo-item__description', function () {
  var text = $(this).text();
  $('#modalText').text(text);
  $('#todoModal').modal('show');
});
$('.btn-secondary').on('click', function () {
  $('#todoModal').modal('hide');
});
$('.cross').on('click', function () {
  $('#todoModal').modal('hide');
});