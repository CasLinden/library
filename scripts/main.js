let library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.info = function(){
    if (!this.read) {return `${this.title} by ${this.author}, ${this.pages} pages.`
    } else {return `${this.title} by ${this.author}, ${this.pages} pages.`};
};

Book.prototype.shelve = function(){
    library.push(this);
};

Book.prototype.toggleRead = function(){
    if(this.read) {this.read = false}
    else {this.read = true};
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 292, "read");
theHobbit.shelve();

let nineteenEightyFour = new Book("Nineteen Eighty-Four", "George Orwell", 328, "read");
nineteenEightyFour.shelve();

let thinkingFastAndSlow = new Book("Thinking, Fast and Slow", "Daniel Kahneman", 499, "read");
thinkingFastAndSlow.shelve();

let fahrenheit451 = new Book("Fahrenheit451", "Ray Bradbury", 256);
fahrenheit451.shelve();



function generateLibrary() {
   let container = document.querySelector('.library-container');

   for (let i = 0; i < library.length; i++){
       let newEntry = document.createElement('div');
       newEntry.textContent = library[i].info();
       newEntry.setAttribute('data-number', [i]);
       newEntry.setAttribute('class', 'entry')
       let delBtn = document.createElement('button');
       delBtn.setAttribute('class', 'delete-button');
       delBtn.textContent = 'X';
       newEntry.appendChild(delBtn);
       let readBtn = document.createElement('button');
       readBtn.setAttribute('class', 'read-button');
       if (library[i].read){readBtn.textContent = 'Read';
       readBtn.style.backgroundColor = 'green';
       } else {readBtn.textContent = 'Unread';
       readBtn.style.backgroundColor = 'red';}
       newEntry.appendChild(readBtn);
       container.appendChild(newEntry);
   }
};
generateLibrary();



function deleteEntry(entry){
    let container = document.querySelector('.library-container');
    let child = document.querySelector(`[data-number="${entry}"]`);
    console.log(child)
    container.removeChild(child);
    library.splice(entry, 1);
};

function armDeleteBtn(){
    let buttons = document.querySelectorAll('.delete-button');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", doThis, false);
        function doThis(){
        deleteEntry(i);
        }
     }
};
armDeleteBtn();


/* form stuf */

document.getElementById("newBookForm").style.display = "none";
const nbButton = document.querySelector('#newbook');
nbButton.addEventListener("click", toggleForm);

    function toggleForm() {
    if (nbButton.textContent == "NEW BOOK") {
    document.getElementById("newBookForm").style.display = "block";
    nbButton.textContent = "CANCEL";
    } else {
    document.getElementById("newBookForm").style.display = "none";
    nbButton.textContent = "NEW BOOK";
    }
};

