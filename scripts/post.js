

function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>createPost(data))
}

function createPost(post) {
    const addPost =document.getElementById('post-container');
    for (const obj of post) {
        const div=document.createElement('div');
        div.classList.add('post')
        div.innerHTML=`
        <h4>Id:${obj.id}</h4>
        <h5>Post Title:${obj.title}</h5>
        <h6>Description:${obj.body}</h6>
        `
        addPost.appendChild(div)
        console.log(obj);
    }
}


postData()