// 1 task

let urls = [
    'user.json',
    'guest.json',
    'statistics.json',
    'tasks.json'
];

var result = [];

async function getData() {
    urls.forEach(async (url) => {
        await func(url);
    });
    console.log(result);
    
}
getData();

async function func(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let jsonResponse = await response.json()
                .then(jsonResponse => result.push(jsonResponse));
        }
    } catch (error) {
        console.log(error);
    }
}

// 2 task

function duplicate(array){
   array.forEach(a => array.push(a));
    console.log(array);
}
duplicate([1,2,3,4,5]);

var array = [1,2,3,4,5];  // other option
var str = array.join('');
var repeatArray = str.repeat(2).split('');
var newArray = repeatArray.map(parseFloat); 
console.log(newArray);

// 3 task

function greet(person) {
    if (person.name == 'amy') {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}
console.log(greet({name: 'amy'}));

// 4 task

function flatten(ar){
    var array = ar.join('');
    array = array.replace(/,/g, '');
    array = array.split('');
    array = array.map(parseFloat);
    return array
}

console.log(flatten([1,[2,[3,4,[5,6,7]]]]));
console.log(flatten([1,2]));
console.log(flatten([[1,2],[3,4]]));
