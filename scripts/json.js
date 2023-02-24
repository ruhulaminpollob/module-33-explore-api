const user={
    id:1,
    name:'Oyaliullah',
    friends:['abul', 'babul', 'kabul'],
    isMarried:true,
};


console.log(user);
const jsonString=JSON.stringify(user);
console.log(jsonString);
console.log(typeof(jsonString));
const jsonObj=JSON.parse(jsonString);
console.log(jsonObj);