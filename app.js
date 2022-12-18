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
    //utenti.push(socket.id);		
    console.log('client: ' + socket.id);

    socket.on('registraUtente', function (data) {
        console.log("client: " + data);
        utenti.push(data);
        socket.broadcast.emit('registraUtente', data);
        //console.log(numUtenti);
        console.log(utenti);
    });
    
    socket.on('start', () => {
        
        let word = selectWord()
        console.log(word);
        socket.emit('giveWord', word);
        
        
    })
    
});

function makeList(){

    let mess = []
    let parole = require("./wordList.json");
    for (geso in parole){
        mess.push(geso)
    }
    return mess;
}

function selectWord(){
    let list = makeList()
    let i;
    let wordSelected = Math.floor(Math.random() * mess.length);
    let wordToInsert = mess[wordSelected];
    let word = wordToInsert;

    for(i=0; i<wordToInsert.length; i++){
        if(i-1<wordToInsert.length){
            encoded+= "_ "; 
        } else {
            encoded+="_";
        }
    }

    wordSplitted = encoded.split(" ");
    return encoded;
}

server.listen(3000);
