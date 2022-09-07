
const fs =require('fs')
// const { title } = require('process')
const loadNotes = ()=>{
   
    try{
        const data=  fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    }
    catch{
        return []

    }
 }

 const saveNotes = (data)=> {
    const SavedData = JSON.stringify(data)
    fs.writeFileSync('notes.json',SavedData)

 }
// const addNote = (title,body)=>{
//     const notes = loadNotes()

//     console.log(notes)
//     notes.push({
//         title,
//          body,

//     })
//     saveNotes(notes)
// }


// version2 add (no dublicate)
const addNote =(title,body)=>{
     const notes = loadNotes()
     const dublicateTitle = notes.filter((obj)=>{
        return obj.title === title
     })
     console.log(dublicateTitle)
     if(dublicateTitle.length == 0){
        notes.push({
            title,body
        })
        saveNotes(notes)
        console.log('saved')
        

     }
     else{
        console.log('errror')
     }
}



// const addNote =(title,body)=>{
//     const notes = loadNotes()
//     console.log(notes)
//     const dublicate = notes.find((el)=>{
//         return el.title === title
//     })
//     console.log(dublicate)
//     if(!dublicate ){
//         notes.push({
//             title,body
//         })
//         saveNotes(notes)
//         console.log('save')
//     }
//     else{
//         console.log('error')
//     }
// }
////////////////////////////////////////
// removeNotes

// const removeNotes = (title)=>{
//     const notes=loadNotes()
//     const notesToKeep = notes.filter((el)=>{
//         return el.title != title
//     })
//     if(notesToKeep.length == notes.length ){
//         console.log('not FOund')
//         console.log(notesToKeep)
        
//     }
//     else{
//         console.log('deleted')
//         saveNotes(notesToKeep)
//     }
  

// }

/////find
const removeNotes = (title)=>{
    const notes = loadNotes()
    const note = notes.find((el)=>{
        return el.title === title

    })
    // console.log(notesToKeep)
    // if (notesToKeep.indexOf())
    if(note){
        const index = notes.indexOf(note)
        notes.splice(index,1)
        console.log('added')
        saveNotes(notes)
        
    }
    else{
        console.log('notFound')
    }

}

//read 

const readItem = (title)=>{
    const notes = loadNotes()
    const findItem = notes.find((el)=>{
        return el.title == title
    })
    if (findItem){

        console.log(findItem.body)
    
        saveNotes(notes)
    }else{
        console.log("not found")
    }
}
//list
const list = ()=>{
    const notes= loadNotes()
    notes.forEach((el) => {
        console.log(el.body)

    });
    // saveNotes(ListAll)

}

module.exports = {
    addNote,
    removeNotes,
    readItem,
    list
}
