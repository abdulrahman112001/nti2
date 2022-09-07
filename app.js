




// // const fs = require('fs')

// // fs.writeFileSync('notes.txt','Hello')


// const fs = require('fs')

// fs.writeFileSync('node.txt','Hello world')

// console.log(fs.readFileSync('node.txt').toString())

// fs.appendFileSync('node.txt', ' data to atdhahtbasrth');

// console.log(fs.readFileSync('node.txt').toString())


// //2- our own modules 

// const x =require('./data')
// console.log(x.fname)
// console.log(x.lastNmae)
// console.log(x.sum(9,2))
// console.log(x.opj)

// // print()



// /*

// - npm init 
// - npm i --> in case module was deleted (return node_modules)
// - 

// */

// var validator = require('validator');

// console.log(validator.isEmail('food@br.com'))


// /////////////////////////////////////////////////////

// // console.log(process.argv) //allow me to deal input terminal 


// // if (process.argv[2] === 'add'){
// //     console.log('add item')
// // }else{
// //     console.log('error')
// // }



// if (process.argv[2].toLowerCase() === 'name'){
//     console.log('correct')
// }else if (process.argv[2] === 'age'){
//     console.log('age correct')
// }else {
//     console.log('error')
// }

///////////////////
// --key = "value"  ,,  --key=20 ,,, --key=true


// -- yargs --> allow me to take input terminal and pars parrameter

// const { command } = require('yargs')
const yargs= require('yargs')
// // Version1
// // Add command 

// yargs.command({
//     command :'add',
//     dercribe : 'Add note', // comment 
//     // option that command deal with
//     builder: {
//         title:{
//             describe : 'this is tittle description in add command',
//             type : 'string',
//             demandOption : true
//         },
//         body:{
//             describe:'this  is body description in add command',
//             type:'string',
//             demandOption:true,
//         }
//     },

//     // logic that will be executed when i call this command
//     handler : ()=>{
   
//         console.log('add note >>' + yargs.argv.title + yargs.argv.body)
//     }
// })
// //delete
// yargs.command({
//     command:'delete',
//     describe:'enter item your delete note',
//     builder:{
//         title:{
//             describe:'enter item your delete note',
//             type : 'string',
//             demandOption:true,

//         }

//     },
//     handler :()=>{
//         console.log(yargs.argv.title)
//     }
// })

// //read

// yargs.command({
//     command : 'read',
//     describe:'reading',
//     builder:{
//         title:{
//             describe : 'enter your item  reading title',
//             type : 'string',
//             demandOption:true,

//         }

//     },
//     handler:()=>{
//         console.log('reading Now' + yargs.argv.title)
//     }
// })

// // list

// yargs.command({
//     command : 'item',
//     describe:'list',
//     // builder:{
//     // },
//     handler:()=>{
//         console.log('list')
//     }
// })

// console.log(yargs.argv)

// Version2





//version 3 

const notes = require('./notes')

yargs.command({
    command :'add',
    dercribe : 'Add note', // comment 
    // option that command deal with
    builder: {
        title:{
            describe : 'this is tittle description in add command',
            type : 'string',
            demandOption : true
        },
        body:{
            describe:'this  is body description in add command',
            type:'string',
            demandOption:true,
        }
    },

    // logic that will be executed when i call this command
    handler : ()=>{
   
        // console.log('add note >>' + yargs.argv.title + yargs.argv.body)
        notes.addNote(yargs.argv.title,yargs.argv.body)
    }
})
//delete
yargs.command({
    command:'delete',
    describe:'enter item your delete note',
    builder:{
        title:{
            describe:'enter item your delete note',
            type : 'string',
            demandOption:true,

        }

    },
    handler :()=>{
        // console.log(yargs.argv.title)
        notes.removeNotes(yargs.argv.title)
    }
})

//read

yargs.command({
    command : 'read',
    describe:'reading',
    builder:{
        title:{
            describe : 'enter your item  reading title',
            type : 'string',
            demandOption:true,

        }

    },
    handler:()=>{
        // console.log('reading Now' + yargs.argv.title)
        notes.readItem(yargs.argv.title)
    }
})

// list

yargs.command({
    command : 'list',
    describe:'list',
    // builder:{
    // },
    handler:()=>{
        // console.log('list')
        notes.list(yargs.argv)
    }
})


yargs.parse()


///////////////////////////////////////

