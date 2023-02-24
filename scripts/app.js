
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}


function user() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(userData=>data(userData))
}

function data(userData) {
    console.log(userData);
}