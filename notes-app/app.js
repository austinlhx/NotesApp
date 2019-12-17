const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List out all notes',
    builder: {
        title:{
            describe: 'Note title',
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.listNote(argv.title)
    }
})


yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            type: 'string',
            demandOption: true,
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv)