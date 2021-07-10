// const noteTitleElement = document.querySelector('.note-title');
const noteDescriptionContainerElement = document.querySelector('.note-description-container');

const inputForNameTitle = document.querySelector('.create-note-title');

const initailInput = document.querySelector('.create-note')

const notepadWrapper = document.querySelector('.notepad-wrapper')
const textNoteArea = document.querySelector('.note-content')
const notesListElement = document.querySelector('.notes-list-container');

let noteDescriptionValue = textNoteArea.value;
let noteTitleElementValue = inputForNameTitle.value;

initailInput.addEventListener('click', () => {

  if (true) {
    notepadWrapper.classList.add('border')
  }
  
  if (noteDescriptionContainerElement.classList.contains('hidden')) {
    noteDescriptionContainerElement.classList.toggle('hidden')
    // noteTitleWithPlaceHolderTextTitle.classList.toggle('hidden')
  }

  if (inputForNameTitle.classList.contains('hidden')) {
    initailInput.classList.toggle('hidden');
    inputForNameTitle.classList.toggle('hidden');
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
  inputForNameTitle.classList.add('hidden');
  initailInput.classList.remove('hidden');
  notepadWrapper.classList.remove('border')
}

const createNote = (note) => {

 let valueOfNoteTextContentElement = textNoteArea.value;
  let valueOfNoteTitleElement = inputForNameTitle.value;
  
  if (valueOfNoteTextContentElement || valueOfNoteTitleElement) {
    
  } else if (valueOfNoteTextContentElement === '' || valueOfNoteTitleElement === '') {
   return
  }
 
 /*  if (noteDescriptionValue === '' || noteTitleElementValue === '') {
    return 
  } */

  console.log(valueOfNoteTextContentElement)
  console.log(valueOfNoteTitleElement)
  renderNote(valueOfNoteTitleElement,valueOfNoteTextContentElement)
  
  /* console.log(renderNote(noteDescriptionValue)) */
}

const clearInputs = () => {
  textNoteArea.value = '';
  inputForNameTitle.value = '';
}

const focusFunction = () => {
  textNoteArea.focus();
}

const renderNote = (valueOfNoteTitleElement, valueOfNoteTextContentElement) => {
  
  const noteElement = document.createElement('div');
  const noteTitleElement = document.createElement('h3');
  const noteTextContentElement = document.createElement('p');

  noteElement.className = 'note-element';
  noteTitleElement.className = 'note-title';
  noteTextContentElement.className = 'note-text-box';

  notesListElement.appendChild(noteElement);
  noteElement.appendChild(noteTitleElement);
  noteElement.appendChild(noteTextContentElement);
  
  noteTitleElement.innerHTML = valueOfNoteTitleElement;
  noteTextContentElement.innerHTML = valueOfNoteTextContentElement;
}