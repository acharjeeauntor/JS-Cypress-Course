// console.log(1)
// console.log(2)

//Blocking Code vs Non Blocking

// Bloking Code
// 1. signin to the appliation -1
// 2. call the DB and wait until response/result is shown -5
// 3. Result is showing in the DOM-1
// 4. Do some other action-2
// 5. Logout-1

// 10 sec

// // Non Bloking Code
// 1. signin to the appliation-1
// 2. call the DB and when the response will come show the result-3
// 3. Do & Continue some other action-1
// 4. Result is showing in the DOM-1
// 5. Logout-1

// 7 sec


// Old Promise way
// function myFunc(){
//     return Promise.resolve("result")
// }

// myFunc().then(x=>{
//     console.log(x)
// }).catch(e=>{
//     console.log(e)
// })


// // async,await
// async function myFuc1(){
//     return "Hello"
// }
// console.log(await myFuc1())


// Package.json file



// function, string as Param, covt first letter, uppercase

// function myfunc(text){
// var arrayOfWord  = text.split(" ")
// var newArray=[]
// console.log(arrayOfWord)
// for(var i=0;i<arrayOfWord.length;i++){
//     var filteredItem = arrayOfWord[i].charAt(0).toUpperCase()+arrayOfWord[i].slice(1)
//     newArray.push(filteredItem)
// }
// return newArray.join(' ')

// }

// console.log(myfunc("how are you"))