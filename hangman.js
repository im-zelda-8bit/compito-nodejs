
const wordsList = ['ciao', 'casa', 'animale', "telefono", "cellulare"]

var word = "";
var wordSplitted = "";
var encoded = "";
var counterLettersWrong = 0;
var lettersWrong = [];

function guessLetter(letterNumber){
    
    let d = document.getElementsByClassName("letter")[letterNumber].value;
    let i=0;
    let indexes = [];

    if(!word.includes(d)){
      if(lettersWrong.includes(d)){
        return;
      }
      counterLettersWrong+=1;

      if(counterLettersWrong >= 11){
        document.getElementById('currentState').innerHTML = "HAI PERSO";
        document.getElementById('img').src = "/img11";
        return;
      }

      //set correct image with counter
      document.getElementById('img').src = "/img" + counterLettersWrong;
      
      //per vedere se la lettera schiacciata era già stata inserita
      lettersWrong.push(d);
      document.getElementById('currentState').innerHTML = "Non c'è la lettera " + d;

    } else {
        
        for(i=0; i<word.length; i++)
            if(word[i]===d){
                indexes.push(i);
        }
    }

    indexes.forEach( element => {
      wordSplitted[element] = d;
    })

    
  console.log(wordSplitted);
  if(wordSplitted.join("") == word){
    document.getElementById('currentState').innerHTML = "HAI VINTO";
  }
    document.getElementById('word').innerHTML = wordSplitted.join(" ");
}

function createLetterSpaces(){
    let i;
    let wordSelected = Math.floor(Math.random() * wordsList.length);
    let wordToInsert = wordsList[wordSelected];
    word = wordToInsert;
  
    for(i=0; i<wordToInsert.length; i++){
        if(i-1<wordToInsert.length){
            encoded+= "_ "; 
        } else {
            encoded+="_";
        }
    }
  
    wordSplitted = encoded.split(" ");
    document.getElementById('word').innerHTML = encoded;
}