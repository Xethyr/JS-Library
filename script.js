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




function displayLibrary(library) {
    library.forEach((book, index) => {
        const newBook = document.createElement('div');
        libraryDisplay.appendChild(newBook);
        newBook.classList.add('book');
        newBook.setAttribute('data-index', index); // Use data-index instead of id
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
        deleteButton.addEventListener('click', (e) => {
            const indexToRemove = parseInt(e.target.parentElement.getAttribute('data-index'));
            clearDisplay();
            myLibrary.splice(indexToRemove, 1); // Use splice for removing by index
            displayLibrary(myLibrary);
        });

        const toggleReadBtn = newBook.appendChild(document.createElement('button'));
        toggleReadBtn.classList.add('toggle-btn');
        toggleReadBtn.innerText = 'Toggle Read';
        toggleReadBtn.addEventListener('click', (e) => {
            const indexToToggle = parseInt(e.target.parentElement.getAttribute('data-index'));
            myLibrary[indexToToggle].readStatus = myLibrary[indexToToggle].readStatus === 'Read' ? 'Not Read' : 'Read';
            clearDisplay();
            displayLibrary(myLibrary);
        });
    });
}

displayLibrary(myLibrary);

function clearDisplay() {
    while (libraryDisplay.firstChild) {
        libraryDisplay.removeChild(libraryDisplay.firstChild);
    }
}

function handleNewBook(title, author, read) {
    let newBook;
    if (read === 'Yes') {
        newBook = new Book(title, author, true);
    } else {
        newBook = new Book(title, author, false);
    }
    addToLibrary(newBook);
    clearDisplay();
    displayLibrary(myLibrary);
}

showFormButton.addEventListener('click', () => {
    dialog.showModal();
});

submitFormButton.addEventListener('click', () => {
    handleNewBook(bookTitleInput.value, bookAuthorInput.value, readStatusInput.value);
    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    readStatusInput.selectedIndex = 0;
    dialog.close();
});