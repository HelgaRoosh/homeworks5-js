"use strict"
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state = this.state * 1.5;
       
    }

    set state(stateNew) {
       //  const stateNew = fix()
        if (stateNew < 0) {
            this._state = 0;
        } else if (stateNew > 100) {
            this._state = 100;
        } else {
            this._state = stateNew;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//-----------------TASK-2--------------------
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }       
    }

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);
        /*будем искать книгу если свойство введенное type этой книги 
        равно введенному значению. find возвращает найденый элемент те книгу, 
        а если не нашел, то undefinid. проверяем является ли возвращенное значение объектом(книгой) 
        если нет, то возвращаем null */
        if (typeof findBook === 'object') {
            return findBook;
        } else {
            return null;
        } 
    }

    giveBookByName(bookName) {
    let giveBook = this.books.find(book => book.name === bookName);
        if (typeof giveBook === 'object') {
            let index = this.books.indexOf(giveBook);
            this.books.splice(index, 1);
            return giveBook;
        } else {
            return null;
        }
    }
}
//------------------TASK-3----------
class Student {
    constructor(name) {
        this.name = name;
        this.journal = {};
            /*algebra:[2,3,2,4];
              geometria:[4,3,3,3] */
    }
    
    setSubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            return console.log("Предмет уже существует");
        } else {
            this.journal[subjectName] = [];
        //cоздаст свойство в журнале с названием предмера и значением пустого массива
        }
    }

    addMark(mark, subjectName) {
        if (this.journal.hasOwnProperty(subjectName) !== true) {
            this.journal[subjectName] = [];
          console.log("Несуществующий предмет. Предмет создан");
        }
        if((typeof mark === "number") && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark); 
        } else {
            return console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }  
    }

    getAverageBySubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
          let sum = 0;
          let marks = this.journal[subjectName];
          marks.forEach((item, idx, marks) => sum += item);
          let averageBySubject = sum / marks.length;
          return averageBySubject;
        } else {
          return console.log("Несуществующий предмет");
        }
    }

    getAverage() { 
        let sum = 0;
        let marks = Object.values(this.journal);
        //Метод Object.values() возвращает массив значений свойств переданного ему объекта
        // marks = [ [], [], []] - склеиваем их при помощи concat
        let resultMarks = [];
        marks.forEach((item, idx, marks) => resultMarks = [].concat(resultMarks, item));
        resultMarks.forEach((item, idx, resultMarks) => sum += item);
        let average = sum / resultMarks.length;
        return average;
    }
    
    exclude(reason) { 
        delete this.journal;
        this.excluded = reason;
    }
}
