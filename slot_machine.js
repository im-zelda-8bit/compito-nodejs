let arraySimboli = [
    '😣',
    '😁',
    '😴',
    '🤩',
    '🙄',
    '🤗'
];

async function spin() {
    document.getElementById("risultato").innerHTML = "";
    let slot1 = getRandomInt(5);
    let slot2 = getRandomInt(5);
    let slot3 = getRandomInt(5);

    await scorri("slot1", slot1);
    await scorri("slot2", slot2);
    await scorri("slot3", slot3);

    await vittoria();
}

async function scorri(slot, num) {
    for (let i = 0; i < arraySimboli.length; i++) {
        document.getElementById(slot).innerHTML = arraySimboli[i];
        await sleep(250);
    }
    document.getElementById(slot).innerHTML = arraySimboli[num];
}

function vittoria() {
    let slot1 = document.getElementById("slot1").innerHTML;
    let slot2 = document.getElementById("slot2").innerHTML;
    let slot3 = document.getElementById("slot3").innerHTML;

    if(slot1 == slot2 && slot2 == slot3)
        document.getElementById("risultato").innerHTML = "Hai vinto!";
    else
        document.getElementById("risultato").innerHTML = "Hai perso!";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
