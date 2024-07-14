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

addToLibrary(book1);

function displayLibrary() {
    const newBook = document.createElement('div');
    myLibrary.forEach((book) => {
        libraryDisplay.appendChild(newBook);
        newBook.classList.add('book');
        const title = newBook.appendChild(document.createElement('div'));
        title.classList.add('title');
        title.innerText = book.title;
    })
}

displayLibrary();

console.log(myLibrary)