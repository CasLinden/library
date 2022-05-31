function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.info = function(){
    if (!this.read) {return `${this.title} by ${this.author}, ${this.pages} pages, unread`
    } else {return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`};
};

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 292, "read");

console.log(theHobbit.info());
