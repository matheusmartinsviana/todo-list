document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addItem);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    todoList.addEventListener('click', handleListClick);

    function addItem() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                ${todoText}
                <div class="buttons">
                    <button class="update">Atualizar</button>
                    <button class="delete">Deletar</button>
                </buttons>
            `;
            todoList.appendChild(li);
            todoInput.value = '';
            todoInput.focus();
        }
    }

    function handleListClick(e) {
        const target = e.target;
        const li = target.closest('li');
        if (target.classList.contains('update')) {
            handleUpdate(li);
        } else if (target.classList.contains('delete')) {
            li.remove();
        }
    }

    function handleUpdate(li) {
        const currentText = li.firstChild.textContent.trim();
        li.innerHTML = `
            <input type="text" placeholder="Digite o novo texto para essa tarefa" value="${currentText}">
            <div class="buttons">
                <button class="confirm">Confirmar</button>
                <button class="delete">Deletar</button>
            </div>
        `;
        const inputUpdated = li.querySelector('input');
        inputUpdated.focus();
        inputUpdated.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const newText = inputUpdated.value.trim();
                if (newText !== '') {
                    li.innerHTML = `
                        ${newText}
                        <div class="buttons">
                            <button class="update">Atualizar</button>
                            <button class="delete">Deletar</button>
                        </div>
                    `;
                }
            }
        });
        const confirmButton = li.querySelector('.confirm');
        confirmButton.addEventListener('click', () => {
            const newText = inputUpdated.value.trim();
            if (newText !== '') {
                li.innerHTML = `
                    ${newText}
                    <div class="buttons">
                        <button class="update">Atualizar</button>
                        <button class="delete">Deletar</button>
                    </div>
                `;
            }
        });
    }
});
