export default class NotesManager {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('personal-notes')) || [];
        this.renderNotes();
    }
    
    addNote = (text) => {
        if (text.trim()) {
            const newNote = {
                id: Date.now(),
                text: text.trim(),
                createdAt: new Date().toISOString()
            };
            this.notes.push(newNote);
            this.saveNotes();
            this.renderNotes();
        }
    };
    
    deleteNote = (id) => {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
        this.renderNotes();
    };
    
    editNote = (id, newText) => {
        const note = this.notes.find(n => n.id === id);
        if (note && newText.trim()) {
            note.text = newText.trim();
            this.saveNotes();
            this.renderNotes();
        }
    };
    
    saveNotes = () => {
        localStorage.setItem('personal-notes', JSON.stringify(this.notes));
    };
    
    renderNotes = () => {
        const notesList = document.getElementById('notesList');
        notesList.innerHTML = '';
        
        this.notes.forEach(note => {
            const li = document.createElement('li');
            li.className = 'note-item';
            
            const noteText = document.createElement('span');
            noteText.textContent = note.text;
            
            const noteActions = document.createElement('div');
            noteActions.className = 'note-actions';
            
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                const updatedText = prompt('Edit catatan:', note.text);
                if (updatedText !== null) {
                    this.editNote(note.id, updatedText);
                }
            });
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Hapus';
            deleteBtn.addEventListener('click', () => this.deleteNote(note.id));
            
            noteActions.appendChild(editBtn);
            noteActions.appendChild(deleteBtn);
            
            li.appendChild(noteText);
            li.appendChild(noteActions);
            
            notesList.appendChild(li);
        });
    };
}