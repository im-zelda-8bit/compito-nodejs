const http = require("http");
const fs = require("fs");
const url = require("url");
const utenti = [];
const port = 3000;
const ip = "127.0.0.1";
let numUtenti = 0;


function requestHandler(request, response) {

    let objurl = url.parse(request.url, "false");
    const path = objurl.pathname;
    console.log(path);
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

        case '/battaglia':
            fs.readFile('battaglia_navale.html', function (error, data) {
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

server.listen(port, ip, function () {
    console.log("Server started on " + ip + ":" + port);
});

const io = require("socket.io")(server, {   // socket.io module and pass the http object(server)
    cors: {									//  socket.io 4.5.3
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.sockets.on('connection', function (socket) { // WebSocket Connection 
    //(è arrivata una richiesta di connessione dal client)
    socket.username = socket.id; //memorizzo nella variabile di sessione username l'id del socket
    utenti.push(socket.id);		//nel vettore users memorizzo  gli id dei socket connessi
    console.log('cliente: connesso ' + socket.id);
    //L’istruzione socket.emit permette di inviare al client
    // il messaggio che contiene ip e porta del server
    socket.emit('connesso', ip + " " + "porta:" + " " + port);

    //funzione che gestisce i dati che arrivano da un client  
    socket.on('messaggio', function (data) {
        console.log("client: " + data);
        //invio a tutti i client connessi il messaggio che è arrivato da un client
        socket.broadcast.emit('messaggio', data);
        console.log(numUtenti);
    });
    // funzione che gestisce la disconnessione del client
    socket.on('disconnect', function () {
        numClienti--;	//aggiorno il numero dei client connessi
        console.log('Clienti connessi:', numClienti);
        socket.broadcast.emit('stato', numClienti);//informo i client sul numero dei connessi
        console.log('utente: disconnesso ' + socket.username);
        for (var i = 0; i < users.length; i++) { //tolgo dal vettore users il socket.id che si disconnette
            if (users[i] == socket.username) {
                users.splice(i, 1);
            }
        }
        delete socket;
    });
    
});