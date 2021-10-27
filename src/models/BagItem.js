function bagItem(media, removeFunction){
    if(removeFunction){
        media.remove = function (){
            removeFunction(this);
        }
    }
    return media;
}

function Book(title, pages){
    this.pages = pages;
    this.title = title || 'Default Title';
    this.id = Math.floor(Math.random() * 10e16);
}

// same as above using class syntax
class Movie{
    constructor(title, runningTime){
        this.runningTime = runningTime;
        this.title = title || 'Default Title';
        this.id = Math.floor(Math.random() * 10e16);
    }
}

export {bagItem, Book, Movie}