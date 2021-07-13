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

  notepadWrapper.classList.add('border')
  
  
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
    `<div id="${note.id}" class="note-element">
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
  initialEditNote()
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

const initialEditNote = () => {
  const noteElements = document.querySelectorAll('.note-element')

  noteElements.forEach((editNote) => {
    editNote.addEventListener('click', ($event) => {

      const editedNoteId = $event.target.closest('.note-element').attributes.id.nodeValue;
      console.dir(editedNoteId)

      const editedNoteContainer = document.querySelector('.edited-note-container');

      editedNoteContainer.classList.toggle('hidden');
      const editedTitle = document.querySelector('.edited-title');
      const editedNoteText = document.querySelector('.edited-note-text')
      
      const foundNotes = allNotesLists.find((note) => {
        return editedNoteId == note.id
        
      })
      editedTitle.value = foundNotes.title;
      editedNoteText.value = foundNotes.text;
    })
  })
}


/* zrobić bez templatki z creatElement
  oscylować modala z przyciskami save i przycisk anuluj */


