//jshint esversion: 9

const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
};

//Type Method
TypeWriter.prototype.type = function(){
    //Current index of word
    const currentIndex = this.wordIndex % this.words.length;
    //Getting full text of the word at current index
    const fullText = this.words[currentIndex];
    
    //Check if deleting or not
    if(this.isDeleting) {
        //Remove char
        this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
        //Add char
        this.txt = fullText.substring(0, this.txt.length + 1);
    }
    
    //Insert text into element
    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;
   
    //Initial typing speed
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //If word is complete
    if(!this.isDeleting && this.txt === fullText){
        //Make pause at the end of word completion
        typeSpeed = this.wait;
        //Set isDeleting to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
        //Set isDeleting to false again 
        this.isDeleting = false;
        //Moving to next word in the array
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;
    }
    
    setTimeout(()=> this.type(), typeSpeed);


};

//Init on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);

}