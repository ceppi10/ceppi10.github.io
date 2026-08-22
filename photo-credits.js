/* ==========================================
   CREDITI FOTOGRAFICI

   Un blocco per ogni calciatore presente in
   playerData (script.js). La chiave DEVE
   corrispondere esattamente al nome usato li.

   Se un campo e vuoto ("") significa che
   l'informazione non e stata ancora trovata:
   nella schermata "Fonti immagini" del gioco
   quella riga verra segnalata in rosso come
   incompleta, cosi non rischi di dimenticartela.

   note: eventuali dubbi da verificare a mano
   (es. autore non chiaramente indicato nella
   pagina originale).
========================================== */

const photoCredits = {

    "Lionel Messi": {
        author: "Kirillov Benedictov",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Cristiano Ronaldo": {
        author: "Анна Нэсси (Anna Nessi)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Neymar": {
        author: "Agência Brasil Fotografias",
        license: "CC BY 2.0",
        source: "Agência Brasil"
    },

    "Kylian Mbappé": {
        author: "Антон Зайцев (Anton Zaytsev)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Erling Haaland": {
        author: "Pantkiewicz",
        license: "CC BY-SA 2.0",
        source: "Flickr",
        note: "verifica: foto dello stadio di Tokyo (amichevole Manchester City), il calciatore non è nominato esplicitamente nel testo originale"
    },

    "Mohamed Salah": {
        author: "Дмитрий Голубович (Dmitriy Golubovich)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Luka Modrić": {
        author: "Антон Зайцев (Anton Zaytsev)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Kevin De Bruyne": {
        author: "Светлана Бекетова (Svetlana Beketova)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Robert Lewandowski": {
        author: "Slawek",
        license: "CC BY-SA 2.0",
        source: "Wikimedia Commons"
    },

    "Vinícius Júnior": {
        author: "Mulinelli All-Pro",
        license: "CC BY-SA 2.0",
        source: "Flickr"
    },

    "Jude Bellingham": {
        author: "Junta de Andalucía",
        license: "CC BY-SA 2.0",
        source: "Flickr",
        note: "verifica: foto di gruppo Copa del Rey 2025 (Vinícius, Bellingham, Rodrygo)"
    },

    "Harry Kane": {
        author: "Numero 10 (Number 10 Downing Street)",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    },

    "Diego Maradona": {
        author: "Autore sconosciuto",
        license: "Pubblico dominio",
        source: ""
    },

    "Ángel Di María": {
        author: "Kirillov Benedictov",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Sergio Agüero": {
        author: "Голубович Дмитрий (Golubovich Dmitriy)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Lautaro Martínez": {
        author: "Agencia de Noticias ANDES",
        license: "CC BY-SA 2.0",
        source: "Wikimedia Commons"
    },

    "Julián Álvarez": {
        author: "Pantkiewicz",
        license: "CC BY-SA 2.0",
        source: "Flickr"
    },

    "Luís Figo": {
        author: "Non specificato con chiarezza (remix di un utente Commons)",
        license: "CC BY-SA 2.0",
        source: "Wikimedia Commons",
        note: "verifica: l'autore originale della foto non è chiaramente indicato nel testo di partenza"
    },

    "Bruno Fernandes": {
        author: "Антон Зайцев (Anton Zaytsev)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Bernardo Silva": {
        author: "Kirillov Benedictov",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "João Félix": {
        author: "Анна Нэсси (Anna Nessi)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Pelé": {
        author: "Autore sconosciuto",
        license: "Pubblico dominio",
        source: "El Gráfico"
    },

    "Ronaldo Nazário": {
        author: "Georges Biard",
        license: "CC BY-SA 3.0",
        source: "Wikimedia Commons"
    },

    "Ronaldinho": {
        author: "Darz Mol",
        license: "CC BY-SA 2.5",
        source: "Wikimedia Commons"
    },

    "Kaká": {
        author: "Tsutomu Takasu",
        license: "CC BY 2.0",
        source: "Flickr"
    },

    "Rodrygo": {
        author: "Junta de Andalucía",
        license: "CC BY-SA 2.0",
        source: "Flickr"
    },

    "Adriano": {
        author: "Alex Carvalho",
        license: "CC BY-SA 2.0",
        source: "Flickr"
    },

    "Thierry Henry": {
        author: "Shay",
        license: "CC BY-SA 3.0 / GNU FDL",
        source: "Photobucket"
    },

    "Antoine Griezmann": {
        author: "Kirillov Benedictov",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "N'Golo Kanté": {
        author: "Kirillov Benedictov",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Karim Benzema": {
        author: "Антон Зайцев (Anton Zaytsev)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Paul Pogba": {
        author: "Ultraslansi",
        license: "CC BY-SA 3.0",
        source: "Wikimedia Commons"
    },

    "Gianluigi Buffon": {
        author: "Doha Stadium Plus Qatar (opera derivata: Alza08)",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    },

    "Francesco Totti": {
        author: "Roberto Vicario (opera derivata: Clarus The Dogcow)",
        license: "CC BY-SA 3.0",
        source: "Wikimedia Commons"
    },

    "Alessandro Del Piero": {
        author: "James Adams (opera derivata: RanZag)",
        license: "CC BY 2.0",
        source: "Juventus (foto originale)"
    },

    "Andrea Pirlo": {
        author: "Рыбакова Елена (Rybakova Elena)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Paolo Maldini": {
        author: "Yelena Rybakova per Soccer.ru",
        license: "CC BY-SA 3.0",
        source: "soccer.ru",
        note: "permesso confermato anche tramite team VRT di Wikimedia"
    },

    "Fabio Cannavaro": {
        author: "Utente Snake90 (Wikipedia in italiano)",
        license: "Pubblico dominio",
        source: "Wikipedia"
    },

    "Gianfranco Zola": {
        author: "@cfcunofficial (Chelsea Debs)",
        license: "CC BY-SA 2.0",
        source: "Wikimedia Commons"
    },

    "Gianluigi Donnarumma": {
        author: "Doha Stadium Plus Qatar",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    },

    "Andrés Iniesta": {
        author: "Дмитрий Неймырок (Dmitriy Neymyrok)",
        license: "CC BY-SA 3.0",
        source: "Football.ua"
    },

    "Xavi": {
        author: "Doha Stadium Plus Qatar",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    },

    "Sergio Ramos": {
        author: "Дмитрий Неймырок (Dmitriy Neymyrok)",
        license: "CC BY-SA 3.0",
        source: "Football.ua"
    },

    "Iker Casillas": {
        author: "Зайцев Антон (Zaytsev Anton)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "David Villa": {
        author: "Tânia Rêgo / Agência Brasil",
        license: "CC BY 3.0",
        source: "Agência Brasil"
    },

    "Fernando Torres": {
        author: "Cristina Cifuentes",
        license: "CC BY 2.0",
        source: "Flickr"
    },

    "Carles Puyol": {
        author: "Darz Mol",
        license: "CC BY-SA 2.5",
        source: "Wikimedia Commons"
    },

    "Toni Kroos": {
        author: "Антон Зайцев (Anton Zaytsev)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Manuel Neuer": {
        author: "Steindy",
        license: "CC BY-SA (multi-versione) / GNU FDL",
        source: "Wikimedia Commons"
    },

    "Thomas Müller": {
        author: "Michael Kranewitter",
        license: "CC BY 3.0",
        source: "Wikimedia Commons"
    },

    "Mesut Özil": {
        author: "Steindy",
        license: "CC BY-SA (multi-versione) / GNU FDL",
        source: "Wikimedia Commons"
    },

    "Arjen Robben": {
        author: "Rayand",
        license: "CC BY 2.0",
        source: "Flickr"
    },

    "Wesley Sneijder": {
        author: "Kathi Rudminat",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    },

    "Eden Hazard": {
        author: "Светлана Бекетова (Svetlana Beketova)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Sergio Busquets": {
        author: "Non specificato nel testo originale",
        license: "CC BY-SA (multi-versione) / GNU FDL",
        source: "Wikimedia Commons",
        note: "verifica: il nome dell'autore non compariva nella porzione di pagina copiata"
    },

    "Cesc Fàbregas": {
        author: "Web Summit (Sam Barnes / Sportsfile)",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    },

    "David Beckham": {
        author: "Calebrw",
        license: "CC BY-SA 3.0",
        source: "Wikipedia (en)"
    },

    "Marco Reus": {
        author: "Tim Reckmann",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    },

    "Luis Suárez": {
        author: "Анна Нэсси (Anna Nessi)",
        license: "CC BY-SA 3.0",
        source: "soccer.ru"
    },

    "Zlatan Ibrahimović": {
        author: "Ricardo Alvarez",
        license: "CC BY 2.0",
        source: "Wikimedia Commons"
    }

};