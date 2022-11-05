let myLibrary = [
    {"Title": "The Hobbit", 
    "Author": "J.R.R. Tolkien",
    "Pages": "150000",
    "Read": "nope"
    }, {"Title": "The Hobbit", 
    "Author": "J.R.R. Tolkien",
    "Pages": "150000",
    "Read": "nope"
    }
 ];

// Object Constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

// Takes book info, converts to a variable, then adds it to the myLibrary array
function addBookToLibrary(Title, Author, Pages, Read) {
    // Do stuff
    let bookObj = new Book(Title, Author, Pages, Read);
    myLibrary.push(bookObj);
    displayBookOnPage();
}

// Cycles through the myLibrary array and displays each book as a card
function displayBookOnPage() {
    const booksList = document.getElementById("booksList");

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        booksList.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`)
            card.appendChild(para);

        }
    })
}

function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    // Break if form is empty
    if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }

    // Add to library if complete...
    document.getElementById("booksList").textContent = '';     // Clear booklist on screen
    addBookToLibrary(Title, Author, Pages, Read);

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

displayBookOnPage();