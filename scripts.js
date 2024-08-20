document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const updateButton = document.createElement('button');
            updateButton.textContent = 'Atualizar';
            updateButton.className = 'update';
            li.appendChild(updateButton);

            updateButton.addEventListener('click', () => {
                const inputUpdated = document.createElement('input')
                li.append(inputUpdated)
                inputUpdated.placeholder = "Digite o novo texto para essa tarefa"
                inputUpdated.addEventListener("keypress", (e) => {
                    if (e.key === 'Enter') {
                        li.textContent = inputUpdated.value
                        const updateButton = document.createElement('button');
                        updateButton.textContent = 'Atualizar';
                        updateButton.className = 'update';
                        li.appendChild(updateButton);
                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Deletar';
                        deleteButton.className = 'delete';
                        li.appendChild(deleteButton);
                        deleteButton.addEventListener('click', () => {
                            todoList.removeChild(li);
                        });
                    }
                })
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.className = 'delete';

            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);
            todoInput.value = '';
            todoInput.focus();
        }
    }
});
