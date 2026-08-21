 const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('#task');
const taskCount = document.querySelector('#taskCount');

let count = 0;

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const text = input.value.trim();

    // Empty task ko add nahi karna
    if (text === "") {
        return;
    }

    // Task container
    const parent = document.createElement('div');
    parent.className = 'task-item';

    // Task text
    const task = document.createElement('span');
    task.textContent = text;

    // Done button
    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    // Buttons + task ko parent ke andar daalna
    parent.append(task, doneButton, editButton, deleteButton);

    // Parent ko allTask ke andar daalna
    allTask.append(parent);

    // Counter
    count++;
    taskCount.textContent = `${count} Tasks`;

    // DONE
    doneButton.addEventListener('click', () => {

        task.style.textDecoration = 'line-through';
        task.style.color = '#22c55e';

    });

    // EDIT
    editButton.addEventListener('click', () => {

        const newText = prompt("Edit your task:", task.textContent);

        if (newText !== null && newText.trim() !== "") {
            task.textContent = newText.trim();
        }

    });

    // DELETE
    deleteButton.addEventListener('click', () => {

        parent.remove();

        count--;

        taskCount.textContent = `${count} Tasks`;

    });

    // Input clear
    form.reset();

});