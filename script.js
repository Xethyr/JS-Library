let myLibrary = [];

const libraryDisplay = document.getElementById('library');
const dialog = document.querySelector('dialog');

// Variables for the form inputs and buttons
const showFormButton = document.getElementById('add-book');
const submitFormButton = document.getElementById('submit-btn');
const bookTitleInput = document.getElementById('book-title');
const bookAuthorInput = document.getElementById('book-author');
const readStatusInput = document.getElementById('read-status');

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus ? 'Read' : 'Not Read';
}



function addToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('The Lightning Thief', 'Rick Riordan', false);
const book2 = new Book('Harry Potter', 'JK Rowling', true);

addToLibrary(book1);
addToLibrary(book2);
let i = 0;

function displayLibrary() {
    myLibrary.forEach((book) => {
        const newBook = document.createElement('div');
        libraryDisplay.appendChild(newBook);
        newBook.classList.add('book');
        newBook.setAttribute('id', i);
        const title = newBook.appendChild(document.createElement('div'));
        title.classList.add('title');
        title.innerText = book.title;
        const author = newBook.appendChild(document.createElement('div'));
        author.classList.add('author');
        author.innerText = book.author;
        const readStatus = newBook.appendChild(document.createElement('div'));
        readStatus.classList.add('read-status');
        readStatus.innerText = book.readStatus;
        const deleteButton = newBook.appendChild(document.createElement('button'));
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Delete';
        // const toggleReadBtn = newBook.appendChild(document.createElement('button'));
        // toggleReadBtn.setAttribute('id', i);
        // toggleReadBtn.classList.add('toggle-btn');
        // toggleReadBtn.innerText = 'Toggle Read';
        i++;
    })
}

function deleteBook(id) {
   return myLibrary.toSpliced(id, 1);
}

function clearDisplay() {
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.firstChild);
    }
    i = 0;
}

displayLibrary();

function handleNewBook(title, author, read) {
    let newBook = null
    if (read === 'Yes') {
        newBook = new Book(title, author, true);
    } else {
        newBook = new Book(title, author, false);
    }
    addToLibrary(newBook);
    clearDisplay();
    displayLibrary();
}

// function toggleReadStatus(id) {
//     for (let j = 0; j < myLibrary.length; j++) {
//         console.log(j);
//         if (id = j) {
//             if (myLibrary[j].readStatus = 'Read') {
//                 myLibrary[j].readStatus = 'Not Read';
//                 console.log(myLibrary[j]);
//             } else if (myLibrary[j].readStatus = 'Not Read') {
//                 myLibrary[j].readStatus = 'Read';
//                 console.log(myLibrary[j]);
//             }
//         }
//     }
// }

const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach((button) => button.addEventListener('click', (e) => {
    e.target.parentElement.remove();
}))

// const toggleBtns = document.querySelectorAll('.toggle-btn');

// toggleBtns.forEach((button) => button.addEventListener('click', () => {
//     console.log(button.id);
//     toggleReadStatus(button.id);
// }))

showFormButton.addEventListener('click', () => {
    dialog.showModal();
})

submitFormButton.addEventListener('click', () => {
    handleNewBook(bookTitleInput.value, bookAuthorInput.value, readStatusInput.value);
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    readStatusInput.selectedIndex = 0;
    dialog.close();
})