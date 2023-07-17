const Hobbit = new Book("Hobbit", "JRR Tolkein", 295, "no");
let myLibrary = [Hobbit];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addButton = document.getElementById("add-button").addEventListener("click", function(){
    document.querySelector(".add-form").style.display = "flex";
    //document.querySelector(".main > *:not(form)").style.filter = "brightness(30%)";
})

const closeButton = document.getElementById("close-button").addEventListener("click" , function() {
    document.querySelector(".add-form").style.display = "none";
    //document.querySelector(".main > *:not(form").style.filter = "brightness(100%)";
})

const main = document.querySelector(".main");
const titleBox = document.getElementById("title");
const authorBox = document.getElementById("author");
const pagesBox = document.getElementById("pages");
const readBox = document.getElementById("read");
const cardBox = document.getElementById("card-box");
const titleText = document.querySelector(".card-title");
const authorText = document.querySelector(".card-author");
const pagesText = document.querySelector(".card-pages");
const progressText = document.querySelector(".card-progress");

readBox.addEventListener("change", function() {
    if (this.checked) {
        this.value = "on";
      } else {
        this.value = "no";
      }
})

const submitButton = document.getElementById("submit-button").addEventListener("click", function() {
    addBookToLibrary();
    console.log(myLibrary);
    document.querySelector(".add-form").style.display = "none";
})

function addBookToLibrary() {
    for(var i = 0; i < myLibrary.length; i++) {
        main.removeChild(main.lastChild);
    }
    const newBook = new Book(titleBox.value, authorBox.value, pagesBox.value, readBox.value);
    myLibrary.push(newBook);
    for(var i = 0; i < myLibrary.length; i++) {
        const cardCopy = cardBox.cloneNode(true);
        main.appendChild(cardCopy);
        cardCopy.querySelector(".card-title").innerHTML = myLibrary[i].title;
        cardCopy.querySelector(".card-author").innerHTML = myLibrary[i].author;
        cardCopy.querySelector(".card-pages").innerHTML = myLibrary[i].pages;
        if(myLibrary[i].read == "on") {
            cardCopy.querySelector(".card-progress").innerHTML = "Completed";
        }
        else if(myLibrary[i].read == "no") {
            cardCopy.querySelector(".card-progress").innerHTML = "In Progress";
        }
        console.log(myLibrary[i].read);
    }
}

