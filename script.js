// ============================================
//  DEUTSCHCARDS — Lógica completa
// ============================================

// ── 1. BASE DE DATOS (60 verbos) ────────────
const DATABASE = [
    { id: 1, german: "sein", spanish: "ser, estar", perfekt: "ist gewesen", prateritum: "war" },
    { id: 2, german: "haben", spanish: "tener", perfekt: "hat gehabt", prateritum: "hatte" },
    { id: 3, german: "werden", spanish: "llegar a ser, convertirse", perfekt: "ist geworden", prateritum: "wurde" },
    { id: 4, german: "können", spanish: "poder", perfekt: "hat gekonnt", prateritum: "konnte" },
    { id: 5, german: "müssen", spanish: "tener que", perfekt: "hat gemusst", prateritum: "musste" },
    { id: 6, german: "wollen", spanish: "querer", perfekt: "hat gewollt", prateritum: "wollte" },
    { id: 7, german: "dürfen", spanish: "tener permiso", perfekt: "hat gedurft", prateritum: "durfte" },
    { id: 8, german: "sollen", spanish: "deber", perfekt: "hat gesollt", prateritum: "sollte" },
    { id: 9, german: "mögen", spanish: "gustar", perfekt: "hat gemocht", prateritum: "mochte" },
    { id: 10, german: "wissen", spanish: "saber", perfekt: "hat gewusst", prateritum: "wusste" },
    { id: 11, german: "sagen", spanish: "decir", perfekt: "hat gesagt", prateritum: "sagte" },
    { id: 12, german: "sprechen", spanish: "hablar", perfekt: "hat gesprochen", prateritum: "sprach" },
    { id: 13, german: "reden", spanish: "conversar", perfekt: "hat geredet", prateritum: "redete" },
    { id: 14, german: "erzählen", spanish: "contar, narrar", perfekt: "hat erzählt", prateritum: "erzählte" },
    { id: 15, german: "fragen", spanish: "preguntar", perfekt: "hat gefragt", prateritum: "fragte" },
    { id: 16, german: "antworten", spanish: "responder", perfekt: "hat geantwortet", prateritum: "antwortete" },
    { id: 17, german: "rufen", spanish: "llamar", perfekt: "hat gerufen", prateritum: "rief" },
    { id: 18, german: "schreien", spanish: "gritar", perfekt: "hat geschrien", prateritum: "schrie" },
    { id: 19, german: "flüstern", spanish: "susurrar", perfekt: "hat geflüstert", prateritum: "flüsterte" },
    { id: 20, german: "hören", spanish: "escuchar", perfekt: "hat gehört", prateritum: "hörte" },
    { id: 21, german: "sehen", spanish: "ver", perfekt: "hat gesehen", prateritum: "sah" },
    { id: 22, german: "anschauen", spanish: "mirar", perfekt: "hat angeschaut", prateritum: "schaute an" },
    { id: 23, german: "beobachten", spanish: "observar", perfekt: "hat beobachtet", prateritum: "beobachtete" },
    { id: 24, german: "zeigen", spanish: "mostrar", perfekt: "hat gezeigt", prateritum: "zeigte" },
    { id: 25, german: "finden", spanish: "encontrar", perfekt: "hat gefunden", prateritum: "fand" },
    { id: 26, german: "suchen", spanish: "buscar", perfekt: "hat gesucht", prateritum: "suchte" },
    { id: 27, german: "kennen", spanish: "conocer", perfekt: "hat gekannt", prateritum: "kannte" },
    { id: 28, german: "erkennen", spanish: "reconocer", perfekt: "hat erkannt", prateritum: "erkannte" },
    { id: 29, german: "verstehen", spanish: "entender", perfekt: "hat verstanden", prateritum: "verstand" },
    { id: 30, german: "lernen", spanish: "aprender", perfekt: "hat gelernt", prateritum: "lernte" },
    { id: 31, german: "studieren", spanish: "estudiar", perfekt: "hat studiert", prateritum: "studierte" },
    { id: 32, german: "lesen", spanish: "leer", perfekt: "hat gelesen", prateritum: "las" },
    { id: 33, german: "schreiben", spanish: "escribir", perfekt: "hat geschrieben", prateritum: "schrieb" },
    { id: 34, german: "buchstabieren", spanish: "deletrear", perfekt: "hat buchstabiert", prateritum: "buchstabierte" },
    { id: 35, german: "übersetzen", spanish: "traducir", perfekt: "hat übersetzt", prateritum: "übersetzte" },
    { id: 36, german: "erklären", spanish: "explicar", perfekt: "hat erklärt", prateritum: "erklärte" },
    { id: 37, german: "denken", spanish: "pensar", perfekt: "hat gedacht", prateritum: "dachte" },
    { id: 38, german: "glauben", spanish: "creer", perfekt: "hat geglaubt", prateritum: "glaubte" },
    { id: 39, german: "meinen", spanish: "opinar", perfekt: "hat gemeint", prateritum: "meinte" },
    { id: 40, german: "vergessen", spanish: "olvidar", perfekt: "hat vergessen", prateritum: "vergaß" },
    { id: 41, german: "erinnern", spanish: "recordar", perfekt: "hat erinnert", prateritum: "erinnerte" },
    { id: 42, german: "träumen", spanish: "soñar", perfekt: "hat geträumt", prateritum: "träumte" },
    { id: 43, german: "planen", spanish: "planear", perfekt: "hat geplant", prateritum: "plante" },
    { id: 44, german: "entscheiden", spanish: "decidir", perfekt: "hat entschieden", prateritum: "entschied" },
    { id: 45, german: "versuchen", spanish: "intentar", perfekt: "hat versucht", prateritum: "versuchte" },
    { id: 46, german: "beginnen", spanish: "comenzar", perfekt: "hat begonnen", prateritum: "begann" },
    { id: 47, german: "anfangen", spanish: "empezar", perfekt: "hat angefangen", prateritum: "fing an" },
    { id: 48, german: "enden", spanish: "terminar", perfekt: "hat geendet", prateritum: "endete" },
    { id: 49, german: "aufhören", spanish: "dejar de", perfekt: "hat aufgehört", prateritum: "hörte auf" },
    { id: 50, german: "machen", spanish: "hacer", perfekt: "hat gemacht", prateritum: "machte" },
    { id: 51, german: "tun", spanish: "hacer (acción)", perfekt: "hat getan", prateritum: "tat" },
    { id: 52, german: "arbeiten", spanish: "trabajar", perfekt: "hat gearbeitet", prateritum: "arbeitete" },
    { id: 53, german: "helfen", spanish: "ayudar", perfekt: "hat geholfen", prateritum: "half" },
    { id: 54, german: "benutzen", spanish: "usar", perfekt: "hat benutzt", prateritum: "benutzte" },
    { id: 55, german: "brauchen", spanish: "necesitar", perfekt: "hat gebraucht", prateritum: "brauchte" },
    { id: 56, german: "versprechen", spanish: "prometer", perfekt: "hat versprochen", prateritum: "versprach" },
    { id: 57, german: "gewinnen", spanish: "ganar", perfekt: "hat gewonnen", prateritum: "gewann" },
    { id: 58, german: "verlieren", spanish: "perder", perfekt: "hat verloren", prateritum: "verlor" },
    { id: 59, german: "bezahlen", spanish: "pagar", perfekt: "hat bezahlt", prateritum: "bezahlte" },
    { id: 60, german: "kosten", spanish: "costar", perfekt: "hat gekostet", prateritum: "kostete" },
    { id: 61, german: "kaufen", spanish: "comprar", perfekt: "hat gekauft", prateritum: "kaufte" },
    { id: 62, german: "verkaufen", spanish: "vender", perfekt: "hat verkauft", prateritum: "verkaufte" },
    { id: 63, german: "bestellen", spanish: "pedir, ordenar", perfekt: "hat bestellt", prateritum: "bestellte" },
    { id: 64, german: "bringen", spanish: "traer", perfekt: "hat gebracht", prateritum: "brachte" },
    { id: 65, german: "holen", spanish: "ir a buscar", perfekt: "hat geholt", prateritum: "holte" },
    { id: 66, german: "nehmen", spanish: "tomar", perfekt: "hat genommen", prateritum: "nahm" },
    { id: 67, german: "geben", spanish: "dar", perfekt: "hat gegeben", prateritum: "gab" },
    { id: 68, german: "bekommen", spanish: "recibir", perfekt: "hat bekommen", prateritum: "bekam" },
    { id: 69, german: "erhalten", spanish: "recibir, conservar", perfekt: "hat erhalten", prateritum: "erhielt" },
    { id: 70, german: "lassen", spanish: "dejar", perfekt: "hat gelassen", prateritum: "ließ" },
    { id: 71, german: "halten", spanish: "sostener, parar", perfekt: "hat gehalten", prateritum: "hielt" },
    { id: 72, german: "tragen", spanish: "llevar puesto, cargar", perfekt: "hat getragen", prateritum: "trug" },
    { id: 73, german: "ziehen", spanish: "tirar, mudarse", perfekt: "hat gezogen", prateritum: "zog" },
    { id: 74, german: "drücken", spanish: "presionar", perfekt: "hat gedrückt", prateritum: "drückte" },
    { id: 75, german: "werfen", spanish: "lanzar", perfekt: "hat geworfen", prateritum: "warf" },
    { id: 76, german: "fangen", spanish: "atrapar", perfekt: "hat gefangen", prateritum: "fing" },
    { id: 77, german: "schneiden", spanish: "cortar", perfekt: "hat geschnitten", prateritum: "schnitt" },
    { id: 78, german: "öffnen", spanish: "abrir", perfekt: "hat geöffnet", prateritum: "öffnete" },
    { id: 79, german: "schließen", spanish: "cerrar", perfekt: "hat geschlossen", prateritum: "schloss" },
    { id: 80, german: "bauen", spanish: "construir", perfekt: "hat gebaut", prateritum: "baute" },
    { id: 81, german: "reparieren", spanish: "reparar", perfekt: "hat repariert", prateritum: "reparierte" },
    { id: 82, german: "putzen", spanish: "limpiar", perfekt: "hat geputzt", prateritum: "putzte" },
    { id: 83, german: "waschen", spanish: "lavar", perfekt: "hat gewaschen", prateritum: "wusch" },
    { id: 84, german: "kochen", spanish: "cocinar", perfekt: "hat gekocht", prateritum: "kochte" },
    { id: 85, german: "backen", spanish: "hornear", perfekt: "hat gebacken", prateritum: "buk" },
    { id: 86, german: "essen", spanish: "comer", perfekt: "hat gegessen", prateritum: "aß" },
    { id: 87, german: "trinken", spanish: "beber", perfekt: "hat getrunken", prateritum: "trank" },
    { id: 88, german: "schmecken", spanish: "tener sabor", perfekt: "hat geschmeckt", prateritum: "schmeckte" },
    { id: 89, german: "riechen", spanish: "oler", perfekt: "hat gerochen", prateritum: "roch" },
    { id: 90, german: "schlafen", spanish: "dormir", perfekt: "hat geschlafen", prateritum: "schlief" },
    { id: 91, german: "aufwachen", spanish: "despertarse", perfekt: "ist aufgewacht", prateritum: "wachte auf" },
    { id: 92, german: "einschlafen", spanish: "quedarse dormido", perfekt: "ist eingeschlafen", prateritum: "schlief ein" },
    { id: 93, german: "leben", spanish: "vivir", perfekt: "hat gelebt", prateritum: "lebte" },
    { id: 94, german: "sterben", spanish: "morir", perfekt: "ist gestorben", prateritum: "starb" },
    { id: 95, german: "geboren werden", spanish: "nacer", perfekt: "ist geboren worden", prateritum: "wurde geboren" },
    { id: 96, german: "wachsen", spanish: "crecer", perfekt: "ist gewachsen", prateritum: "wuchs" },
    { id: 97, german: "bleiben", spanish: "quedarse", perfekt: "ist geblieben", prateritum: "blieb" },
    { id: 98, german: "wohnen", spanish: "vivir, residir", perfekt: "hat gewohnt", prateritum: "wohnte" },
    { id: 99, german: "reisen", spanish: "viajar", perfekt: "ist gereist", prateritum: "reiste" },
    { id: 100, german: "fahren", spanish: "conducir, ir en vehículo", perfekt: "ist gefahren", prateritum: "fuhr" },
    { id: 101, german: "fliegen", spanish: "volar", perfekt: "ist geflogen", prateritum: "flog" },
    { id: 102, german: "gehen", spanish: "ir", perfekt: "ist gegangen", prateritum: "ging" },
    { id: 103, german: "kommen", spanish: "venir", perfekt: "ist gekommen", prateritum: "kam" },
    { id: 104, german: "ankommen", spanish: "llegar", perfekt: "ist angekommen", prateritum: "kam an" },
    { id: 105, german: "abfahren", spanish: "partir", perfekt: "ist abgefahren", prateritum: "fuhr ab" },
    { id: 106, german: "rennen", spanish: "correr", perfekt: "ist gerannt", prateritum: "rannte" },
    { id: 107, german: "laufen", spanish: "correr, caminar", perfekt: "ist gelaufen", prateritum: "lief" },
    { id: 108, german: "spazieren", spanish: "pasear", perfekt: "ist spaziert", prateritum: "spazierte" },
    { id: 109, german: "schwimmen", spanish: "nadar", perfekt: "ist geschwommen", prateritum: "schwamm" },
    { id: 110, german: "tanzen", spanish: "bailar", perfekt: "hat getanzt", prateritum: "tanzte" },
    { id: 111, german: "springen", spanish: "saltar", perfekt: "ist gesprungen", prateritum: "sprang" },
    { id: 112, german: "klettern", spanish: "trepar", perfekt: "ist geklettert", prateritum: "kletterte" },
    { id: 113, german: "sitzen", spanish: "estar sentado", perfekt: "hat gesessen", prateritum: "saß" },
    { id: 114, german: "stehen", spanish: "estar de pie", perfekt: "hat gestanden", prateritum: "stand" },
    { id: 115, german: "liegen", spanish: "estar acostado/situado", perfekt: "hat gelegen", prateritum: "lag" },
    { id: 116, german: "setzen", spanish: "poner, sentar", perfekt: "hat gesetzt", prateritum: "setzte" },
    { id: 117, german: "stellen", spanish: "colocar (vertical)", perfekt: "hat gestellt", prateritum: "stellte" },
    { id: 118, german: "legen", spanish: "colocar (horizontal)", perfekt: "hat gelegt", prateritum: "legte" },
    { id: 119, german: "treffen", spanish: "encontrar", perfekt: "hat getroffen", prateritum: "traf" },
    { id: 120, german: "besuchen", spanish: "visitar", perfekt: "hat besucht", prateritum: "besuchte" },
    { id: 121, german: "einladen", spanish: "invitar", perfekt: "hat eingeladen", prateritum: "lud ein" },
    { id: 122, german: "heiraten", spanish: "casarse", perfekt: "hat geheiratet", prateritum: "heiratete" },
    { id: 123, german: "lieben", spanish: "amar", perfekt: "hat geliebt", prateritum: "liebte" },
    { id: 124, german: "hassen", spanish: "odiar", perfekt: "hat gehasst", prateritum: "hasste" },
    { id: 125, german: "lachen", spanish: "reír", perfekt: "hat gelacht", prateritum: "lachte" },
    { id: 126, german: "weinen", spanish: "llorar", perfekt: "hat geweint", prateritum: "weinte" },
    { id: 127, german: "lächeln", spanish: "sonreír", perfekt: "hat gelächelt", prateritum: "lächelte" },
    { id: 128, german: "fühlen", spanish: "sentir", perfekt: "hat gefühlt", prateritum: "fühlte" },
    { id: 129, german: "hoffen", spanish: "esperar", perfekt: "hat gehofft", prateritum: "hoffte" },
    { id: 130, german: "fürchten", spanish: "temer", perfekt: "hat gefürchtet", prateritum: "fürchtete" },
    { id: 131, german: "ärgern", spanish: "molestar", perfekt: "hat geärgert", prateritum: "ärgerte" },
    { id: 132, german: "freuen", spanish: "alegrar", perfekt: "hat gefreut", prateritum: "freute" },
    { id: 133, german: "gefallen", spanish: "gustar", perfekt: "hat gefallen", prateritum: "gefiel" },
    { id: 134, german: "gehören", spanish: "pertenecer", perfekt: "hat gehört", prateritum: "gehörte" },
    { id: 135, german: "passen", spanish: "quedar bien", perfekt: "hat gepasst", prateritum: "passte" },
    { id: 136, german: "wählen", spanish: "elegir", perfekt: "hat gewählt", prateritum: "wählte" },
    { id: 137, german: "ändern", spanish: "cambiar", perfekt: "hat geändert", prateritum: "änderte" },
    { id: 138, german: "verbessern", spanish: "mejorar", perfekt: "hat verbessert", prateritum: "verbesserte" },
    { id: 139, german: "entwickeln", spanish: "desarrollar", perfekt: "hat entwickelt", prateritum: "entwickelte" },
    { id: 140, german: "schaffen", spanish: "lograr, crear", perfekt: "hat geschafft", prateritum: "schaffte" },
    { id: 141, german: "erreichen", spanish: "alcanzar", perfekt: "hat erreicht", prateritum: "erreichte" },
    { id: 142, german: "existieren", spanish: "existir", perfekt: "hat existiert", prateritum: "existierte" },
    { id: 143, german: "entstehen", spanish: "surgir", perfekt: "ist entstanden", prateritum: "entstand" },
    { id: 144, german: "passieren", spanish: "suceder", perfekt: "ist passiert", prateritum: "passierte" },
    { id: 145, german: "gelten", spanish: "ser válido", perfekt: "hat gegolten", prateritum: "galt" },
    { id: 146, german: "funktionieren", spanish: "funcionar", perfekt: "hat funktioniert", prateritum: "funktionierte" },
    { id: 147, german: "verwenden", spanish: "utilizar", perfekt: "hat verwendet", prateritum: "verwendete" },
    { id: 148, german: "kontrollieren", spanish: "controlar", perfekt: "hat kontrolliert", prateritum: "kontrollierte" },
    { id: 149, german: "steuern", spanish: "dirigir, controlar", perfekt: "hat gesteuert", prateritum: "steuerte" },
    { id: 150, german: "analysieren", spanish: "analizar", perfekt: "hat analysiert", prateritum: "analysierte" },
    { id: 151, german: "testen", spanish: "probar", perfekt: "hat getestet", prateritum: "testete" },
    { id: 152, german: "simulieren", spanish: "simular", perfekt: "hat simuliert", prateritum: "simulierte" },
    { id: 153, german: "programmieren", spanish: "programar", perfekt: "hat programmiert", prateritum: "programmierte" },
    { id: 154, german: "optimieren", spanish: "optimizar", perfekt: "hat optimiert", prateritum: "optimierte" },
    { id: 155, german: "entwerfen", spanish: "diseñar", perfekt: "hat entworfen", prateritum: "entwarf" },
    { id: 156, german: "installieren", spanish: "instalar", perfekt: "hat installiert", prateritum: "installierte" },
    { id: 157, german: "verbinden", spanish: "conectar", perfekt: "hat verbunden", prateritum: "verband" },
    { id: 158, german: "laden", spanish: "cargar", perfekt: "hat geladen", prateritum: "lud" },
    { id: 159, german: "speichern", spanish: "guardar", perfekt: "hat gespeichert", prateritum: "speicherte" },
    { id: 160, german: "löschen", spanish: "eliminar", perfekt: "hat gelöscht", prateritum: "löschte" },
    { id: 161, german: "starten", spanish: "iniciar", perfekt: "hat gestartet", prateritum: "startete" },
    { id: 162, german: "stoppen", spanish: "detener", perfekt: "hat gestoppt", prateritum: "stoppte" },
    { id: 163, german: "warten", spanish: "esperar", perfekt: "hat gewartet", prateritum: "wartete" },
    { id: 164, german: "rechnen", spanish: "calcular", perfekt: "hat gerechnet", prateritum: "rechnete" },
    { id: 165, german: "messen", spanish: "medir", perfekt: "hat gemessen", prateritum: "maß" },
    { id: 166, german: "zählen", spanish: "contar", perfekt: "hat gezählt", prateritum: "zählte" },
    { id: 167, german: "vergleichen", spanish: "comparar", perfekt: "hat verglichen", prateritum: "verglich" },
    { id: 168, german: "untersuchen", spanish: "examinar", perfekt: "hat untersucht", prateritum: "untersuchte" },
    { id: 169, german: "zeichnen", spanish: "dibujar", perfekt: "hat gezeichnet", prateritum: "zeichnete" },
    { id: 170, german: "malen", spanish: "pintar", perfekt: "hat gemalt", prateritum: "malte" },
    { id: 171, german: "singen", spanish: "cantar", perfekt: "hat gesungen", prateritum: "sang" },
    { id: 172, german: "spielen", spanish: "jugar", perfekt: "hat gespielt", prateritum: "spielte" },
    { id: 173, german: "üben", spanish: "practicar", perfekt: "hat geübt", prateritum: "übte" },
    { id: 174, german: "trainieren", spanish: "entrenar", perfekt: "hat trainiert", prateritum: "trainierte" },
    { id: 175, german: "telefonieren", spanish: "telefonear", perfekt: "hat telefoniert", prateritum: "telefonierte" },
    { id: 176, german: "fotografieren", spanish: "fotografiar", perfekt: "hat fotografiert", prateritum: "fotografierte" },
    { id: 177, german: "feiern", spanish: "celebrar", perfekt: "hat gefeiert", prateritum: "feierte" },
    { id: 178, german: "wünschen", spanish: "desear", perfekt: "hat gewünscht", prateritum: "wünschte" },
    { id: 179, german: "gratulieren", spanish: "felicitar", perfekt: "hat gratuliert", prateritum: "gratulierte" },
    { id: 180, german: "danken", spanish: "agradecer", perfekt: "hat gedankt", prateritum: "dankte" },
    { id: 181, german: "entschuldigen", spanish: "disculpar", perfekt: "hat entschuldigt", prateritum: "entschuldigte" },
    { id: 182, german: "erlauben", spanish: "permitir", perfekt: "hat erlaubt", prateritum: "erlaubte" },
    { id: 183, german: "verbieten", spanish: "prohibir", perfekt: "hat verboten", prateritum: "verbot" },
    { id: 184, german: "empfehlen", spanish: "recomendar", perfekt: "hat empfohlen", prateritum: "empfahl" },
    { id: 185, german: "erwarten", spanish: "esperar", perfekt: "hat erwartet", prateritum: "erwartete" },
    { id: 186, german: "akzeptieren", spanish: "aceptar", perfekt: "hat akzeptiert", prateritum: "akzeptierte" },
    { id: 187, german: "ablehnen", spanish: "rechazar", perfekt: "hat abgelehnt", prateritum: "lehnte ab" },
    { id: 188, german: "abholen", spanish: "ir a buscar", perfekt: "hat abgeholt", prateritum: "holte ab" },
    { id: 189, german: "abschließen", spanish: "terminar, cerrar", perfekt: "hat abgeschlossen", prateritum: "schloss ab" },
    { id: 190, german: "abschneiden", spanish: "cortar", perfekt: "hat abgeschnitten", prateritum: "schnitt ab" },
    { id: 191, german: "abnehmen", spanish: "disminuir, bajar de peso", perfekt: "hat abgenommen", prateritum: "nahm ab" },
    { id: 192, german: "abreisen", spanish: "partir", perfekt: "ist abgereist", prateritum: "reiste ab" },
    { id: 193, german: "absagen", spanish: "cancelar", perfekt: "hat abgesagt", prateritum: "sagte ab" },
    { id: 194, german: "anstellen", spanish: "encender, contratar", perfekt: "hat angestellt", prateritum: "stellte an" },
    { id: 195, german: "anrufen", spanish: "llamar por teléfono", perfekt: "hat angerufen", prateritum: "rief an" },
    { id: 196, german: "anmachen", spanish: "encender", perfekt: "hat angemacht", prateritum: "machte an" },
    { id: 197, german: "anmelden", spanish: "registrar", perfekt: "hat angemeldet", prateritum: "meldete an" },
    { id: 198, german: "anprobieren", spanish: "probarse ropa", perfekt: "hat anprobiert", prateritum: "probierte an" },
    { id: 199, german: "anziehen", spanish: "vestirse", perfekt: "hat angezogen", prateritum: "zog an" },
    { id: 200, german: "atmen", spanish: "respirar", perfekt: "hat geatmet", prateritum: "atmete" },
    { id: 201, german: "aufbauen", spanish: "construir", perfekt: "hat aufgebaut", prateritum: "baute auf" },
    { id: 202, german: "aufmachen", spanish: "abrir", perfekt: "hat aufgemacht", prateritum: "machte auf" },
    { id: 203, german: "aufräumen", spanish: "ordenar", perfekt: "hat aufgeräumt", prateritum: "räumte auf" },
    { id: 204, german: "aufstehen", spanish: "levantarse", perfekt: "ist aufgestanden", prateritum: "stand auf" },
    { id: 205, german: "ausfüllen", spanish: "rellenar", perfekt: "hat ausgefüllt", prateritum: "füllte aus" },
    { id: 206, german: "ausgeben", spanish: "gastar", perfekt: "hat ausgegeben", prateritum: "gab aus" },
    { id: 207, german: "ausgehen", spanish: "salir", perfekt: "ist ausgegangen", prateritum: "ging aus" },
    { id: 208, german: "aussehen", spanish: "parecer", perfekt: "hat ausgesehen", prateritum: "sah aus" },
    { id: 209, german: "auswählen", spanish: "seleccionar", perfekt: "hat ausgewählt", prateritum: "wählte aus" },
    { id: 210, german: "baden", spanish: "bañarse", perfekt: "hat gebadet", prateritum: "badete" },
    { id: 211, german: "beantworten", spanish: "responder", perfekt: "hat beantwortet", prateritum: "beantwortete" },
    { id: 212, german: "bedeuten", spanish: "significar", perfekt: "hat bedeutet", prateritum: "bedeutete" },
    { id: 213, german: "beeilen", spanish: "apresurar", perfekt: "hat beeilt", prateritum: "beeilte" },
    { id: 214, german: "beenden", spanish: "finalizar", perfekt: "hat beendet", prateritum: "beendete" },
    { id: 215, german: "behalten", spanish: "conservar", perfekt: "hat behalten", prateritum: "behielt" },
    { id: 216, german: "berichten", spanish: "informar", perfekt: "hat berichtet", prateritum: "berichtete" },
    { id: 217, german: "berühren", spanish: "tocar", perfekt: "hat berührt", prateritum: "berührte" },
    { id: 218, german: "beschreiben", spanish: "describir", perfekt: "hat beschrieben", prateritum: "beschrieb" },
    { id: 219, german: "beschweren", spanish: "quejarse", perfekt: "hat beschwert", prateritum: "beschwerte" },
    { id: 220, german: "besichtigen", spanish: "visitar", perfekt: "hat besichtigt", prateritum: "besichtigte" },
    { id: 221, german: "bestätigen", spanish: "confirmar", perfekt: "hat bestätigt", prateritum: "bestätigte" },
    { id: 222, german: "biegen", spanish: "doblar", perfekt: "hat gebogen", prateritum: "bog" },
    { id: 223, german: "bitten", spanish: "pedir", perfekt: "hat gebeten", prateritum: "bat" },
    { id: 224, german: "blasen", spanish: "soplar", perfekt: "hat geblasen", prateritum: "blies" },
    { id: 225, german: "braten", spanish: "freír", perfekt: "hat gebraten", prateritum: "briet" },
    { id: 226, german: "brechen", spanish: "romper", perfekt: "hat gebrochen", prateritum: "brach" },
    { id: 227, german: "brennen", spanish: "arder", perfekt: "hat gebrannt", prateritum: "brannte" },
    { id: 228, german: "buchen", spanish: "reservar", perfekt: "hat gebucht", prateritum: "buchte" },
    { id: 229, german: "dauern", spanish: "durar", perfekt: "hat gedauert", prateritum: "dauerte" },
    { id: 230, german: "decken", spanish: "cubrir", perfekt: "hat gedeckt", prateritum: "deckte" },
    { id: 231, german: "deuten", spanish: "interpretar", perfekt: "hat gedeutet", prateritum: "deutete" },
    { id: 232, german: "dienen", spanish: "servir", perfekt: "hat gedient", prateritum: "diente" },
    { id: 233, german: "diskutieren", spanish: "discutir", perfekt: "hat diskutiert", prateritum: "diskutierte" },
    { id: 234, german: "duschen", spanish: "ducharse", perfekt: "hat geduscht", prateritum: "duschte" },
    { id: 235, german: "einpacken", spanish: "empacar", perfekt: "hat eingepackt", prateritum: "packte ein" },
    { id: 236, german: "einschalten", spanish: "encender", perfekt: "hat eingeschaltet", prateritum: "schaltete ein" },
    { id: 237, german: "einsteigen", spanish: "subir a un vehículo", perfekt: "ist eingestiegen", prateritum: "stieg ein" },
    { id: 238, german: "erfahren", spanish: "enterarse", perfekt: "hat erfahren", prateritum: "erfuhr" },
    { id: 239, german: "erfinden", spanish: "inventar", perfekt: "hat erfunden", prateritum: "erfand" },
    { id: 240, german: "erkälten", spanish: "resfriarse", perfekt: "hat erkältet", prateritum: "erkältete" },
    { id: 241, german: "erleben", spanish: "experimentar", perfekt: "hat erlebt", prateritum: "erlebte" },
    { id: 242, german: "fallen", spanish: "caer", perfekt: "ist gefallen", prateritum: "fiel" },
    { id: 243, german: "fehlen", spanish: "faltar", perfekt: "hat gefehlt", prateritum: "fehlte" },
    { id: 244, german: "fernsehen", spanish: "ver televisión", perfekt: "hat ferngesehen", prateritum: "sah fern" },
    { id: 245, german: "folgen", spanish: "seguir", perfekt: "ist gefolgt", prateritum: "folgte" },
    { id: 246, german: "fordern", spanish: "exigir", perfekt: "hat gefordert", prateritum: "forderte" },
    { id: 247, german: "füllen", spanish: "llenar", perfekt: "hat gefüllt", prateritum: "füllte" },
    { id: 248, german: "führen", spanish: "dirigir", perfekt: "hat geführt", prateritum: "führte" },
    { id: 249, german: "gießen", spanish: "regar", perfekt: "hat gegossen", prateritum: "goss" },
    { id: 250, german: "grillen", spanish: "asar", perfekt: "hat gegrillt", prateritum: "grillte" },
    { id: 251, german: "gründen", spanish: "fundar", perfekt: "hat gegründet", prateritum: "gründete" },
    { id: 252, german: "handeln", spanish: "actuar", perfekt: "hat gehandelt", prateritum: "handelte" },
    { id: 253, german: "heißen", spanish: "llamarse", perfekt: "hat geheißen", prateritum: "hieß" },
    { id: 254, german: "herstellen", spanish: "fabricar", perfekt: "hat hergestellt", prateritum: "stellte her" },
    { id: 255, german: "husten", spanish: "toser", perfekt: "hat gehustet", prateritum: "hustete" },
    { id: 256, german: "interessieren", spanish: "interesar", perfekt: "hat interessiert", prateritum: "interessierte" },
    { id: 257, german: "kennenlernen", spanish: "conocer", perfekt: "hat kennengelernt", prateritum: "lernte kennen" },
    { id: 258, german: "klären", spanish: "aclarar", perfekt: "hat geklärt", prateritum: "klärte" },
    { id: 259, german: "kleben", spanish: "pegar", perfekt: "hat geklebt", prateritum: "klebte" },
    { id: 260, german: "klingeln", spanish: "sonar", perfekt: "hat geklingelt", prateritum: "klingelte" },
    { id: 261, german: "kündigen", spanish: "renunciar", perfekt: "hat gekündigt", prateritum: "kündigte" },
    { id: 262, german: "landen", spanish: "aterrizar", perfekt: "ist gelandet", prateritum: "landete" },
    { id: 263, german: "leihen", spanish: "prestar", perfekt: "hat geliehen", prateritum: "lieh" },
    { id: 264, german: "lügen", spanish: "mentir", perfekt: "hat gelogen", prateritum: "log" },
    { id: 265, german: "merken", spanish: "notar", perfekt: "hat gemerkt", prateritum: "merkte" },
    { id: 266, german: "mieten", spanish: "arrendar", perfekt: "hat gemietet", prateritum: "mietete" },
    { id: 267, german: "missverstehen", spanish: "malentender", perfekt: "hat missverstanden", prateritum: "missverstand" },
    { id: 268, german: "mitbringen", spanish: "traer consigo", perfekt: "hat mitgebracht", prateritum: "brachte mit" },
    { id: 269, german: "mitkommen", spanish: "venir con", perfekt: "ist mitgekommen", prateritum: "kam mit" },
    { id: 270, german: "montieren", spanish: "montar", perfekt: "hat montiert", prateritum: "montierte" },
    { id: 271, german: "nennen", spanish: "nombrar", perfekt: "hat genannt", prateritum: "nannte" },
    { id: 272, german: "nutzen", spanish: "aprovechar", perfekt: "hat genutzt", prateritum: "nutzte" },
    { id: 273, german: "organisieren", spanish: "organizar", perfekt: "hat organisiert", prateritum: "organisierte" },
    { id: 274, german: "packen", spanish: "empacar", perfekt: "hat gepackt", prateritum: "packte" },
    { id: 275, german: "prüfen", spanish: "revisar", perfekt: "hat geprüft", prateritum: "prüfte" },
    { id: 276, german: "rauchen", spanish: "fumar", perfekt: "hat geraucht", prateritum: "rauchte" },
    { id: 277, german: "regnen", spanish: "llover", perfekt: "hat geregnet", prateritum: "regnete" },
    { id: 278, german: "reinigen", spanish: "limpiar", perfekt: "hat gereinigt", prateritum: "reinigte" },
    { id: 279, german: "reiten", spanish: "montar a caballo", perfekt: "ist geritten", prateritum: "ritt" },
    { id: 280, german: "reservieren", spanish: "reservar", perfekt: "hat reserviert", prateritum: "reservierte" },
    { id: 281, german: "retten", spanish: "rescatar", perfekt: "hat gerettet", prateritum: "rettete" },
    { id: 282, german: "sammeln", spanish: "coleccionar", perfekt: "hat gesammelt", prateritum: "sammelte" },
    { id: 283, german: "schaden", spanish: "dañar", perfekt: "hat geschadet", prateritum: "schadete" },
    { id: 284, german: "schalten", spanish: "cambiar, activar", perfekt: "hat geschaltet", prateritum: "schaltete" },
    { id: 285, german: "schenken", spanish: "regalar", perfekt: "hat geschenkt", prateritum: "schenkte" },
    { id: 286, german: "schicken", spanish: "enviar", perfekt: "hat geschickt", prateritum: "schickte" },
    { id: 287, german: "schlagen", spanish: "golpear", perfekt: "hat geschlagen", prateritum: "schlug" },
    { id: 288, german: "schmelzen", spanish: "derretirse", perfekt: "ist geschmolzen", prateritum: "schmolz" },
    { id: 289, german: "schneien", spanish: "nevar", perfekt: "hat geschneit", prateritum: "schneite" },
    { id: 290, german: "schützen", spanish: "proteger", perfekt: "hat geschützt", prateritum: "schützte" },
    { id: 291, german: "senden", spanish: "enviar", perfekt: "hat gesendet", prateritum: "sendete" },
    { id: 292, german: "sinken", spanish: "hundirse", perfekt: "ist gesunken", prateritum: "sank" },
    { id: 293, german: "spülen", spanish: "enjuagar", perfekt: "hat gespült", prateritum: "spülte" },
    { id: 294, german: "steigen", spanish: "subir", perfekt: "ist gestiegen", prateritum: "stieg" },
    { id: 295, german: "stimmen", spanish: "estar correcto", perfekt: "hat gestimmt", prateritum: "stimmte" },
    { id: 296, german: "stören", spanish: "molestar", perfekt: "hat gestört", prateritum: "störte" },
    { id: 297, german: "teilen", spanish: "dividir", perfekt: "hat geteilt", prateritum: "teilte" },
    { id: 298, german: "trennen", spanish: "separar", perfekt: "hat getrennt", prateritum: "trennte" },
    { id: 299, german: "übernachten", spanish: "pasar la noche", perfekt: "hat übernachtet", prateritum: "übernachtete" },
    { id: 300, german: "umziehen", spanish: "mudarse", perfekt: "ist umgezogen", prateritum: "zog um" },
    { id: 301, german: "unterschreiben", spanish: "firmar", perfekt: "hat unterschrieben", prateritum: "unterschrieb" },
    { id: 302, german: "unternehmen", spanish: "emprender", perfekt: "hat unternommen", prateritum: "unternahm" },
    { id: 303, german: "unterrichten", spanish: "enseñar", perfekt: "hat unterrichtet", prateritum: "unterrichtete" },
    { id: 304, german: "verdienen", spanish: "ganar dinero", perfekt: "hat verdient", prateritum: "verdiente" },
    { id: 305, german: "vermeiden", spanish: "evitar", perfekt: "hat vermieden", prateritum: "vermied" },
    { id: 306, german: "vermieten", spanish: "arrendar", perfekt: "hat vermietet", prateritum: "vermietete" },
    { id: 307, german: "verpassen", spanish: "perder (bus, oportunidad)", perfekt: "hat verpasst", prateritum: "verpasste" },
    { id: 308, german: "verteilen", spanish: "distribuir", perfekt: "hat verteilt", prateritum: "verteilte" },
    { id: 309, german: "vertrauen", spanish: "confiar", perfekt: "hat vertraut", prateritum: "vertraute" },
    { id: 310, german: "vorbereiten", spanish: "preparar", perfekt: "hat vorbereitet", prateritum: "bereitete vor" },
    { id: 311, german: "vorstellen", spanish: "presentar", perfekt: "hat vorgestellt", prateritum: "stellte vor" },
    { id: 312, german: "wechseln", spanish: "cambiar", perfekt: "hat gewechselt", prateritum: "wechselte" },
    { id: 313, german: "wecken", spanish: "despertar a alguien", perfekt: "hat geweckt", prateritum: "weckte" },
    { id: 314, german: "wiederholen", spanish: "repetir", perfekt: "hat wiederholt", prateritum: "wiederholte" },
    { id: 315, german: "zahlen", spanish: "pagar", perfekt: "hat gezahlt", prateritum: "zahlte" },
    { id: 316, german: "zerbrechen", spanish: "romperse", perfekt: "hat zerbrochen", prateritum: "zerbrach" },
    { id: 317, german: "zuhören", spanish: "escuchar atentamente", perfekt: "hat zugehört", prateritum: "hörte zu" },
    { id: 318, german: "zumachen", spanish: "cerrar", perfekt: "hat zugemacht", prateritum: "machte zu" },
    { id: 319, german: "zurückkommen", spanish: "volver", perfekt: "ist zurückgekommen", prateritum: "kam zurück" },
    { id: 320, german: "zusammenarbeiten", spanish: "colaborar", perfekt: "hat zusammengearbeitet", prateritum: "arbeitete zusammen" },
    { id: 321, german: "zustimmen", spanish: "estar de acuerdo", perfekt: "hat zugestimmt", prateritum: "stimmte zu" },
    { id: 322, german: "zweifeln", spanish: "dudar", perfekt: "hat gezweifelt", prateritum: "zweifelte" },
    { id: 323, german: "abbiegen", spanish: "doblar, girar", perfekt: "ist abgebogen", prateritum: "bog ab" },
    { id: 324, german: "abbilden", spanish: "representar", perfekt: "hat abgebildet", prateritum: "bildete ab" },
    { id: 325, german: "abdrucken", spanish: "imprimir", perfekt: "hat abgedruckt", prateritum: "druckte ab" },
    { id: 326, german: "abfliegen", spanish: "despegar", perfekt: "ist abgeflogen", prateritum: "flog ab" },
    { id: 327, german: "abgeben", spanish: "entregar", perfekt: "hat abgegeben", prateritum: "gab ab" },
    { id: 328, german: "abhängen", spanish: "depender", perfekt: "hat abgehangen", prateritum: "hing ab" },
    { id: 329, german: "abheben", spanish: "despegar, retirar dinero", perfekt: "hat abgehoben", prateritum: "hob ab" },
    { id: 330, german: "abreißen", spanish: "demoler", perfekt: "hat abgerissen", prateritum: "riss ab" },
    { id: 331, german: "abschicken", spanish: "enviar", perfekt: "hat abgeschickt", prateritum: "schickte ab" },
    { id: 332, german: "abschreiben", spanish: "copiar", perfekt: "hat abgeschrieben", prateritum: "schrieb ab" },
    { id: 333, german: "absinken", spanish: "hundirse", perfekt: "ist abgesunken", prateritum: "sank abs" },
    { id: 334, german: "abstimmen", spanish: "votar", perfekt: "hat abgestimmt", prateritum: "stimmte ab" },
    { id: 335, german: "abwaschen", spanish: "lavar", perfekt: "hat abgewaschen", prateritum: "wusch ab" },
    { id: 336, german: "achten", spanish: "prestar atención", perfekt: "hat geachtet", prateritum: "achtete" },
    { id: 337, german: "addieren", spanish: "sumar", perfekt: "hat addiert", prateritum: "addierte" },
    { id: 338, german: "anerkennen", spanish: "reconocer", perfekt: "hat anerkannt", prateritum: "erkannte an" },
    { id: 339, german: "anklicken", spanish: "hacer clic", perfekt: "hat angeklickt", prateritum: "klickte an" },
    { id: 340, german: "annehmen", spanish: "aceptar", perfekt: "hat angenommen", prateritum: "nahm an" },
    { id: 341, german: "anpassen", spanish: "adaptar", perfekt: "hat angepasst", prateritum: "passte an" },
    { id: 342, german: "anstoßen", spanish: "brindar, empujar", perfekt: "hat angestoßen", prateritum: "stieß an" },
    { id: 343, german: "anwenden", spanish: "aplicar", perfekt: "hat angewendet", prateritum: "wendete an" },
    { id: 344, german: "anzeigen", spanish: "mostrar", perfekt: "hat angezeigt", prateritum: "zeigte an" },
    { id: 345, german: "archivieren", spanish: "archivar", perfekt: "hat archiviert", prateritum: "archivierte" },
    { id: 346, german: "assoziieren", spanish: "asociar", perfekt: "hat assoziiert", prateritum: "assoziierte" },
    { id: 347, german: "ausbilden", spanish: "capacitar", perfekt: "hat ausgebildet", prateritum: "bildete aus" },
    { id: 348, german: "ausbrechen", spanish: "escapar", perfekt: "ist ausgebrochen", prateritum: "brach aus" },
    { id: 349, german: "ausdrucken", spanish: "imprimir", perfekt: "hat ausgedruckt", prateritum: "druckte aus" },
    { id: 350, german: "ausfallen", spanish: "fallar, cancelarse", perfekt: "ist ausgefallen", prateritum: "fiel aus" },
    { id: 351, german: "ausleihen", spanish: "prestar", perfekt: "hat ausgeliehen", prateritum: "lieh aus" },
    { id: 352, german: "auslösen", spanish: "desencadenar", perfekt: "hat ausgelöst", prateritum: "löste aus" },
    { id: 353, german: "ausprobieren", spanish: "probar", perfekt: "hat ausprobiert", prateritum: "probierte aus" },
    { id: 354, german: "ausschalten", spanish: "apagar", perfekt: "hat ausgeschaltet", prateritum: "schaltete aus" },
    { id: 355, german: "aussteigen", spanish: "bajarse", perfekt: "ist ausgestiegen", prateritum: "stieg aus" },
    { id: 356, german: "ausstellen", spanish: "exhibir", perfekt: "hat ausgestellt", prateritum: "stellte aus" },
    { id: 357, german: "ausziehen", spanish: "mudarse, quitarse ropa", perfekt: "hat ausgezogen", prateritum: "zog aus" },
    { id: 358, german: "beachten", spanish: "observar", perfekt: "hat beachtet", prateritum: "beachtete" },
    { id: 359, german: "beeinflussen", spanish: "influir", perfekt: "hat beeinflusst", prateritum: "beeinflusste" },
    { id: 360, german: "befehlen", spanish: "ordenar", perfekt: "hat befohlen", prateritum: "befahl" },
    { id: 361, german: "befinden", spanish: "encontrarse", perfekt: "hat befunden", prateritum: "befand" },
    { id: 362, german: "befragen", spanish: "interrogar", perfekt: "hat befragt", prateritum: "befragte" },
    { id: 363, german: "befreien", spanish: "liberar", perfekt: "hat befreit", prateritum: "befreite" },
    { id: 364, german: "begegnen", spanish: "encontrarse con", perfekt: "ist begegnet", prateritum: "begegnete" },
    { id: 365, german: "begeistern", spanish: "entusiasmar", perfekt: "hat begeistert", prateritum: "begeisterte" },
    { id: 366, german: "begleiten", spanish: "acompañar", perfekt: "hat begleitet", prateritum: "begleitete" },
    { id: 367, german: "behandeln", spanish: "tratar", perfekt: "hat behandelt", prateritum: "behandelte" },
    { id: 368, german: "behindern", spanish: "obstaculizar", perfekt: "hat behindert", prateritum: "behinderte" },
    { id: 369, german: "beitragen", spanish: "contribuir", perfekt: "hat beigetragen", prateritum: "trug bei" },
    { id: 370, german: "bekämpfen", spanish: "combatir", perfekt: "hat bekämpft", prateritum: "bekämpfte" },
    { id: 371, german: "beklagen", spanish: "lamentar", perfekt: "hat beklagt", prateritum: "beklagte" },
    { id: 372, german: "beleuchten", spanish: "iluminar", perfekt: "hat beleuchtet", prateritum: "beleuchtete" },
    { id: 373, german: "belohnen", spanish: "recompensar", perfekt: "hat belohnt", prateritum: "belohnte" },
    { id: 374, german: "bemerken", spanish: "notar", perfekt: "hat bemerkt", prateritum: "bemerkte" },
    { id: 375, german: "bemühen", spanish: "esforzarse", perfekt: "hat bemüht", prateritum: "bemühte" },
    { id: 376, german: "benennen", spanish: "nombrar", perfekt: "hat benannt", prateritum: "benannte" },
    { id: 377, german: "benötigen", spanish: "requerir", perfekt: "hat benötigt", prateritum: "benötigte" },
    { id: 378, german: "beraten", spanish: "asesorar", perfekt: "hat beraten", prateritum: "beriet" },
    { id: 379, german: "berechnen", spanish: "calcular", perfekt: "hat berechnet", prateritum: "berechnete" },
    { id: 380, german: "bereitstellen", spanish: "proporcionar", perfekt: "hat bereitgestellt", prateritum: "stellte bereit" },
    { id: 381, german: "beruhigen", spanish: "calmar", perfekt: "hat beruhigt", prateritum: "beruhigte" },
    { id: 382, german: "beschädigen", spanish: "dañar", perfekt: "hat beschädigt", prateritum: "beschädigte" },
    { id: 383, german: "beschäftigen", spanish: "ocupar", perfekt: "hat beschäftigt", prateritum: "beschäftigte" },
    { id: 384, german: "beschließen", spanish: "decidir", perfekt: "hat beschlossen", prateritum: "beschloss" },
    { id: 385, german: "beschützen", spanish: "proteger", perfekt: "hat beschützt", prateritum: "beschützte" },
    { id: 386, german: "besiegen", spanish: "derrotar", perfekt: "hat besiegt", prateritum: "besiegte" },
    { id: 387, german: "besitzen", spanish: "poseer", perfekt: "hat besessen", prateritum: "besaß" },
    { id: 388, german: "besorgen", spanish: "conseguir", perfekt: "hat besorgt", prateritum: "besorgte" },
    { id: 389, german: "bestimmen", spanish: "determinar", perfekt: "hat bestimmt", prateritum: "bestimmte" },
    { id: 390, german: "beten", spanish: "rezar", perfekt: "hat gebetet", prateritum: "betete" },
    { id: 391, german: "betonen", spanish: "destacar", perfekt: "hat betont", prateritum: "betonte" },
    { id: 392, german: "betrachten", spanish: "considerar", perfekt: "hat betrachtet", prateritum: "betrachtete" },
    { id: 393, german: "bewegen", spanish: "mover", perfekt: "hat bewegt", prateritum: "bewegte" },
    { id: 394, german: "beweisen", spanish: "demostrar", perfekt: "hat bewiesen", prateritum: "bewies" },
    { id: 395, german: "bewerten", spanish: "evaluar", perfekt: "hat bewertet", prateritum: "bewertete" },
    { id: 396, german: "bewohnen", spanish: "habitar", perfekt: "hat bewohnt", prateritum: "bewohnte" },
    { id: 397, german: "bezweifeln", spanish: "dudar", perfekt: "hat bezweifelt", prateritum: "bezweifelte" },
    { id: 398, german: "bilden", spanish: "formar", perfekt: "hat gebildet", prateritum: "bildete" },
    { id: 399, german: "binden", spanish: "atar", perfekt: "hat gebunden", prateritum: "band" },
    { id: 400, german: "bremsen", spanish: "frenar", perfekt: "hat gebremst", prateritum: "bremste" },
    { id: 401, german: "chatten", spanish: "chatear", perfekt: "hat gechattet", prateritum: "chattete" },
    { id: 402, german: "dokumentieren", spanish: "documentar", perfekt: "hat dokumentiert", prateritum: "dokumentierte" },
    { id: 403, german: "drehen", spanish: "girar", perfekt: "hat gedreht", prateritum: "drehte" },
    { id: 404, german: "drohen", spanish: "amenazar", perfekt: "hat gedroht", prateritum: "drohte" },
    { id: 405, german: "drucken", spanish: "imprimir", perfekt: "hat gedruckt", prateritum: "druckte" },
    { id: 406, german: "durchführen", spanish: "realizar", perfekt: "hat durchgeführt", prateritum: "führte durch" },
    { id: 407, german: "durchsuchen", spanish: "registrar", perfekt: "hat durchsucht", prateritum: "durchsuchte" },
    { id: 408, german: "einführen", spanish: "introducir", perfekt: "hat eingeführt", prateritum: "führte ein" },
    { id: 409, german: "einrichten", spanish: "configurar", perfekt: "hat eingerichtet", prateritum: "richtete ein" },
    { id: 410, german: "einsammeln", spanish: "recoger", perfekt: "hat eingesammelt", prateritum: "sammelte ein" },
    { id: 411, german: "einsparen", spanish: "ahorrar", perfekt: "hat eingespart", prateritum: "sparte ein" },
    { id: 412, german: "einstellen", spanish: "contratar, ajustar", perfekt: "hat eingestellt", prateritum: "stellte ein" },
    { id: 413, german: "eintragen", spanish: "registrar", perfekt: "hat eingetragen", prateritum: "trug ein" },
    { id: 414, german: "empfinden", spanish: "sentir", perfekt: "hat empfunden", prateritum: "empfand" },
    { id: 415, german: "entdecken", spanish: "descubrir", perfekt: "hat entdeckt", prateritum: "entdeckte" },
    { id: 416, german: "entfernen", spanish: "remover", perfekt: "hat entfernt", prateritum: "entfernte" },
    { id: 417, german: "entlassen", spanish: "despedir", perfekt: "hat entlassen", prateritum: "entließ" },
    { id: 418, german: "entnehmen", spanish: "extraer", perfekt: "hat entnommen", prateritum: "entnahm" },
    { id: 419, german: "entsorgen", spanish: "desechar", perfekt: "hat entsorgt", prateritum: "entsorgte" },
    { id: 420, german: "entspannen", spanish: "relajar", perfekt: "hat entspannt", prateritum: "entspannte" },
    { id: 421, german: "erfassen", spanish: "registrar", perfekt: "hat erfasst", prateritum: "erfasste" },
    { id: 422, german: "erfüllen", spanish: "cumplir", perfekt: "hat erfüllt", prateritum: "erfüllte" },
    { id: 423, german: "ergänzen", spanish: "completar", perfekt: "hat ergänzt", prateritum: "ergänzte" },
    { id: 424, german: "erheben", spanish: "levantar", perfekt: "hat erhoben", prateritum: "erhob" },
    { id: 425, german: "erhöhen", spanish: "aumentar", perfekt: "hat erhöht", prateritum: "erhöhte" },
    { id: 426, german: "erledigen", spanish: "resolver", perfekt: "hat erledigt", prateritum: "erledigte" },
    { id: 427, german: "ermöglichen", spanish: "permitir", perfekt: "hat ermöglicht", prateritum: "ermöglichte" },
    { id: 428, german: "erneuern", spanish: "renovar", perfekt: "hat erneuert", prateritum: "erneuerte" },
    { id: 429, german: "eröffnen", spanish: "inaugurar", perfekt: "hat eröffnet", prateritum: "eröffnete" },
    { id: 430, german: "erschaffen", spanish: "crear", perfekt: "hat erschaffen", prateritum: "erschuf" },
    { id: 431, german: "erschrecken", spanish: "asustarse", perfekt: "ist erschrocken", prateritum: "erschrak" },
    { id: 432, german: "ersetzen", spanish: "reemplazar", perfekt: "hat ersetzt", prateritum: "ersetzte" },
    { id: 433, german: "erwähnen", spanish: "mencionar", perfekt: "hat erwähnt", prateritum: "erwähnte" },
    { id: 434, german: "erzwingen", spanish: "forzar", perfekt: "hat erzwungen", prateritum: "erzwang" },
    { id: 435, german: "exportieren", spanish: "exportar", perfekt: "hat exportiert", prateritum: "exportierte" },
    { id: 436, german: "filmen", spanish: "filmar", perfekt: "hat gefilmt", prateritum: "filmte" },
    { id: 437, german: "finanzieren", spanish: "financiar", perfekt: "hat finanziert", prateritum: "finanzierte" },
    { id: 438, german: "fördern", spanish: "promover", perfekt: "hat gefördert", prateritum: "förderte" },
    { id: 439, german: "formatieren", spanish: "formatear", perfekt: "hat formatiert", prateritum: "formatierte" },
    { id: 440, german: "frieren", spanish: "congelarse", perfekt: "hat gefroren", prateritum: "fror" },
    { id: 441, german: "garantieren", spanish: "garantizar", perfekt: "hat garantiert", prateritum: "garantierte" },
    { id: 442, german: "genehmigen", spanish: "aprobar", perfekt: "hat genehmigt", prateritum: "genehmigte" },
    { id: 443, german: "genießen", spanish: "disfrutar", perfekt: "hat genossen", prateritum: "genoss" },
    { id: 444, german: "gestalten", spanish: "diseñar", perfekt: "hat gestaltet", prateritum: "gestaltete" },
    { id: 445, german: "graben", spanish: "excavar", perfekt: "hat gegraben", prateritum: "grub" },
    { id: 446, german: "grüßen", spanish: "saludar", perfekt: "hat gegrüßt", prateritum: "grüßte" },
    { id: 447, german: "handhaben", spanish: "manejar", perfekt: "hat gehandhabt", prateritum: "handhabte" },
    { id: 448, german: "herunterladen", spanish: "descargar", perfekt: "hat heruntergeladen", prateritum: "lud herunter" },
    { id: 449, german: "hervorrufen", spanish: "provocar", perfekt: "hat hervorgerufen", prateritum: "rief hervor" },
    { id: 450, german: "hinzufügen", spanish: "añadir", perfekt: "hat hinzugefügt", prateritum: "fügte hinzu" },
    { id: 451, german: "importieren", spanish: "importar", perfekt: "hat importiert", prateritum: "importierte" },
    { id: 452, german: "investieren", spanish: "invertir", perfekt: "hat investiert", prateritum: "investierte" },
    { id: 453, german: "isolieren", spanish: "aislar", perfekt: "hat isoliert", prateritum: "isolierte" },
    { id: 454, german: "jonglieren", spanish: "hacer malabares", perfekt: "hat jongliert", prateritum: "jonglierte" },
    { id: 455, german: "kalkulieren", spanish: "calcular", perfekt: "hat kalkuliert", prateritum: "kalkulierte" },
    { id: 456, german: "kapieren", spanish: "entender", perfekt: "hat kapiert", prateritum: "kapierte" },
    { id: 457, german: "kennzeichnen", spanish: "marcar", perfekt: "hat gekennzeichnet", prateritum: "kennzeichnete" },
    { id: 458, german: "klatschen", spanish: "aplaudir", perfekt: "hat geklatscht", prateritum: "klatschte" },
    { id: 459, german: "kombinieren", spanish: "combinar", perfekt: "hat kombiniert", prateritum: "kombinierte" },
    { id: 460, german: "kommentieren", spanish: "comentar", perfekt: "hat kommentiert", prateritum: "kommentierte" },
    { id: 461, german: "kommunizieren", spanish: "comunicar", perfekt: "hat kommuniziert", prateritum: "kommunizierte" },
    { id: 462, german: "konfigurieren", spanish: "configurar", perfekt: "hat konfiguriert", prateritum: "konfigurierte" },
    { id: 463, german: "konstruieren", spanish: "construir", perfekt: "hat konstruiert", prateritum: "konstruierte" },
    { id: 464, german: "kontaktieren", spanish: "contactar", perfekt: "hat kontaktiert", prateritum: "kontaktierte" },
    { id: 465, german: "konzentrieren", spanish: "concentrar", perfekt: "hat konzentriert", prateritum: "konzentrierte" },
    { id: 466, german: "korrigieren", spanish: "corregir", perfekt: "hat korrigiert", prateritum: "korrigierte" },
    { id: 467, german: "kratzen", spanish: "rasguñar", perfekt: "hat gekratzt", prateritum: "kratzte" },
    { id: 468, german: "kritisieren", spanish: "criticar", perfekt: "hat kritisiert", prateritum: "kritisierte" },
    { id: 469, german: "kühlen", spanish: "enfriar", perfekt: "hat gekühlt", prateritum: "kühlte" },
    { id: 470, german: "lagern", spanish: "almacenar", perfekt: "hat gelagert", prateritum: "lagerte" },
    { id: 471, german: "läuten", spanish: "sonar", perfekt: "hat geläutet", prateritum: "läutete" },
    { id: 472, german: "leiten", spanish: "dirigir", perfekt: "hat geleitet", prateritum: "leitete" },
    { id: 473, german: "leisten", spanish: "realizar", perfekt: "hat geleistet", prateritum: "leistete" },
    { id: 474, german: "liefern", spanish: "entregar", perfekt: "hat geliefert", prateritum: "lieferte" },
    { id: 475, german: "lösen", spanish: "resolver", perfekt: "hat gelöst", prateritum: "löste" },
    { id: 476, german: "markieren", spanish: "marcar", perfekt: "hat markiert", prateritum: "markierte" },
    { id: 477, german: "maximieren", spanish: "maximizar", perfekt: "hat maximiert", prateritum: "maximierte" },
    { id: 478, german: "mischen", spanish: "mezclar", perfekt: "hat gemischt", prateritum: "mischte" },
    { id: 479, german: "moderieren", spanish: "moderar", perfekt: "hat moderiert", prateritum: "moderierte" },
    { id: 480, german: "motivieren", spanish: "motivar", perfekt: "hat motiviert", prateritum: "motivierte" },
    { id: 481, german: "nachdenken", spanish: "reflexionar", perfekt: "hat nachgedacht", prateritum: "dachte nach" },
    { id: 482, german: "nachfragen", spanish: "consultar", perfekt: "hat nachgefragt", prateritum: "fragte nach" },
    { id: 483, german: "nachweisen", spanish: "comprobar", perfekt: "hat nachgewiesen", prateritum: "wies nach" },
    { id: 484, german: "navigieren", spanish: "navegar", perfekt: "hat navigiert", prateritum: "navigierte" },
    { id: 485, german: "notieren", spanish: "anotar", perfekt: "hat notiert", prateritum: "notierte" },
    { id: 486, german: "operieren", spanish: "operar", perfekt: "hat operiert", prateritum: "operierte" },
    { id: 487, german: "ordnen", spanish: "ordenar", perfekt: "hat geordnet", prateritum: "ordnete" },
    { id: 488, german: "parken", spanish: "estacionar", perfekt: "hat geparkt", prateritum: "parkte" },
    { id: 489, german: "platzieren", spanish: "ubicar", perfekt: "hat platziert", prateritum: "platzierte" },
    { id: 490, german: "posten", spanish: "publicar", perfekt: "hat gepostet", prateritum: "postete" },
    { id: 491, german: "produzieren", spanish: "producir", perfekt: "hat produziert", prateritum: "produzierte" },
    { id: 492, german: "protestieren", spanish: "protestar", perfekt: "hat protestiert", prateritum: "protestierte" },
    { id: 493, german: "publizieren", spanish: "publicar", perfekt: "hat publiziert", prateritum: "publizierte" },
    { id: 494, german: "rasieren", spanish: "afeitar", perfekt: "hat rasiert", prateritum: "rasierte" },
    { id: 495, german: "reagieren", spanish: "reaccionar", perfekt: "hat reagiert", prateritum: "reagierte" },
    { id: 496, german: "realisieren", spanish: "realizar", perfekt: "hat realisiert", prateritum: "realisierte" },
    { id: 497, german: "reduzieren", spanish: "reducir", perfekt: "hat reduziert", prateritum: "reduzierte" },
    { id: 498, german: "registrieren", spanish: "registrar", perfekt: "hat registriert", prateritum: "registrierte" },
    { id: 499, german: "regulieren", spanish: "regular", perfekt: "hat reguliert", prateritum: "regulierte" },
    { id: 500, german: "sabotieren", spanish: "sabotear", perfekt: "hat sabotiert", prateritum: "sabotierte" },
    { id: 501, german: "sichern", spanish: "asegurar", perfekt: "hat gesichert", prateritum: "sicherte" },
    { id: 502, german: "sortieren", spanish: "clasificar", perfekt: "hat sortiert", prateritum: "sortierte" },
    { id: 503, german: "spenden", spanish: "donar", perfekt: "hat gespendet", prateritum: "spendete" },
    { id: 504, german: "steigern", spanish: "incrementar", perfekt: "hat gesteigert", prateritum: "steigerte" },
    { id: 505, german: "strukturieren", spanish: "estructurar", perfekt: "hat strukturiert", prateritum: "strukturierte" },
    { id: 506, german: "subtrahieren", spanish: "restar", perfekt: "hat subtrahiert", prateritum: "subtrahierte" },
    { id: 507, german: "transportieren", spanish: "transportar", perfekt: "hat transportiert", prateritum: "transportierte" },
    { id: 508, german: "überprüfen", spanish: "verificar", perfekt: "hat überprüft", prateritum: "überprüfte" },
    { id: 509, german: "überraschen", spanish: "sorprender", perfekt: "hat überrascht", prateritum: "überraschte" },
    { id: 510, german: "übertragen", spanish: "transferir", perfekt: "hat übertragen", prateritum: "übertrug" },
    { id: 511, german: "umarmen", spanish: "abrazar", perfekt: "hat umarmt", prateritum: "umarmte" },
    { id: 512, german: "umsetzen", spanish: "implementar", perfekt: "hat umgesetzt", prateritum: "setzte um" },
    { id: 513, german: "unterbrechen", spanish: "interrumpir", perfekt: "hat unterbrochen", prateritum: "unterbrach" },
    { id: 514, german: "unterstützen", spanish: "apoyar", perfekt: "hat unterstützt", prateritum: "unterstützte" },
    { id: 515, german: "updaten", spanish: "actualizar", perfekt: "hat upgedatet", prateritum: "updatete" },
    { id: 516, german: "verändern", spanish: "modificar", perfekt: "hat verändert", prateritum: "veränderte" },
    { id: 517, german: "verbrauchen", spanish: "consumir", perfekt: "hat verbraucht", prateritum: "verbrauchte" },
    { id: 518, german: "verdoppeln", spanish: "duplicar", perfekt: "hat verdoppelt", prateritum: "verdoppelte" },
    { id: 519, german: "vereinbaren", spanish: "acordar", perfekt: "hat vereinbart", prateritum: "vereinbarte" },
    { id: 520, german: "vergrößern", spanish: "agrandar", perfekt: "hat vergrößert", prateritum: "vergrößerte" },
    { id: 521, german: "verkleinern", spanish: "reducir", perfekt: "hat verkleinert", prateritum: "verkleinerte" },
    { id: 522, german: "verladen", spanish: "cargar mercancía", perfekt: "hat verladen", prateritum: "verlud" },
    { id: 523, german: "verlangen", spanish: "exigir", perfekt: "hat verlangt", prateritum: "verlangte" },
    { id: 524, german: "veröffentlichen", spanish: "publicar", perfekt: "hat veröffentlicht", prateritum: "veröffentlichte" },
    { id: 525, german: "verpacken", spanish: "empaquetar", perfekt: "hat verpackt", prateritum: "verpackte" },
    { id: 526, german: "verschieben", spanish: "mover, posponer", perfekt: "hat verschoben", prateritum: "verschob" },
    { id: 527, german: "verschicken", spanish: "despachar", perfekt: "hat verschickt", prateritum: "verschickte" },
    { id: 528, german: "verschlüsseln", spanish: "encriptar", perfekt: "hat verschlüsselt", prateritum: "verschlüsselte" },
    { id: 529, german: "versorgen", spanish: "abastecer", perfekt: "hat versorgt", prateritum: "versorgte" },
    { id: 530, german: "vertreten", spanish: "representar", perfekt: "hat vertreten", prateritum: "vertrat" },
    { id: 531, german: "verursachen", spanish: "causar", perfekt: "hat verursacht", prateritum: "verursachte" },
    { id: 532, german: "verwalten", spanish: "administrar", perfekt: "hat verwaltet", prateritum: "verwaltete" },
    { id: 533, german: "visualisieren", spanish: "visualizar", perfekt: "hat visualisiert", prateritum: "visualisierte" },
    { id: 534, german: "vorhersagen", spanish: "predecir", perfekt: "hat vorhergesagt", prateritum: "sagte vorher" },
    { id: 535, german: "warnen", spanish: "advertir", perfekt: "hat gewarnt", prateritum: "warnte" },
    { id: 536, german: "wiederherstellen", spanish: "restaurar", perfekt: "hat wiederhergestellt", prateritum: "stellte wieder her" },
    { id: 537, german: "winken", spanish: "saludar con la mano", perfekt: "hat gewinkt", prateritum: "winkte" },
    { id: 538, german: "zerstören", spanish: "destruir", perfekt: "hat zerstört", prateritum: "zerstörte" },
    { id: 539, german: "zitieren", spanish: "citar", perfekt: "hat zitiert", prateritum: "zitierte" },
    { id: 540, german: "zuordnen", spanish: "asignar", perfekt: "hat zugeordnet", prateritum: "ordnete zu" }
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
