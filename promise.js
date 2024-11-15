

// CREATION OF PROMISE

// var myPromise = new Promise(function(resolve,reject){
//     setTimeout(function (){
//         var success = false;

//     if (success){
//         resolve("data is successfully processed")
//     }
//     else{
//         reject("promise rejected")
//     }
// },5000)

// })

// CONSUMING OF PROMISE

// myPromise
// .then((out)=>{
//     console.log(out);
// }) 
// .catch((error)=>{
//     console.log(error);
// })


// var myname = new Promise(function(resolve,reject){
//     setTimeout(function (){
//         var success = true;

//     if (success){
//         resolve("suraj")
//     }
//     else{
//         reject("error")
//     }
// },2000)

// })

// myname
// .then((out)=>{
//     console.log(out);
// }) 
// .catch((error)=>{
//     console.log(error);
// })





// var myPromise = new Promise((resolve,reject)=>{
//     setTimeout(() =>{ resolve("promise resolved1")},5000)
// })

// var myPromise1 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{resolve("promise resolve2")},8000)
// })
// var myPromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{ reject("promise rejectd3")},2000)
// })



// Promise.allSettled([myPromise,myPromise1,myPromise2])
// .then((output)=>{
//     console.log(output);
// })
// .catch((error)=>{
//     console.log(error)
// })


var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("promise resolved1") }, 2000)
})
myPromise
    .then((out) => {
        console.log(out);
        return "heyy"
    })
    .then((out) => {
        console.log(out);
        return "whatsip"
    })
    .then((out) => {
        console.log(out);
    })
    .catch((error) => {
        console.log(error)
    })