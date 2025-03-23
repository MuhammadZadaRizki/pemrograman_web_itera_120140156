// Inisialisasi elemen
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Fungsi untuk menyimpan data ke localStorage
const saveToLocalStorage = () => {
  const todos = Array.from(todoList.children).map(item => ({
    text: item.querySelector('.text').textContent,
    completed: item.classList.contains('completed'),
  }));
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Fungsi untuk memuat data dari localStorage
const loadFromLocalStorage = () => {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  savedTodos.forEach(todo => addTodoItem(todo.text, todo.completed));
};

// Fungsi untuk menambahkan item baru
const addTodoItem = (text, completed = false) => {
  if (!text.trim()) return;

  // Buat elemen list
  const li = document.createElement('li');
  if (completed) li.classList.add('completed');

  // Tambahkan teks item
  const span = document.createElement('span');
  span.textContent = text;
  span.className = 'text';
  li.appendChild(span);

  // Tombol selesai
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Selesai';
  completeButton.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveToLocalStorage();
  });
  li.appendChild(completeButton);

  // Tombol hapus
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Hapus';
  deleteButton.addEventListener('click', () => {
    li.remove();
    saveToLocalStorage();
  });
  li.appendChild(deleteButton);

  // Tambahkan elemen ke daftar
  todoList.appendChild(li);

  // Simpan ke localStorage
  saveToLocalStorage();
};

// Event listener untuk tombol tambah
addButton.addEventListener('click', () => {
  addTodoItem(todoInput.value);
  todoInput.value = '';
});

// Memuat data saat halaman pertama kali dibuka
loadFromLocalStorage();
