const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'RSH 1'); // RSH data is an array of objects like this {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
      data.forEach((todo) => addTodoToDOM(todo)); // Since data is an array, we can use forEach
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo'); /// RSH This class is being added to allow us to target the 'done'  dark background toggle
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id); // RSH We want to add a custom attribute to store the id. Custome attributes should be prefixed with 'data-' which allows the use of a property called dataset line 67

  if (todo.completed) {
    //RSH If the todo item's completed property is true, we want to make its background darker
    div.classList.add('done'); // This is done by adding the class 'done'
  }

  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault(); // RSH The preventDefault() method cancels the event if it is cancelable,

  const newTodo = {
    // newTodo is the post we want to send to the server using fetch below
    title: e.target.firstElementChild.value, // RSH This submit event occurred in the form which has the button
    completed: false, // The first ELEMENT NODE of the form is the input 'Add Todo...'
  };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json()) // RSH https://developer.mozilla.org/en-US/docs/Web/API/Response/json
    // ... The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
    .then((data) => addTodoToDOM(data)); // Here that stream gets fed into 'data' and gets added to the DOM as out new object
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');

    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();
