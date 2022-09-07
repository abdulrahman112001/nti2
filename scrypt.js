


/*
- ASYNC : 
- pROMISEE
- Async





callback -- > sync / Async
*/


console.log("first")


const message = ()=> console.log('this message is shown ')

setTimeout(()=>{
    console.log('this msg ')
},5000)


setTimeout(message,3000)

console.log("last")

const mesg = function (){
    console.log("a7a")
}
mesg()



////////////////////
// callback hess 

// promises  === > async 

/*
cases -- > resolve ( ) -- > then 
reject -- > eroor  -- > catch

*/


// let proj = new Promise((resolve,reject)=>{
//     if (1>2){
//         resolve('right')
//     }

//     reject('erorr')
// })

// proj.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// console.log("22222222222222222222")


// let test = new Promise((resolve,reject)=>{
//     if (3 > 2){
//         resolve("right")
//     }
//     reject("error")
// })

// test.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


///////////////////////

//async & await 

// async ==> asynchrouns function return promise 
// await --> wait promise 


// let feetchuser = async ()=>{
//     try{
//         // return promise 
//         const res = await fetch ('https://jsonplaceholder.typicode.com/users')
//         // return promise 
//         const data = await res.json()
//         console.log(data)

//     }
//     catch(e){
//         alert(e)
//     }
// }

// feetchuser()

// let fetchUser = async ()=>{

//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await res.json()
//         console.log(data)
//     }
//     catch(e){
//        console.log(e)
//     }
// }

// fetchUser()


// console.log("arsbfvadfsbadfb")


//////fetch by promise 


let fetchuserpromis = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data =>data.json())
    .then(data =>console.log(data))
    .catch((e)=>{
        alert(e)
    })

}

fetchuserpromis()



// callback hall 

setTimeout(()=>{
    console.log('this call back message ')
    setTimeout(()=>{console.log('col back here 2')
    setTimeout(()=>{console.log('col back here 3')
    },4000)
},2000)
},1000)



