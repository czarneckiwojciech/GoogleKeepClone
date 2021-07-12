let allNotesLists = [];

const noteTitleElement = document.querySelector('.note-title');
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
    
  }

  if (inputForNameTitle.classList.contains('hidden')) {
    initailInput.classList.toggle('hidden');
    inputForNameTitle.classList.toggle('hidden');
  }
  focusFunction()
})

const colapseNote = () => {
  noteDescriptionContainerElement.classList.add('hidden');
  inputForNameTitle.classList.add('hidden');
  initailInput.classList.remove('hidden');
  notepadWrapper.classList.remove('border')
}

const clearInputs = () => {
  textNoteArea.value = '';
  inputForNameTitle.value = '';
}

const focusFunction = () => {
  textNoteArea.focus();
}

const createNoteTemplate = (note) => {
  const noteTemplate =
    `<div id="noteElement" class="note-element">
      <h3 class="note-title">${note.title}</h3>
      <p class="note-text-box">${note.text}</p>
      <i id="${note.id}" class="fas fa-trash trash-btn"></i> 
    </div>`
  return noteTemplate
}

const createNewNote = (noteTitle,noteText) => {
  const note = {
    title: noteTitle,
    text: noteText,
    id: Math.random()
  }
  allNotesLists.unshift(note)
}

const removeNote = (noteId) => {
  allNotesLists = allNotesLists.filter((note) => {
    return noteId !== String(note.id)
  })
}

const addRemoveListenersToBtns = () => {
  const allRemoveBtnsElements = document.querySelectorAll('.trash-btn')

  allRemoveBtnsElements.forEach((removeBtn) => {
    removeBtn.addEventListener('click', ($event) => {
      const noteId = $event.target.attributes.id.nodeValue;

      removeNote(noteId);
      renderNotes();
    })
  })
}

const renderNotes = () => {
  const notesListElement = document.querySelector('.notes-list-container');

  const notesTemplates = allNotesLists.map((note) => {
    return createNoteTemplate(note);
  })
  notesListElement.innerHTML = notesTemplates;
  addRemoveListenersToBtns()
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.notepad-wrapper') || event.target.matches('.close-btn')) {
    
    let noteText = textNoteArea.value;
    let noteTitle = inputForNameTitle.value;
    
    if (noteText === '' && noteTitle === '') {
      colapseNote()
    } else {
    createNewNote(noteTitle, noteText)
    renderNotes()
    colapseNote()
    clearInputs()
    }
  }
})


/* const noteElement = document.getElementById('noteElement') ;

noteElement.addEventListener('click', () => {
  console.log('działa hover?')
}) */