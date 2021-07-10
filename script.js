// const noteTitleElement = document.querySelector('.note-title');
const noteDescriptionContainerElement = document.querySelector('.note-description-container');

const noteTitleWithPlaceHolderTextTitle = document.querySelector('.create-note-title-input');

const noteTitleWithPlaceHolderTextCreateNewNote = document.querySelector('.create-note-input')

const notepadWrapper = document.querySelector('.notepad-wrapper')
const textNoteArea = document.querySelector('.note-content')
const notesListElement = document.querySelector('.notes-list');

let noteDescriptionValue = textNoteArea.value;
let noteTitleElementValue = noteTitleWithPlaceHolderTextTitle.value;

noteTitleWithPlaceHolderTextCreateNewNote.addEventListener('click', () => {

  if (true) {
    notepadWrapper.classList.add('border')
  }
  
  if (noteDescriptionContainerElement.classList.contains('hidden')) {
    noteDescriptionContainerElement.classList.toggle('hidden')
    // noteTitleWithPlaceHolderTextTitle.classList.toggle('hidden')
  }

  if (noteTitleWithPlaceHolderTextTitle.classList.contains('hidden')) {
    noteTitleWithPlaceHolderTextCreateNewNote.classList.toggle('hidden');
    noteTitleWithPlaceHolderTextTitle.classList.toggle('hidden');
  }
  focusFunction()
})

document.addEventListener('click', (event) => {
  if (!event.target.closest('.notepad-wrapper') || event.target.matches('.close-btn')) {
    colapseNote()
    createNote()
    clearInputs()
  }
})

const colapseNote = () => {
  noteDescriptionContainerElement.classList.add('hidden');
  noteTitleWithPlaceHolderTextTitle.classList.add('hidden');
  noteTitleWithPlaceHolderTextCreateNewNote.classList.remove('hidden');
  notepadWrapper.classList.remove('border')
}

const createNote = (note) => {

 let noteDescriptionValue = textNoteArea.value;
  let noteTitleElementValue = noteTitleWithPlaceHolderTextTitle.value;
  
  if (noteDescriptionValue || noteTitleElementValue) {
    
  } else if (noteDescriptionValue === '' || noteTitleElementValue === '') {
   return
  }
 
 /*  if (noteDescriptionValue === '' || noteTitleElementValue === '') {
    return 
  } */

  console.log(noteDescriptionValue)
  console.log(noteTitleElementValue)
  renderNote(noteTitleElementValue,noteDescriptionValue)
  
  /* console.log(renderNote(noteDescriptionValue)) */
}

const clearInputs = () => {
  textNoteArea.value = '';
  noteTitleWithPlaceHolderTextTitle.value = '';
}

const displayNotesList = document.querySelector('.notes-list');

const focusFunction = () => {
  textNoteArea.focus();
}

const renderNote = (titleTextAreaValue, noteTextAreaValue) => {
  
  const noteElement = document.createElement('div');
  const titleTextArea = document.createElement('textarea');
  const noteTextArea = document.createElement('textarea');

  noteElement.className = 'note-element';
  titleTextArea.className = 'title-text-area';
  noteTextArea.className = 'note-text-area';

  notesListElement.appendChild(noteElement);
  noteElement.appendChild(titleTextArea);
  noteElement.appendChild(noteTextArea);
  
  titleTextArea.innerHTML = titleTextAreaValue;
  noteTextArea.innerHTML = noteTextAreaValue;
}