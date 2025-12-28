const TodoList = () => {
    return (
        <div class="container mt-4">
            <h1 class="mb-4">ToDo List</h1>

            <form class="js--form form-inline mb-3">
                <input type="text" name="value" class="form-control mr-2 js--form__input" placeholder="Нова задача" required></input>
                <button class="btn btn-primary">Додати</button>
            </form>
            <ul class="list-group js--todos-wrapper">
                <li class="list-group-item d-flex justify-content-between align-items-center todo-item">
                    <div>
                        <input type="text" name="value" class="form-control mr-2 js--form__input" placeholder="Text" required></input>
                    </div>
                    <button class="btn btn-sm btn-danger todo-item__delete">Видалити</button>
                </li>

            </ul>
        </div>
        
    )
}    

export default TodoList;