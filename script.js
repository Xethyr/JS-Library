let myLibrary = [];

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus ? 'Not read' : 'Read';
}

function addToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book('The Lightning Thief', 'Rick Riordan', 'no');

addToLibrary(book1);

console.log(myLibrary)