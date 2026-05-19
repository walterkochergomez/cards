// ============================================
//  DEUTSCHCARDS — Lógica completa
// ============================================

// ── 1. BASE DE DATOS (60 verbos) ────────────
const DATABASE = [
    { id:  1, german: "machen",      spanish: "hacer",         perfekt: "hat gemacht",      prateritum: "machte" },
    { id:  2, german: "gehen",       spanish: "ir",            perfekt: "ist gegangen",     prateritum: "ging" },
    { id:  3, german: "sehen",       spanish: "ver",           perfekt: "hat gesehen",      prateritum: "sah" },
    { id:  4, german: "essen",       spanish: "comer",         perfekt: "hat gegessen",     prateritum: "aß" },
    { id:  5, german: "trinken",     spanish: "beber",         perfekt: "hat getrunken",    prateritum: "trank" },
    { id:  6, german: "kommen",      spanish: "venir",         perfekt: "ist gekommen",     prateritum: "kam" },
    { id:  7, german: "fahren",      spanish: "conducir/ir",   perfekt: "ist gefahren",     prateritum: "fuhr" },
    { id:  8, german: "schlafen",    spanish: "dormir",        perfekt: "hat geschlafen",   prateritum: "schlief" },
    { id:  9, german: "lesen",       spanish: "leer",          perfekt: "hat gelesen",      prateritum: "las" },
    { id: 10, german: "schreiben",   spanish: "escribir",      perfekt: "hat geschrieben",  prateritum: "schrieb" },
    { id: 11, german: "sprechen",    spanish: "hablar",        perfekt: "hat gesprochen",   prateritum: "sprach" },
    { id: 12, german: "hören",       spanish: "escuchar/oír",  perfekt: "hat gehört",       prateritum: "hörte" },
    { id: 13, german: "kaufen",      spanish: "comprar",       perfekt: "hat gekauft",      prateritum: "kaufte" },
    { id: 14, german: "arbeiten",    spanish: "trabajar",      perfekt: "hat gearbeitet",   prateritum: "arbeitete" },
    { id: 15, german: "wohnen",      spanish: "vivir/residir", perfekt: "hat gewohnt",      prateritum: "wohnte" },
    { id: 16, german: "lernen",      spanish: "aprender",      perfekt: "hat gelernt",      prateritum: "lernte" },
    { id: 17, german: "helfen",      spanish: "ayudar",        perfekt: "hat geholfen",     prateritum: "half" },
    { id: 18, german: "finden",      spanish: "encontrar",     perfekt: "hat gefunden",     prateritum: "fand" },
    { id: 19, german: "denken",      spanish: "pensar",        perfekt: "hat gedacht",      prateritum: "dachte" },
    { id: 20, german: "bringen",     spanish: "traer",         perfekt: "hat gebracht",     prateritum: "brachte" },
    { id: 21, german: "nehmen",      spanish: "tomar/coger",   perfekt: "hat genommen",     prateritum: "nahm" },
    { id: 22, german: "wissen",      spanish: "saber",         perfekt: "hat gewusst",      prateritum: "wusste" },
    { id: 23, german: "kennen",      spanish: "conocer",       perfekt: "hat gekannt",      prateritum: "kannte" },
    { id: 24, german: "geben",       spanish: "dar",           perfekt: "hat gegeben",      prateritum: "gab" },
    { id: 25, german: "stehen",      spanish: "estar de pie",  perfekt: "hat gestanden",    prateritum: "stand" },
    { id: 26, german: "laufen",      spanish: "correr/andar",  perfekt: "ist gelaufen",     prateritum: "lief" },
    { id: 27, german: "liegen",      spanish: "estar tumbado", perfekt: "hat gelegen",      prateritum: "lag" },
    { id: 28, german: "sitzen",      spanish: "estar sentado", perfekt: "hat gesessen",     prateritum: "saß" },
    { id: 29, german: "treffen",     spanish: "encontrarse",   perfekt: "hat getroffen",    prateritum: "traf" },
    { id: 30, german: "verstehen",   spanish: "entender",      perfekt: "hat verstanden",   prateritum: "verstand" },
    { id: 31, german: "beginnen",    spanish: "empezar",       perfekt: "hat begonnen",     prateritum: "begann" },
    { id: 32, german: "verlieren",   spanish: "perder",        perfekt: "hat verloren",     prateritum: "verlor" },
    { id: 33, german: "gewinnen",    spanish: "ganar",         perfekt: "hat gewonnen",     prateritum: "gewann" },
    { id: 34, german: "fallen",      spanish: "caer",          perfekt: "ist gefallen",     prateritum: "fiel" },
    { id: 35, german: "wachsen",     spanish: "crecer",        perfekt: "ist gewachsen",    prateritum: "wuchs" },
    { id: 36, german: "rufen",       spanish: "llamar",        perfekt: "hat gerufen",      prateritum: "rief" },
    { id: 37, german: "halten",      spanish: "mantener/parar",perfekt: "hat gehalten",     prateritum: "hielt" },
    { id: 38, german: "zeigen",      spanish: "mostrar",       perfekt: "hat gezeigt",      prateritum: "zeigte" },
    { id: 39, german: "öffnen",      spanish: "abrir",         perfekt: "hat geöffnet",     prateritum: "öffnete" },
    { id: 40, german: "schließen",   spanish: "cerrar",        perfekt: "hat geschlossen",  prateritum: "schloss" },
    { id: 41, german: "fragen",      spanish: "preguntar",     perfekt: "hat gefragt",      prateritum: "fragte" },
    { id: 42, german: "antworten",   spanish: "responder",     perfekt: "hat geantwortet",  prateritum: "antwortete" },
    { id: 43, german: "erklären",    spanish: "explicar",      perfekt: "hat erklärt",      prateritum: "erklärte" },
    { id: 44, german: "bezahlen",    spanish: "pagar",         perfekt: "hat bezahlt",      prateritum: "bezahlte" },
    { id: 45, german: "bestellen",   spanish: "pedir/ordenar", perfekt: "hat bestellt",     prateritum: "bestellte" },
    { id: 46, german: "reisen",      spanish: "viajar",        perfekt: "ist gereist",      prateritum: "reiste" },
    { id: 47, german: "tanzen",      spanish: "bailar",        perfekt: "hat getanzt",      prateritum: "tanzte" },
    { id: 48, german: "singen",      spanish: "cantar",        perfekt: "hat gesungen",     prateritum: "sang" },
    { id: 49, german: "spielen",     spanish: "jugar/tocar",   perfekt: "hat gespielt",     prateritum: "spielte" },
    { id: 50, german: "kochen",      spanish: "cocinar",       perfekt: "hat gekocht",      prateritum: "kochte" },
    { id: 51, german: "waschen",     spanish: "lavar",         perfekt: "hat gewaschen",    prateritum: "wusch" },
    { id: 52, german: "putzen",      spanish: "limpiar",       perfekt: "hat geputzt",      prateritum: "putzte" },
    { id: 53, german: "schicken",    spanish: "enviar",        perfekt: "hat geschickt",    prateritum: "schickte" },
    { id: 54, german: "empfangen",   spanish: "recibir",       perfekt: "hat empfangen",    prateritum: "empfing" },
    { id: 55, german: "besuchen",    spanish: "visitar",       perfekt: "hat besucht",      prateritum: "besuchte" },
    { id: 56, german: "einladen",    spanish: "invitar",       perfekt: "hat eingeladen",   prateritum: "lud ein" },
    { id: 57, german: "feiern",      spanish: "celebrar",      perfekt: "hat gefeiert",     prateritum: "feierte" },
    { id: 58, german: "schmerzen",   spanish: "doler",         perfekt: "hat geschmerzt",   prateritum: "schmerzte" },
    { id: 59, german: "vergessen",   spanish: "olvidar",       perfekt: "hat vergessen",    prateritum: "vergaß" },
    { id: 60, german: "erinnern",    spanish: "recordar",      perfekt: "hat erinnert",     prateritum: "erinnerte" },
];

// ── 2. ESTADO GLOBAL ────────────────────────
let userData = {};
let currentSessionCards = [];
let currentCardIndex = 0;
let sessionCorrect = 0;
let sessionIncorrect = 0;
let currentFilter = 'all';
let selectedIds = new Set();

// Carga datos del localStorage
function loadData() {
    try {
        const raw = localStorage.getItem('deutschcards_v2');
        userData = raw ? JSON.parse(raw) : {};
    } catch { userData = {}; }
}

function saveData() {
    localStorage.setItem('deutschcards_v2', JSON.stringify(userData));
}

// ── 3. DOM REFERENCIAS ──────────────────────
const homeScreen       = document.getElementById('home-screen');
const selectionScreen  = document.getElementById('selection-screen');
const studyScreen      = document.getElementById('study-screen');
const doneScreen       = document.getElementById('done-screen');
const wordListDiv      = document.getElementById('word-list');
const flashcard        = document.getElementById('flashcard');
const evalButtons      = document.getElementById('evaluation-buttons');
const cardHint         = document.getElementById('card-hint');

// ── 4. NAVEGACIÓN ───────────────────────────
function showScreen(screen) {
    [homeScreen, selectionScreen, studyScreen, doneScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

// Home → Selección
document.getElementById('go-select-btn').addEventListener('click', () => {
    selectedIds.clear();
    renderWordList();
    showScreen(selectionScreen);
});

// Home → Estudio directo (solo repasos pendientes)
document.getElementById('go-study-btn').addEventListener('click', () => {
    const now = Date.now();
    const dueCards = DATABASE.filter(w => {
        const d = userData[w.id];
        return d && d.status === 'studying' && now >= d.nextReview;
    }).map(w => ({ ...w, ...userData[w.id] }));

    if (dueCards.length === 0) {
        alert("No tienes repasos pendientes hoy. Selecciona nuevas palabras para estudiar.");
        return;
    }
    startSession(dueCards, 'Repasos');
});

// Selección → Home
document.getElementById('back-from-selection').addEventListener('click', () => {
    showScreen(homeScreen);
    updateHomeStats();
});

// Estudio → Home
document.getElementById('back-from-study').addEventListener('click', () => {
    if (confirm('¿Salir de la sesión? El progreso parcial se guarda.')) {
        showScreen(homeScreen);
        updateHomeStats();
    }
});

// Done → Home
document.getElementById('done-home-btn').addEventListener('click', () => {
    showScreen(homeScreen);
    updateHomeStats();
});

// ── 5. HOME STATS ───────────────────────────
function updateHomeStats() {
    const now = Date.now();
    const total = DATABASE.length;
    const studying = DATABASE.filter(w => userData[w.id]?.status === 'studying').length;
    const due = DATABASE.filter(w => {
        const d = userData[w.id];
        return d?.status === 'studying' && now >= d.nextReview;
    }).length;

    document.getElementById('stat-total').textContent    = total;
    document.getElementById('stat-studying').textContent = studying;
    document.getElementById('stat-due').textContent      = due;

    const goBtn = document.getElementById('go-study-btn');
    if (due > 0) {
        goBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg> Repasar (${due} pendientes)`;
    } else {
        goBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg> Comenzar sesión`;
    }
}

// ── 6. LISTA DE SELECCIÓN ───────────────────
function renderWordList() {
    const query  = (document.getElementById('search-input').value || '').toLowerCase();
    const now    = Date.now();

    let words = DATABASE.filter(w => {
        const d = userData[w.id];
        const status = d?.status;
        if (currentFilter === 'new')      return !status;
        if (currentFilter === 'studying') return status === 'studying';
        return true;
    });

    if (query) {
        words = words.filter(w =>
            w.german.toLowerCase().includes(query) ||
            w.spanish.toLowerCase().includes(query)
        );
    }

    wordListDiv.innerHTML = '';

    if (words.length === 0) {
        wordListDiv.innerHTML = '<div class="word-list-empty">No se encontraron verbos</div>';
        return;
    }

    words.forEach(w => {
        const d        = userData[w.id];
        const isStudying = d?.status === 'studying';
        const isDue      = isStudying && now >= d.nextReview;
        const isSelected = selectedIds.has(w.id);

        const item = document.createElement('div');
        item.className = 'word-item' + (isSelected ? ' selected' : '') + (isStudying ? ' studying-item' : '');

        let statusHTML = '';
        if (isDue)      statusHTML = `<span class="word-status-tag due">repasar hoy</span>`;
        else if (isStudying) {
            const days = Math.ceil((d.nextReview - now) / 86400000);
            statusHTML = `<span class="word-status-tag studying">en ${days}d</span>`;
        }

        item.innerHTML = `
            <div class="word-checkbox">
                ${isSelected ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
            </div>
            <div class="word-info">
                <div class="word-german">${w.german}</div>
                <div class="word-spanish">${w.spanish}</div>
            </div>
            ${statusHTML}
        `;

        if (!isStudying) {
            item.addEventListener('click', () => toggleWord(w.id));
        }

        wordListDiv.appendChild(item);
    });

    updateSelectionFooter();
    updateSelectionHeader();
}

function toggleWord(id) {
    if (selectedIds.has(id)) selectedIds.delete(id);
    else selectedIds.add(id);
    renderWordList();
}

function updateSelectionFooter() {
    document.getElementById('selection-badge').textContent = selectedIds.size;
}

function updateSelectionHeader() {
    const available = DATABASE.filter(w => !userData[w.id]?.status).length;
    document.getElementById('available-count').textContent = available;
    document.getElementById('selected-count').textContent  = selectedIds.size;
}

// Buscar
document.getElementById('search-input').addEventListener('input', renderWordList);

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderWordList();
    });
});

// Comenzar con selección
document.getElementById('start-with-selection-btn').addEventListener('click', () => {
    const now = Date.now();

    // Repasos del día
    const due = DATABASE.filter(w => {
        const d = userData[w.id];
        return d?.status === 'studying' && now >= d.nextReview;
    }).map(w => ({ ...w, ...userData[w.id] }));

    // Nuevas seleccionadas
    const newCards = [...selectedIds]
        .map(id => DATABASE.find(w => w.id === id))
        .filter(Boolean)
        .map(w => ({ ...w, status: 'new', interval: 0, ease: 2.5, nextReview: now }));

    const all = [...due, ...newCards];

    if (all.length === 0) {
        alert("Selecciona al menos un verbo para estudiar.");
        return;
    }

    // Barajar
    all.sort(() => Math.random() - 0.5);

    const label = due.length > 0 && newCards.length > 0 ? 'Mixta'
                : due.length > 0 ? 'Repasos' : 'Nuevos';

    startSession(all, label);
});

// ── 7. SESIÓN DE ESTUDIO ─────────────────────
function startSession(cards, label) {
    currentSessionCards = cards;
    currentCardIndex    = 0;
    sessionCorrect      = 0;
    sessionIncorrect    = 0;

    document.getElementById('session-badge').textContent = label;
    document.getElementById('cards-total').textContent   = cards.length;

    showScreen(studyScreen);
    showCard();
}

// ── 8. FLASHCARD LOGIC ───────────────────────
flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
    const flipped = flashcard.classList.contains('is-flipped');

    if (flipped) {
        evalButtons.classList.remove('hidden');
        cardHint.style.opacity = '0';
        updateNextIntervalLabel();
    } else {
        evalButtons.classList.add('hidden');
        cardHint.style.opacity = '1';
    }
});

function showCard() {
    if (currentCardIndex >= currentSessionCards.length) {
        showDoneScreen();
        return;
    }

    const card  = currentSessionCards[currentCardIndex];
    const done  = currentCardIndex;
    const total = currentSessionCards.length;

    // --- CORRECCIÓN DEL BUG VISUAL ---
    // 1. Quitamos la animación temporalmente y reseteamos el giro
    flashcard.classList.add('no-transition');
    flashcard.classList.remove('is-flipped');
    
    // 2. Forzamos un reflow (le dice al navegador que aplique el CSS AHORA)
    void flashcard.offsetWidth;

    // 3. Actualizamos los textos de forma oculta
    document.getElementById('cards-done').textContent = done;
    document.getElementById('cards-total').textContent = total;
    document.getElementById('progress-fill').style.width = `${(done / total) * 100}%`;

    document.getElementById('card-german').textContent     = card.german;
    document.getElementById('card-spanish').textContent    = card.spanish;
    document.getElementById('card-perfekt').textContent    = card.perfekt;
    document.getElementById('card-prateritum').textContent = card.prateritum;

    evalButtons.classList.add('hidden');
    cardHint.style.opacity = '1';

    // 4. Devolvemos la animación para que funcione normal al hacer click
    flashcard.classList.remove('no-transition');
}

function updateNextIntervalLabel() {
    const card      = currentSessionCards[currentCardIndex];
    const interval  = card.interval || 0;
    const ease      = card.ease || 2.5;
    let nextInterval;
    if (interval === 0)     nextInterval = 1;
    else if (interval === 1) nextInterval = 6;
    else                     nextInterval = Math.round(interval * ease);
    document.getElementById('next-interval-label').textContent = `en ${nextInterval} día${nextInterval !== 1 ? 's' : ''}`;
}

// ── 9. ALGORITMO SM-2 ───────────────────────
function evaluateCard(isCorrect) {
    const card = currentSessionCards[currentCardIndex];

    if (isCorrect) {
        sessionCorrect++;
        if (!card.interval || card.interval === 0) {
            card.interval = 1;
        } else if (card.interval === 1) {
            card.interval = 6;
        } else {
            card.interval = Math.round(card.interval * card.ease);
        }
        // Aumentar facilidad levemente en correcto
        card.ease = Math.min(3.0, (card.ease || 2.5) + 0.05);
    } else {
        sessionIncorrect++;
        card.interval = 0;
        card.ease     = Math.max(1.3, (card.ease || 2.5) - 0.2);
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + (card.interval || 0));
    card.nextReview = nextDate.getTime();

    // Guardar progreso
    userData[card.id] = {
        status:     'studying',
        interval:   card.interval,
        ease:       card.ease,
        nextReview: card.nextReview,
    };
    saveData();

    // Si fue incorrecta, agregar al final para repetir hoy
    if (!isCorrect) {
        currentSessionCards.push({ ...card });
    }

    currentCardIndex++;
    showCard();
}

// ── 10. PANTALLA FINAL ──────────────────────
function showDoneScreen() {
    document.getElementById('done-correct').textContent        = sessionCorrect;
    document.getElementById('done-incorrect-count').textContent = sessionIncorrect;
    showScreen(doneScreen);
}

// ── 11. ARRANQUE ────────────────────────────
loadData();
updateHomeStats();
showScreen(homeScreen);


// ── 12. TEMA Y REINICIO DE DATOS ────────────────

// Lógica del Tema Claro / Oscuro
const themeToggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
    if(theme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    localStorage.setItem('deutschcards_theme', theme);
}

// Cargar el tema guardado al iniciar
const savedTheme = localStorage.getItem('deutschcards_theme') || 'dark';
applyTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
});

// Lógica de reinicio de progreso
document.getElementById('reset-progress-btn').addEventListener('click', () => {
    const confirmReset = confirm('¿Estás seguro de que deseas reiniciar todo tu progreso? Perderás todos tus repasos y empezarás desde cero.');
    
    if (confirmReset) {
        userData = {};
        saveData();
        selectedIds.clear();
        updateHomeStats();
        alert('Progreso reiniciado correctamente. ¡Mucho éxito en tu nuevo intento!');
    }
});
