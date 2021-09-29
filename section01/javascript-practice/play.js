// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// age = 30;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return (
//         'Name is ' + 
//         userName + 
//         ', age is ' + 
//         userAge + 
//         ' and the user has hobbies: ' + 
//         userHasHobby
//     );
// }

// Arrow Fuction Further
// --------------------------------------

// // Long version
// const add = (a,b) => {
//     return a + b;
// } 

// // Abbreviated version
// const addAbbreviated = (a, b) => a + b;

// // If there's only one parameter no parenthesis are needed
// const addOne = a => a+1;

// // Leave empty parenthesis for no parameters
// const addRandom = () => 1+4;

// console.log(addRandom());
// console.log(summarizeUser(name, age, hasHobbies));


// // Object Example
// // --------------------------------------

// const person = {
//     name: 'Max',
//     age: 29,
//     greet(){
//         console.log('Hi, I am ' + this.name);
//     }
// }

// // Destructuring syntax {object parameter}
// const printName = ({name}) => {
//     console.log(name);
// }

// printName(person);

// spread operator
// const copiedPerson = {...person};
// console.log(copiedPerson);

// person.greet();


// Array Example
// --------------------------------------

// const hobbies = ['Sports', 'Cooking'];

// // Array Destructor
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // For loop using arrays
// for (let hobby of hobbies){
//     console.log(hobby);
// }

// // .map function
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// // hobbies.push('Programming');
// // console.log(hobbies);

// // spread operator
// const copiedArray = [...hobbies];

// console.log(copiedArray);

// // rest operator used so that any number of arguments can be sent
// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray)

// Async code doesn't trigger immediatley
const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData()
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);