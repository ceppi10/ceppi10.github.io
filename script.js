/* ==========================================
   FOOTBALL MEMORY
========================================== */


/* ==========================================
   CALCIATORI
========================================== */

const playerData = [

    ["Lionel Messi", "messi.jpg"],
    ["Cristiano Ronaldo", "ronaldo.jpg"],
    ["Neymar", "neymar.jpg"],
    ["Kylian Mbappé", "mbappe.jpg"],
    ["Erling Haaland", "haaland.jpg"],
    ["Mohamed Salah", "salah.jpg"],
    ["Luka Modrić", "modric.jpg"],
    ["Kevin De Bruyne", "debruyne.jpg"],
    ["Robert Lewandowski", "lewandowski.jpg"],
    ["Vinícius Júnior", "vinicius.jpg"],
    ["Jude Bellingham", "bellingham.jpg"],
    ["Harry Kane", "kane.jpg"],

    ["Diego Maradona", "maradona.jpg"],
    ["Ángel Di María", "dimaria.jpg"],
    ["Sergio Agüero", "aguero.jpg"],
    ["Lautaro Martínez", "martinez.jpg"],
    ["Julián Álvarez", "alvarez.jpg"],
    ["Luís Figo", "figo.jpg"],
    ["Bruno Fernandes", "fernandes.jpg"],
    ["Bernardo Silva", "silva.jpg"],
    ["João Félix", "felix.jpg"],

    ["Pelé", "pele.jpg"],
    ["Ronaldo Nazário", "ronaldonazario.jpg"],
    ["Ronaldinho", "ronaldinho.jpg"],
    ["Kaká", "kaka.jpg"],
    ["Rodrygo", "rodrygo.jpg"],
    ["Adriano", "adriano.jpg"],
    ["Thierry Henry", "henry.jpg"],
    ["Antoine Griezmann", "griezmann.jpg"],
    ["N'Golo Kanté", "kante.jpg"],
    ["Karim Benzema", "benzema.jpg"],
    ["Paul Pogba", "pogba.jpg"],

    ["Gianluigi Buffon", "buffon.jpg"],
    ["Francesco Totti", "totti.jpg"],
    ["Alessandro Del Piero", "delpiero.jpg"],
    ["Andrea Pirlo", "pirlo.jpg"],
    ["Paolo Maldini", "maldini.jpg"],
    ["Fabio Cannavaro", "cannavaro.jpg"],
    ["Gianfranco Zola", "zola.jpg"],
    ["Gianluigi Donnarumma", "donnarumma.jpg"],

    ["Andrés Iniesta", "iniesta.jpg"],
    ["Xavi", "xavi.jpg"],
    ["Sergio Ramos", "ramos.jpg"],
    ["Iker Casillas", "casillas.jpg"],
    ["David Villa", "villa.jpg"],
    ["Fernando Torres", "torres.jpg"],
    ["Carles Puyol", "puyol.jpg"],

    ["Toni Kroos", "kroos.jpg"],
    ["Manuel Neuer", "neuer.jpg"],
    ["Thomas Müller", "muller.jpg"],
    ["Mesut Özil", "ozil.jpg"],
    ["Arjen Robben", "robben.jpg"],
    ["Wesley Sneijder", "sneijder.jpg"],
    ["Eden Hazard", "hazard.jpg"],
    ["Sergio Busquets", "busquets.jpg"],
    ["Cesc Fàbregas", "fabregas.jpg"],
    ["David Beckham", "beckham.jpg"],
    ["Marco Reus", "reus.jpg"],
    ["Luis Suárez", "suarez.jpg"],
    ["Zlatan Ibrahimović", "ibrahimovic.jpg"]

];


const players = playerData.map(function(player) {

    return {

        name: player[0],

        image: "img/" + player[1]

    };

});


const uniquePlayers = players.filter(

    function(player, index, array) {

        return array.findIndex(

            function(item) {

                return item.name === player.name;

            }

        ) === index;

    }

);



/* ==========================================
   ELEMENTI HTML
========================================== */

const home =
    document.getElementById("home");

const game =
    document.getElementById("game");

const modeButtons =
    document.querySelectorAll(".mode-card");

const modeModal =
    document.getElementById("modeModal");

const closeModal =
    document.getElementById("closeModal");

const modalPlay =
    document.getElementById("modalPlay");

const modalIcon =
    document.getElementById("modalIcon");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalRules =
    document.getElementById("modalRules");

const creditsButton =
    document.getElementById("creditsButton");

const creditsModal =
    document.getElementById("creditsModal");

const closeCredits =
    document.getElementById("closeCredits");

const closeCreditsButton =
    document.getElementById("closeCreditsButton");

const openPhotoCredits =
    document.getElementById("openPhotoCredits");

const photoCreditsModal =
    document.getElementById("photoCreditsModal");

const closePhotoCredits =
    document.getElementById("closePhotoCredits");

const photoCreditsList =
    document.getElementById("photoCreditsList");

const photoCreditsSummary =
    document.getElementById("photoCreditsSummary");

const resetButton =
    document.getElementById("resetButton");

const backButton =
    document.getElementById("backButton");

const retryButton =
    document.getElementById("retryButton");

const menuButton =
    document.getElementById("menuButton");

const gameOver =
    document.getElementById("gameOver");

const gameBoard =
    document.getElementById("gameBoard");

const levelText =
    document.getElementById("level");

const scoreText =
    document.getElementById("score");

const livesText =
    document.getElementById("lives");

const livesInfo =
    document.getElementById("livesInfo");

const timerInfo =
    document.getElementById("timerInfo");

const timerText =
    document.getElementById("timer");

const pairsText =
    document.getElementById("pairs");

const totalPairsText =
    document.getElementById("totalPairs");

const comboText =
    document.getElementById("combo");

const message =
    document.getElementById("message");

const currentModeIcon =
    document.getElementById("currentModeIcon");

const currentModeName =
    document.getElementById("currentModeName");

const memoryGoal =
    document.getElementById("memoryGoal");

const goalText =
    document.getElementById("goalText");

const levelOverlay =
    document.getElementById("levelOverlay");

const memorizeTimer =
    document.getElementById("memorizeTimer");

const finalLevel =
    document.getElementById("finalLevel");

const finalScore =
    document.getElementById("finalScore");

const finalRecord =
    document.getElementById("finalRecord");

const classicRecord =
    document.getElementById("classicRecord");

const timeRecord =
    document.getElementById("timeRecord");

const survivalRecord =
    document.getElementById("survivalRecord");

const memoryRecord =
    document.getElementById("memoryRecord");



/* ==========================================
   VARIABILI
========================================== */

let mode = "classic";

let selectedMode = "classic";

let level = 1;

let score = 0;

let lives = 5;

let combo = 0;

let pairsFound = 0;

let totalPairs = 2;

let firstCard = null;

let secondCard = null;

let lockBoard = false;

let gameTimer = null;

let memorizeTimerInterval = null;

let levelTransition = null;

let timeLeft = 0;

let memoryTargets = [];

let memoryTargetIndex = 0;



/* ==========================================
   RECORD
========================================== */

let records = {

    classic:
        Number(
            localStorage.getItem(
                "footballMemoryClassic"
            )
        ) || 1,

    time:
        Number(
            localStorage.getItem(
                "footballMemoryTime"
            )
        ) || 1,

    survival:
        Number(
            localStorage.getItem(
                "footballMemorySurvival"
            )
        ) || 1,

    memory:
        Number(
            localStorage.getItem(
                "footballMemoryMemory"
            )
        ) || 1

};


updateRecordDisplay();



/* ==========================================
   DATI MODALITÀ
========================================== */

const modeData = {

    classic: {

        icon: "🎯",

        title: "Modalità Classica",

        description:
            "La modalità principale di Football Memory. Memorizza le carte, trova tutte le coppie e continua a superare livelli sempre più difficili.",

        rules: [

            "Trova tutte le coppie di calciatori.",

            "Hai 3 secondi per memorizzare le carte.",

            "Il numero di carte aumenta con i livelli.",

            "Le vite aumentano gradualmente.",

            "Il livello continua all'infinito."

        ]

    },


    time: {

        icon: "⏱️",

        title: "Modalità Tempo",

        description:
            "Qui non devi preoccuparti delle vite: devi essere veloce. Il cronometro è il tuo unico vero avversario.",

        rules: [

            "Non hai vite.",

            "Parti con 60 secondi.",

            "Ogni errore fa perdere 5 secondi.",

            "Una coppia corretta dà 3 secondi bonus.",

            "Completando i livelli il tempo aumenta."

        ]

    },


    survival: {

        icon: "🧬",

        title: "Modalità Survival",

        description:
            "Parti con 10 vite e cerca di arrivare il più lontano possibile. Le vite che perdi non tornano più.",

        rules: [

            "Parti con 10 vite.",

            "Ogni errore consuma una vita.",

            "Le vite NON vengono ripristinate.",

            "Le vite rimaste passano al livello successivo.",

            "Quando arrivi a 0 vite la partita termina."

        ]

    },


    memory: {

        icon: "🧠",

        title: "Modalità Memoria",

        description:
            "Non devi solamente trovare le coppie. Devi anche ricordare quali calciatori il gioco ti chiede di trovare.",

        rules: [

            "Il gioco crea degli obiettivi.",

            "All'inizio devi trovare Messi e Ronaldo.",

            "Devi trovare gli obiettivi nell'ordine richiesto.",

            "Gli obiettivi aumentano con i livelli.",

            "Completa tutti gli obiettivi per continuare."

        ]

    }

};



/* ==========================================
   SELEZIONE MODALITÀ
========================================== */

modeButtons.forEach(

    function(button) {

        button.addEventListener(

            "click",

            function() {

                selectedMode =
                    button.dataset.mode;

                openModeModal();

            }

        );

    }

);



/* ==========================================
   MODALE MODALITÀ
========================================== */

function openModeModal() {

    let data =
        modeData[selectedMode];


    modalIcon.textContent =
        data.icon;


    modalTitle.textContent =
        data.title;


    modalDescription.textContent =
        data.description;


    modalRules.innerHTML = "";


    data.rules.forEach(

        function(rule) {

            let p =
                document.createElement(
                    "p"
                );

            p.textContent =
                "✓ " + rule;

            modalRules.appendChild(p);

        }

    );


    modeModal.classList.remove(
        "hidden"
    );

}



closeModal.addEventListener(

    "click",

    function() {

        modeModal.classList.add(
            "hidden"
        );

    }

);



/* ==========================================
   GIOCA
========================================== */

modalPlay.addEventListener(

    "click",

    function() {

        mode =
            selectedMode;

        modeModal.classList.add(
            "hidden"
        );

        startGame();

    }

);



/* ==========================================
   CREDITI
========================================== */

creditsButton.addEventListener(

    "click",

    function() {

        creditsModal.classList.remove(
            "hidden"
        );

    }

);


closeCredits.addEventListener(

    "click",

    function() {

        creditsModal.classList.add(
            "hidden"
        );

    }

);


closeCreditsButton.addEventListener(

    "click",

    function() {

        creditsModal.classList.add(
            "hidden"
        );

    }

);



/* ==========================================
   FONTI IMMAGINI
========================================== */

openPhotoCredits.addEventListener(

    "click",

    function() {

        creditsModal.classList.add(
            "hidden"
        );

        renderPhotoCredits();

        photoCreditsModal.classList.remove(
            "hidden"
        );

    }

);


closePhotoCredits.addEventListener(

    "click",

    function() {

        photoCreditsModal.classList.add(
            "hidden"
        );

    }

);



function renderPhotoCredits() {

    photoCreditsList.innerHTML = "";


    let completeCount = 0;

    let missingCount = 0;


    uniquePlayers.forEach(

        function(player) {

            let credit =

                (typeof photoCredits !== "undefined" &&
                photoCredits[player.name]) ||

                {
                    author: "",
                    license: "",
                    source: ""
                };


            let isMissing =

                !credit.author ||
                !credit.license;


            if (isMissing) {

                missingCount++;

            }
            else {

                completeCount++;

            }


            let row =
                document.createElement(
                    "div"
                );

            row.classList.add(
                "photo-credit-row"
            );

            if (isMissing) {

                row.classList.add(
                    "missing"
                );

            }


            let noteHtml = "";

            if (credit.note) {

                noteHtml =

                    '<div class="photo-credit-note">⚠️ ' +
                    credit.note +
                    '</div>';

            }


            row.innerHTML =

                '<div class="photo-credit-top">' +

                    '<span class="photo-credit-name">' +
                    player.name +
                    '</span>' +

                    '<span class="photo-credit-badge' +
                    (isMissing ? ' missing' : '') +
                    '">' +
                    (isMissing ? '⚠️ Da completare' : '✓ Completo') +
                    '</span>' +

                '</div>' +

                '<div class="photo-credit-meta">' +

                    'Autore: ' +
                    (credit.author || 'da inserire') +
                    '<br>' +

                    'Licenza: ' +
                    (credit.license || 'da inserire') +

                    (credit.source ?
                        '<br>Fonte: ' + credit.source :
                        '') +

                '</div>' +

                noteHtml;


            photoCreditsList.appendChild(
                row
            );

        }

    );


    photoCreditsSummary.textContent =

        completeCount +
        " complete su " +
        uniquePlayers.length +
        (missingCount > 0 ?
            " — " + missingCount + " da rivedere" :
            " — tutte a posto");

}



/* ==========================================
   INIZIA PARTITA
========================================== */

function startGame() {

    clearAllTimers();


    home.classList.add(
        "hidden"
    );


    game.classList.remove(
        "hidden"
    );


    gameOver.classList.add(
        "hidden"
    );


    level = 1;

    score = 0;

    combo = 0;


    if (mode === "survival") {

        lives = 10;

    }
    else {

        lives = 5;

    }


    currentModeIcon.textContent =
        modeData[mode].icon;


    currentModeName.textContent =
        modeData[mode].title;


    startLevel();

}



/* ==========================================
   INIZIA LIVELLO
========================================== */

function startLevel() {

    clearAllTimers();


    pairsFound = 0;

    firstCard = null;

    secondCard = null;

    lockBoard = true;


    totalPairs =
        getPairsForLevel();


    if (mode === "classic") {

        lives =
            getClassicLives();

        timeLeft =
            getClassicTime();

    }


    if (mode === "time") {

        timeLeft =
            getTimeModeTime();

    }


    if (mode === "survival") {

        timeLeft =
            getSurvivalTime();

    }


    if (mode === "memory") {

        timeLeft =
            getMemoryTime();

        createMemoryTargets();

    }


    levelText.textContent =
        level;


    scoreText.textContent =
        score;


    livesText.textContent =
        lives;


    timerText.textContent =
        timeLeft;


    pairsText.textContent =
        0;


    totalPairsText.textContent =
        totalPairs;


    comboText.textContent =
        combo;


    message.textContent =
        "";


    if (mode === "time") {

        livesInfo.classList.add(
            "hidden"
        );

    }
    else {

        livesInfo.classList.remove(
            "hidden"
        );

    }


    if (mode === "survival") {

        timerInfo.classList.add(
            "hidden"
        );

    }
    else {

        timerInfo.classList.remove(
            "hidden"
        );

    }


    if (mode === "memory") {

        memoryGoal.classList.remove(
            "hidden"
        );

    }
    else {

        memoryGoal.classList.add(
            "hidden"
        );

    }


    createBoard();

    showMemorization();

}



/* ==========================================
   DIFFICOLTÀ
========================================== */

function getPairsForLevel() {

    return Math.min(

        level + 1,

        uniquePlayers.length

    );

}



/* ==========================================
   VITE CLASSICA
========================================== */

function getClassicLives() {

    return 5 +

        Math.floor(

            (level - 1) / 3

        );

}



/* ==========================================
   TEMPO CLASSICA
========================================== */

function getClassicTime() {

    return 45 +

        ((level - 1) * 5);

}



/* ==========================================
   TEMPO
========================================== */

function getTimeModeTime() {

    return 60 +

        ((level - 1) * 5);

}



/* ==========================================
   TEMPO SURVIVAL
========================================== */

function getSurvivalTime() {

    return Math.max(

        35,

        60 - (level - 1)

    );

}



/* ==========================================
   TEMPO MEMORIA
========================================== */

function getMemoryTime() {

    return 60 +

        ((level - 1) * 3);

}



/* ==========================================
   OBIETTIVI MEMORIA
========================================== */

function createMemoryTargets() {

    memoryTargets = [];

    memoryTargetIndex = 0;


    let messi =
        findPlayer(
            "Lionel Messi"
        );


    let ronaldo =
        findPlayer(
            "Cristiano Ronaldo"
        );


    if (level === 1) {

        memoryTargets.push(
            messi
        );

        memoryTargets.push(
            ronaldo
        );

    }


    else if (level === 2) {

        memoryTargets.push(
            messi
        );

        memoryTargets.push(
            ronaldo
        );


        let extra =
            getRandomPlayers(

                1,

                [
                    messi.name,
                    ronaldo.name
                ]

            )[0];


        memoryTargets.push(
            extra
        );

    }


    else {

        let targetCount =
            Math.min(

                2 +
                Math.floor(level / 3),

                5,

                totalPairs

            );


        memoryTargets =
            getRandomPlayers(
                targetCount
            );

    }


    updateMemoryGoal();

}



/* ==========================================
   AGGIORNA OBIETTIVO
========================================== */

function updateMemoryGoal() {

    if (mode !== "memory") {

        memoryGoal.classList.add(
            "hidden"
        );

        return;

    }


    memoryGoal.classList.remove(
        "hidden"
    );


    if (

        memoryTargetIndex <
        memoryTargets.length

    ) {

        goalText.textContent =

            memoryTargets[
                memoryTargetIndex
            ].name;

    }

    else {

        goalText.textContent =
            "Obiettivi completati!";

    }

}



/* ==========================================
   CERCA GIOCATORE
========================================== */

function findPlayer(name) {

    return uniquePlayers.find(

        function(player) {

            return player.name === name;

        }

    );

}



/* ==========================================
   CREA TAVOLO
========================================== */

function createBoard() {

    gameBoard.innerHTML = "";


    let selectedPlayers;


    if (mode === "memory") {

        selectedPlayers =
            createMemoryBoardPlayers();

    }

    else {

        selectedPlayers =
            getRandomPlayers(
                totalPairs
            );

    }


    let cards = [];


    selectedPlayers.forEach(

        function(player) {

            cards.push(player);

            cards.push(player);

        }

    );


    shuffle(cards);


    let layout =
        calculateBoardLayout(
            cards.length
        );


    gameBoard.style.gridTemplateColumns =

        "repeat(" +
        layout.columns +
        ", " +
        layout.cardSize +
        "px)";


    gameBoard.style.gap =
        layout.gap + "px";


    cards.forEach(

        function(player) {

            createCard(player);

        }

    );

}



/* ==========================================
   CREA CARTA
========================================== */

function createCard(player) {

    let card =
        document.createElement(
            "div"
        );


    card.classList.add(
        "card"
    );


    card.dataset.name =
        player.name;


    let stickerNumber =

        uniquePlayers.findIndex(

            function(item) {

                return item.name === player.name;

            }

        ) + 1;


    let numberLabel =

        String(stickerNumber).padStart(
            2,
            "0"
        );


    card.innerHTML =

        '<div class="card-inner">' +

            '<div class="card-front">' +

                '<div class="card-front-emblem">⚽</div>' +

            '</div>' +

            '<div class="card-back">' +

                '<span class="card-number">N.' +
                numberLabel +
                '</span>' +

                '<div class="card-photo">' +

                    '<img ' +

                        'src="' +
                        player.image +
                        '" ' +

                        'alt="' +
                        player.name +
                        '">' +

                '</div>' +

                '<div class="card-caption">' +

                    '<span>' +

                        player.name +

                    '</span>' +

                '</div>' +

            '</div>' +

        '</div>';


    let image =
        card.querySelector(
            "img"
        );


    image.addEventListener(

        "error",

        function() {

            image.style.display =
                "none";

        }

    );


    card.addEventListener(

        "click",

        function() {

            flipCard(card);

        }

    );


    gameBoard.appendChild(
        card
    );

}



/* ==========================================
   TAVOLO MEMORIA
========================================== */

function createMemoryBoardPlayers() {

    let result = [];


    memoryTargets.forEach(

        function(player) {

            result.push(player);

        }

    );


    let remaining =

        totalPairs -
        result.length;


    if (remaining > 0) {

        let excluded =
            result.map(

                function(player) {

                    return player.name;

                }

            );


        let extra =
            getRandomPlayers(

                remaining,

                excluded

            );


        extra.forEach(

            function(player) {

                result.push(player);

            }

        );

    }


    return result;

}



/* ==========================================
   DIMENSIONE CARTE IN BASE ALLO SCHERMO
========================================== */

function getCardSizeRange() {

    let width = window.innerWidth;


    if (width <= 650) {

        return {
            min: 76,
            max: 98,
            gap: 8
        };

    }


    if (width <= 1050) {

        return {
            min: 98,
            max: 124,
            gap: 12
        };

    }


    if (width >= 1500) {

        return {
            min: 118,
            max: 150,
            gap: 16
        };

    }


    return {
        min: 108,
        max: 136,
        gap: 14
    };

}



/* ==========================================
   COLONNE E DIMENSIONE TAVOLO
========================================== */

function calculateBoardLayout(
    numberOfCards
) {

    let range =
        getCardSizeRange();


    let availableWidth =
        gameBoard.clientWidth ||
        (window.innerWidth - 40);


    /* numero di colonne ideale per un tavolo
       il più possibile quadrato */

    let columns =
        Math.ceil(
            Math.sqrt(numberOfCards)
        );


    /* non superare le colonne che entrano
       nello spazio disponibile alla dimensione
       minima consentita */

    let maxColumns =
        Math.floor(
            (availableWidth + range.gap) /
            (range.min + range.gap)
        );

    if (maxColumns < 1) {

        maxColumns = 1;

    }


    columns =
        Math.min(columns, maxColumns);

    columns =
        Math.min(columns, numberOfCards);

    columns =
        Math.max(columns, 2);


    /* dimensione carta che riempie lo spazio
       disponibile, entro i limiti min/max */

    let cardSize =
        Math.floor(

            (availableWidth -
            (range.gap * (columns - 1))) /

            columns

        );

    cardSize =
        Math.min(cardSize, range.max);

    cardSize =
        Math.max(cardSize, range.min);


    return {
        columns: columns,
        cardSize: cardSize,
        gap: range.gap
    };

}



/* ==========================================
   MEMORIZZAZIONE
========================================== */

function showMemorization() {

    levelOverlay.classList.remove(
        "hidden"
    );


    let seconds = 3;


    memorizeTimer.textContent =
        seconds;


    let cards =
        document.querySelectorAll(
            ".card"
        );


    cards.forEach(

        function(card) {

            card.classList.add(
                "flipped"
            );

        }

    );


    memorizeTimerInterval =

        setInterval(

            function() {

                seconds--;

                memorizeTimer.textContent =
                    seconds;


                if (seconds <= 0) {

                    clearInterval(
                        memorizeTimerInterval
                    );


                    memorizeTimerInterval =
                        null;


                    levelOverlay.classList.add(
                        "hidden"
                    );


                    cards.forEach(

                        function(card) {

                            if (

                                !card.classList.contains(
                                    "matched"
                                )

                            ) {

                                card.classList.remove(
                                    "flipped"
                                );

                            }

                        }

                    );


                    lockBoard = false;

                    startTimer();

                }

            },

            1000

        );

}



/* ==========================================
   TIMER
========================================== */

function startTimer() {

    clearInterval(
        gameTimer
    );


    if (mode === "survival") {

        return;

    }


    timerText.textContent =
        timeLeft;


    gameTimer =

        setInterval(

            function() {

                timeLeft--;

                timerText.textContent =
                    timeLeft;


                if (timeLeft <= 0) {

                    clearInterval(
                        gameTimer
                    );


                    message.textContent =
                        "⏰ Tempo scaduto!";


                    endGame();

                }

            },

            1000

        );

}



/* ==========================================
   GIRARE CARTA
========================================== */

function flipCard(card) {

    if (lockBoard) {

        return;

    }


    if (card === firstCard) {

        return;

    }


    if (

        card.classList.contains(
            "matched"
        )

    ) {

        return;

    }


    card.classList.add(
        "flipped"
    );


    if (firstCard === null) {

        firstCard = card;

        return;

    }


    secondCard = card;

    lockBoard = true;


    checkMatch();

}



/* ==========================================
   CONTROLLO COPPIA
========================================== */

function checkMatch() {

    let match =

        firstCard.dataset.name ===
        secondCard.dataset.name;


    if (match) {

        handleMatch();

    }

    else {

        handleError();

    }

}



/* ==========================================
   COPPIA CORRETTA
========================================== */

function handleMatch() {

    firstCard.classList.add(
        "matched"
    );


    secondCard.classList.add(
        "matched"
    );


    pairsFound++;

    combo++;


    let points =

        (100 * level) +
        (combo * 25);


    points +=
        timeLeft * 2;


    score +=
        points;


    scoreText.textContent =
        score;


    pairsText.textContent =
        pairsFound;


    comboText.textContent =
        combo;


    message.textContent =

        "✓ Coppia trovata! +" +
        points;



    /* TEMPO */

    if (mode === "time") {

        timeLeft += 3;

        timerText.textContent =
            timeLeft;

    }



    /* MEMORIA */

    if (mode === "memory") {

        let currentTarget =

            memoryTargets[
                memoryTargetIndex
            ];


        if (

            currentTarget &&

            firstCard.dataset.name ===
            currentTarget.name

        ) {

            memoryTargetIndex++;

            updateMemoryGoal();


            message.textContent =

                "🎯 Obiettivo trovato! +" +
                points;

        }

    }


    firstCard = null;

    secondCard = null;

    lockBoard = false;



    /* COMPLETAMENTO */

    if (

        pairsFound === totalPairs

    ) {


        if (

            mode === "memory" &&

            memoryTargetIndex <
            memoryTargets.length

        ) {

            message.textContent =
                "⚠️ Hai trovato tutte le coppie, ma non tutti gli obiettivi!";


            lockBoard = true;


            setTimeout(

                function() {

                    endGame();

                },

                1200

            );


            return;

        }


        levelCompleted();

    }

}



/* ==========================================
   ERRORE
========================================== */

function handleError() {

    combo = 0;

    comboText.textContent =
        combo;


    if (mode === "time") {

        timeLeft -= 5;


        if (timeLeft < 0) {

            timeLeft = 0;

        }


        timerText.textContent =
            timeLeft;


        message.textContent =
            "✕ Errore! -5 secondi";

    }

    else {

        lives--;

        livesText.textContent =
            lives;


        message.textContent =
            "✕ Non sono uguali!";

    }


    let first =
        firstCard;

    let second =
        secondCard;


    setTimeout(

        function() {

            if (first) {

                first.classList.remove(
                    "flipped"
                );

            }


            if (second) {

                second.classList.remove(
                    "flipped"
                );

            }


            firstCard = null;

            secondCard = null;


            if (

                mode !== "time" &&
                lives <= 0

            ) {

                endGame();

            }

            else if (

                mode === "time" &&
                timeLeft <= 0

            ) {

                endGame();

            }

            else {

                lockBoard = false;

            }

        },

        650

    );

}



/* ==========================================
   LIVELLO COMPLETATO
========================================== */

function levelCompleted() {

    clearInterval(
        gameTimer
    );


    let bonus =
        level * 200;


    score +=
        bonus;


    scoreText.textContent =
        score;


    message.textContent =

        "🔥 Livello completato! +" +
        bonus;



    /* RECORD */

    if (

        level + 1 >
        records[mode]

    ) {

        records[mode] =
            level + 1;


        localStorage.setItem(

            "footballMemory" +
            capitalize(mode),

            records[mode]

        );


        updateRecordDisplay();

    }


    levelTransition =

        setTimeout(

            function() {

                level++;

                startLevel();

            },

            1200

        );

}



/* ==========================================
   GAME OVER
========================================== */

function endGame() {

    clearAllTimers();


    lockBoard = true;


    if (

        level >
        records[mode]

    ) {

        records[mode] =
            level;


        localStorage.setItem(

            "footballMemory" +
            capitalize(mode),

            records[mode]

        );


        updateRecordDisplay();

    }


    finalLevel.textContent =
        level;


    finalScore.textContent =
        score;


    finalRecord.textContent =
        records[mode];


    gameOver.classList.remove(
        "hidden"
    );

}



/* ==========================================
   RIPROVA
========================================== */

retryButton.addEventListener(

    "click",

    function() {

        gameOver.classList.add(
            "hidden"
        );


        startGame();

    }

);



/* ==========================================
   TORNA AL MENU
========================================== */

backButton.addEventListener(

    "click",

    function() {

        clearAllTimers();


        game.classList.add(
            "hidden"
        );


        gameOver.classList.add(
            "hidden"
        );


        home.classList.remove(
            "hidden"
        );

    }

);


menuButton.addEventListener(

    "click",

    function() {

        clearAllTimers();


        gameOver.classList.add(
            "hidden"
        );


        game.classList.add(
            "hidden"
        );


        home.classList.remove(
            "hidden"
        );

    }

);



/* ==========================================
   RESET RECORD
========================================== */

resetButton.addEventListener(

    "click",

    function() {

        let confirmation =

            confirm(
                "Vuoi davvero cancellare tutti i record?"
            );


        if (confirmation) {

            localStorage.removeItem(
                "footballMemoryClassic"
            );

            localStorage.removeItem(
                "footballMemoryTime"
            );

            localStorage.removeItem(
                "footballMemorySurvival"
            );

            localStorage.removeItem(
                "footballMemoryMemory"
            );


            records = {

                classic: 1,

                time: 1,

                survival: 1,

                memory: 1

            };


            updateRecordDisplay();

        }

    }

);



/* ==========================================
   AGGIORNA RECORD
========================================== */

function updateRecordDisplay() {

    classicRecord.textContent =
        records.classic;


    timeRecord.textContent =
        records.time;


    survivalRecord.textContent =
        records.survival;


    memoryRecord.textContent =
        records.memory;

}



/* ==========================================
   GIOCATORI CASUALI
========================================== */

function getRandomPlayers(
    number,
    excluded = []
) {

    let available =
        uniquePlayers.filter(

            function(player) {

                return !excluded.includes(
                    player.name
                );

            }

        );


    shuffle(available);


    return available.slice(
        0,
        number
    );

}



/* ==========================================
   SHUFFLE
========================================== */

function shuffle(array) {

    for (

        let i = array.length - 1;

        i > 0;

        i--

    ) {

        let j =

            Math.floor(

                Math.random() *
                (i + 1)

            );


        let temp =
            array[i];


        array[i] =
            array[j];


        array[j] =
            temp;

    }

}



/* ==========================================
   TIMER
========================================== */

function clearAllTimers() {

    clearInterval(
        gameTimer
    );


    clearInterval(
        memorizeTimerInterval
    );


    clearTimeout(
        levelTransition
    );


    gameTimer = null;

    memorizeTimerInterval = null;

    levelTransition = null;

}



/* ==========================================
   CAPITALIZE
========================================== */

function capitalize(text) {

    return text.charAt(0).toUpperCase() +
        text.slice(1);

}



/* ==========================================
   RIDIMENSIONAMENTO FINESTRA
========================================== */

let resizeTimeout = null;

window.addEventListener(

    "resize",

    function() {

        clearTimeout(
            resizeTimeout
        );


        resizeTimeout =

            setTimeout(

                function() {

                    if (

                        game.classList.contains(
                            "hidden"
                        )

                    ) {

                        return;

                    }


                    let cardCount =
                        gameBoard.children.length;

                    if (cardCount === 0) {

                        return;

                    }


                    let layout =
                        calculateBoardLayout(
                            cardCount
                        );


                    gameBoard.style.gridTemplateColumns =

                        "repeat(" +
                        layout.columns +
                        ", " +
                        layout.cardSize +
                        "px)";


                    gameBoard.style.gap =
                        layout.gap + "px";

                },

                200

            );

    }

);