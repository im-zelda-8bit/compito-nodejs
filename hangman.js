
const wordsList = ['ciao', 'casa', 'animale', "telefono", "cellulare"]

var word = "";
var wordSplitted = "";
var encoded = "";
var counterLettersWrong = 0;
var lettersWrong = [];

function guessLetter(letterNumber){
    
    // prendi il valore del bottone schiacciato
    let d = document.getElementsByClassName("letter")[letterNumber].value;
    let i=0;
    let indexes = []; //contiene la lista degli indici dove va sostituito il trattino basso con la lettera scelta, nel caso sia corretta

    //se la lettera scelta non è contenuta all'interno della parola, e la lettera è contenuta all'interno della lista allora termina la funzione
    if(!word.includes(d)){
      if(lettersWrong.includes(d)){
        return;
      }
      counterLettersWrong += 1; //serve per calcolare la sconfitta del giocatore e per cambiare le immagini

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

        // inserisce gli indici della posizione della lettera nella parola
        for(i=0; i<word.length; i++)
            if(word[i]===d){
                indexes.push(i);
            }
    }

    //forEach che inserisce ogni lettera negli indici indicati
    indexes.forEach( element => {
      wordSplitted[element] = d;
    })

    
  console.log(wordSplitted);

  //controlla se la parola formata corrisponde con la parola scelta nella lista inizialmente
  if(wordSplitted.join("") == word){
    document.getElementById('currentState').innerHTML = "HAI VINTO";
  }
    document.getElementById('word').innerHTML = wordSplitted.join(" ");
}

// viene caricato nell'onload del body della pagina "index.html" e funge
// da random per selezionare la parola dalla lista per il gioco e per creare
//la parola tratteggiata da inserire
function createLetterSpaces(){
    let i;
    let wordSelected = Math.floor(Math.random() * wordsList.length); //random nella lista
    let wordToInsert = wordsList[wordSelected];
    word = wordToInsert; //parola globale
  
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

//@author: Pisa - Romano