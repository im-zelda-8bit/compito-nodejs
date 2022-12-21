const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;
const ip = "127.0.0.1";
let numUtenti = 0;


function requestHandler(request, response) {

    let objurl = url.parse(request.url, "false");
    const path = objurl.pathname;
    switch (path) {
        case '/':
            fs.readFile('index.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/html" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;

        case '/slot':
            fs.readFile('slot_machine.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/html" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;

        case '/css':
            fs.readFile('css/style.css', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/css" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        
        case '/slotcss':
            fs.readFile('css/slot_style.css', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/css" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        
        case '/pisa':
            fs.readFile('img/pisa.jpg', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/jpg" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        
        case '/slotjs':
            fs.readFile('slot_machine.js', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/javascript" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        
        case '/sfondoslot':
            fs.readFile('img/sfondo_slot.jpeg', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/jpeg" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        
        case '/tutorialslot':
            fs.readFile('img/tutorial_slot.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/tutorialhangman':
            fs.readFile('img/tutorial_hangman.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/impiccato':
            fs.readFile('hangman.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/html" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        
        case '/hangcss':
            fs.readFile('css/hang_style.css', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/css" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;

        case '/img0':
            fs.readFile('img/0.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img1':
            fs.readFile('img/1.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img2':
            fs.readFile('img/2.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img3':
            fs.readFile('img/3.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img4':
            fs.readFile('img/4.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img5':
            fs.readFile('img/5.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img6':
            fs.readFile('img/6.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img7':
            fs.readFile('img/7.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img8':
            fs.readFile('img/8.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img9':
            fs.readFile('img/9.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img10':
            fs.readFile('img/10.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/img11':
            fs.readFile('img/11.png', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "img/png" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
        case '/impiccatojs':
            fs.readFile('hangman.js', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    let jsonObj = require("./wordsList.json");
                    console.log(JSON.stringify(jsonObj, null, 2));
                    response.writeHead(200, { "content-Type": "text/javascript" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;
            
        case '/socket':
            fs.readFile('/socket.io/client-dist/sosckt.io.js', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/javascript" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break; 

            
    }
}

const server = http.createServer(requestHandler);
const utenti = [];
const punti = [];
var lettersWrong = [];
var finalWord = "";

server.listen(port, ip, function () {
    console.log("Server started on " + ip + ":" + port);
});

const io = require("socket.io")(server, {   
    cors: {									
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.sockets.on('connection', function (socket) {
    socket.username = socket.id; 
    console.log('client: ' + socket.id);

    socket.on('registraUtente', function (data) {
        console.log("client: " + data);
        utenti.push(data);
        socket.broadcast.emit('registraUtente', data);
        console.log(utenti);
    });

    socket.on('setPunti', function (data) {
        console.log("punti: " + data);
        punti.push(data);
        socket.broadcast.emit('setPunti', data);
    });

    socket.on('aggiorna', function (data) {
        console.log(data);
        for (let i = 0; i < utenti.length; i++) {
            if (utenti[i] == data[0]) {
                punti[i] = data[1]
            }
        }
        //punti.push(data[1]);
        testo = punti.join("<br>");
        socket.emit('aggiornaPuntiServer', testo);
        socket.broadcast.emit('aggiornaPuntiServer', testo);
    });
    
    /**
     * This is called when the client click the Start the game button, and sends
     * the information for the length of the word to the client
     */
    socket.on('start', async () => {

        let length = await selectWord();
        //console.log(length + " dal server");
        socket.emit('giveLength', length);
        
    })  

    /**
     * Send informations to the client for the letter selected before in the word
     */
    socket.on('checkLetter', async (letter) => {
        try{
            let checkReturn = await checkLetter(letter);
            let pos = checkReturn[0]
            let wrongNum = checkReturn[1]
            socket.emit('isInWord', pos, wrongNum);
        } catch(err){
            console.error(err);
        }
        
    })

    /**
     * Resets informations and lists to play again when you click "reset page" button
     */
    socket.on('reset', () => {
        try{
            finalWord = "";
            lettersWrong = [];
            console.log("RESETTED");
        } catch(err){
            console.error(err);
        }
    })
    
});

function aggiornaPunti() {
    testo = punti.join("\n");
    socket.emit("aggiornaPuntiServer", testo);
}

/**
 * this function is needed to send the length of the word selected to play Hangman, through Socket.emit
 * @returns the length of the word
 */
function selectWord(){

    let parole = require("./wordList.json");
    let mess = []
    
    for (geso in parole){
        mess.push(geso)
    }

    let wordSelected = Math.floor(Math.random() * mess.length);
    finalWord = mess[wordSelected];
    let wLength = mess[wordSelected].length;

    console.log(finalWord);
    return wLength;

}

/**
 * This function is called in the Socket.on "checkLetter" to check if the letter selected from the client is inside the word
 * @param {*} letter is the letter selected in the client
 * @returns the indexes of the letter in the word and the number of times that you put a wrong letter, to set the right image in the client
 */
function checkLetter(letter){
            
    console.log(letter);
    let i=0;
    let indexes = [];

    if(!finalWord.includes(letter)){
        
        if(lettersWrong.includes(letter)){
            return;
        }
        
        lettersWrong.push(letter);

    } else {
        
        for(i=0; i<finalWord.length; i++)
            if(finalWord[i]===letter){
                indexes.push(i);
            }
    }

<<<<<<< Updated upstream
    return [indexes, lettersWrong.length]
=======
    wordSplitted = encoded.split(" ");
    socket.
    document.getElementById('word').innerHTML = encoded;
>>>>>>> Stashed changes
}

server.listen(3000);
