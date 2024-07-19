let myLibrary = [];
const libraryDisplay = document.getElementById('library');

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('The Lightning Thief', 'Rick Riordan', 'Read');
const book2 = new Book('Harry Potter', 'JK Rowling', 'Read');

addToLibrary(book1);
addToLibrary(book2);
let i = 0;

function displayLibrary() {
    myLibrary.forEach((book) => {
        const newBook = document.createElement('div');
        libraryDisplay.appendChild(newBook);
        newBook.classList.add('book');
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
        const toggleReadBtn = newBook.appendChild(document.createElement('button'));
        toggleReadBtn.setAttribute('id', i);
        toggleReadBtn.classList.add('toggle-btn');
        toggleReadBtn.innerText = 'Toggle Read';
        i++;
    })
}



displayLibrary();

function toggleReadStatus(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (id === i) {
            if (myLibrary[i].readStatus = 'Read') {
                myLibrary[i].readStatus = 'Not Read';
                console.log(myLibrary);
            }
        }
    }
}

const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach((button) => button.addEventListener('click', (e) => {
    e.target.parentElement.remove();
}))

const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach((button) => button.addEventListener('click', () => {
    console.log(button.id);
    toggleReadStatus(button.id);
}))
