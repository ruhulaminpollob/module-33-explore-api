function user2(data) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

function displayUser(data) {
    // for (const obj of data) {
    //     console.log(obj.email);
    // }
    const ul =document.getElementById('list-item')
    for (const obj of data) {
        const li =document.createElement('li');
        li.innerText=obj.email;
        ul.appendChild(li)
    }

}