const saveButton = document.getElementById('Save')

saveButton.addEventListener('click', function() {
    const heading = document.getElementById('HeadingTextArea').value
    const notes = document.getElementById('NotesTextArea').value
    if (heading && notes) {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    const index = savedNotes.length
    document.getElementById('HeadingTextArea').value = ''
    document.getElementById('NotesTextArea').value = ''
    addNote(heading, notes, index)
    saveNote(heading, notes, index)
    }

    else {
        const alert = document.createElement('div')
        alert.className = 'alert alert-warning mt-2'
        alert.textContent = 'Fyll i både rubrik och anteckning!'
        document.getElementById('alertDiv').appendChild(alert)
        setTimeout(function() {
            alert.remove()
        }, 2500)
    }
})


function addNote(heading, notes, index) {
    const newCard = document.createElement('div')
    newCard.innerHTML = `
        <div class="card mt-3 text-center" data-index="${index}">
            <div class="card-body">
                <h5>${heading}</h5>
                <p>${notes}</p>
                <div class="d-flex gap-2 justify-content-center pt-3">
                    <button class="btn btn-danger btn-sm delete-btn" type="button">Ta bort</button>
                    <button class="btn btn-warning btn-sm edit-btn" type="button">Redigera</button>
                </div>
            </div>
        </div>  
    `
    document.getElementById('notesDiv').appendChild(newCard);
}

document.getElementById('notesDiv').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const card = e.target.closest('.card')
        const index = card.dataset.index
        card.remove()

        const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
        savedNotes.splice(Number(index), 1)
        localStorage.setItem('notes', JSON.stringify(savedNotes))
        renderNotes()

    }

     else if (e.target.classList.contains('edit-btn')) {
            const card = e.target.closest('.card')
            const heading = card.querySelector('h5').textContent
            const notes = card.querySelector('p').textContent
            const index = card.dataset.index
            card.innerHTML = `
                    <div class="card-body" data-index="${index}">
                        <input class="form-control mb-2 text-white" value="${heading}">
                        <textarea class="form-control mb-2 text-white">${notes}</textarea>
                        <button class="btn btn-primary d-block mx-auto btn-sm save-btn" type="button">Spara</button>
                    </div>
            `
    }

     else if (e.target.classList.contains('save-btn')) {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
        const card = e.target.closest('.card')
        const index = card.dataset.index
        const newHeading = card.querySelector('input').value
        const newNote = card.querySelector('textarea').value
        savedNotes[Number(index)] = { heading: newHeading, notes: newNote }
        localStorage.setItem('notes', JSON.stringify(savedNotes))
        renderNotes()
     }
})


function saveNote(heading, notes, index) {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    savedNotes.push({ heading: heading, notes: notes})
    localStorage.setItem('notes', JSON.stringify(savedNotes))
}

function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    savedNotes.forEach(function(note, index) {
        addNote(note.heading, note.notes, index)
    })
}

function renderNotes() {
    document.getElementById('notesDiv').innerHTML = ''
    loadNotes()
}

renderNotes()