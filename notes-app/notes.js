const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
} 

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const savedNotes = notes.filter((note) => note.title !== title)
    if (savedNotes.length < notes.length){
        saveNotes(savedNotes)
        console.log(chalk.red.inverse('Note removed!'))
        
        
    } else{
        console.log(chalk.green.inverse('Note could not be found!'))
    }
}

const listNote = (title, body) => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
        if (note){
            console.log(chalk.inverse(note.title))
            console.log(note.body)
            
        }
        else {
            console.log(chalk.red.inverse('Note could not be found!'))
        }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}



module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}