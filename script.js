let myLibrary = [];

// Object Constructor
function Book(Title, Author, Pages, Status) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Status = Status;
}

// Takes book info, converts to a variable, then adds it to the myLibrary array
function addBookToLibrary(Title, Author, Pages, Status) {
    // Do stuff
    let bookObj = new Book(Title, Author, Pages, Status);
    myLibrary.push(bookObj);
    displayBookOnPage();
    closeForm();
}

// Cycles through the myLibrary array and displays each book as a card
function displayBookOnPage() {
    let index = 0;
    const booksList = document.getElementById("booksList");
    document.getElementById("booksList").textContent = '';     // Clear booklist on screen


    myLibrary.forEach(libraryBook => {
        const card = document.createElement("div");
        card.classList.add("card");
        booksList.appendChild(card);

        for (let key in libraryBook) {
            console.log(`${key}: ${libraryBook[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${libraryBook[key]}`);
            card.appendChild(para);
        }

        // Create read toggle  button
        const readBookButton = document.createElement("button");
        readBookButton.classList.add("read-book-button");
        readBookButton.textContent = "Update Status";

        // Link data attribute of read button to the array
        readBookButton.dataset.linkedArray = index;
        card.appendChild(readBookButton);

        readBookButton.addEventListener("click", toggleRead);  

        function toggleRead() {
            let booktoToggle = readBookButton.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();
            if ((myLibrary[parseInt(booktoToggle)].Status) == "Read") {
                toggleBook.Status = "Currently Reading"
                myLibrary[parseInt(booktoToggle)].Status = toggleBook.Status;
            } else if ((myLibrary[parseInt(booktoToggle)].Status) == "Currently Reading") {
                toggleBook.Status = "Read"
                myLibrary[parseInt(booktoToggle)].Status = toggleBook.Status;

            }
            displayBookOnPage();
        }


        // Create remove book button
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.textContent = "Remove Book";

        // Link data attribute of remove button to the array
        removeBookButton.dataset.linkedArray = index;
        index++;
        card.appendChild(removeBookButton);
        
        removeBookButton.addEventListener("click", removeBook);  

        function removeBook() {
            let booktoRemove = removeBookButton.dataset.linkedArray;
            myLibrary.splice(parseInt(booktoRemove), 1);
            card.remove();
            displayBookOnPage();
        }

        

    });
}
    



function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Status = document.getElementById("Status").value;


    // Break if form is empty
    if ((Title == "") || (Author == "") || (Pages == "")) {
        return;
    }

    // Add to library if complete...
    addBookToLibrary(Title, Author, Pages, Status);

    // ...then reset the form and bookList.
    document.getElementById("formContainer").reset();
}

// Opens and closes the "Add Book" form

function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("formContainer").reset();
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
