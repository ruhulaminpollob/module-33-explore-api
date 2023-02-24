// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())  // .json is smeller to JSON.parse()
//       .then(json => console.log(json))


const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
// .then(Response => Response.json())
// .then(json => console.log(json))


function callJson() {
      fetch(url)
            .then(Response => Response.json())
            .then(json => console.log(json))
}