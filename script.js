const words = [
    "gente", "humanidad", "humano", "persona", "hombre", "mujer", "bebé", "niño", "niña", "adolescente",
    "adulto", "adulta", "anciano", "anciana", "don", "doña", "señor", "señora", "caballero", "dama", "individuo",
    "cuerpo", "pierna", "pie", "talón", "espinilla", "rodilla", "muslo", "cabeza", "cara", "boca", "labio",
    "diente", "ojo", "nariz", "barba", "bigote", "cabello", "oreja", "cerebro", "estómago", "brazo", "codo",
    "hombro", "uña", "mano", "muñeca", "palma", "dedo", "trasero", "culo", "cola", "glúteos", "abdomen",
    "hígado", "músculo", "cuello", "corazón", "mente", "alma", "espíritu", "pecho", "cintura", "cadera",
    "espalda", "sangre", "carne", "piel", "hueso", "resfriado", "gripe", "diarrea", "salud", "enfermedad",
    "columna vertebral", "familia", "amigo", "amiga", "conocido", "conocida", "colega", "pareja", "esposo",
    "esposa", "matrimonio", "amor", "padre", "madre", "hermano", "hermana", "hijo", "hija", "abuelo", "abuela",
    "bisabuelo", "bisabuela", "nieto", "nieta", "bisnieto", "bisnieta", "primo", "prima", "tío", "tía",
    "sobrino", "sobrina", "criatura", "especie", "ser", "vida", "nacimiento", "reproducción", "muerte",
    "naturaleza", "campo", "bosque", "selva", "jungla", "desierto", "costa", "playa", "río", "laguna", "lago",
    "mar", "océano", "cerro", "monte", "montaña", "luz", "energía", "animal", "perro", "gato", "vaca", "cerdo",
    "caballo", "yegua", "oveja", "mono", "ratón", "rata", "tigre", "conejo", "dragón", "ciervo", "rana", "león",
    "jirafa", "elefante", "pájaro", "gallina", "gorrión", "cuervo", "águila", "halcón", "pez", "camarón",
    "langosta", "sardina", "atún", "calamar", "pulpo", "insecto", "bicho", "mariposa", "polilla", "saltamontes",
    "araña", "mosca", "mosquito", "cucaracha", "caracol", "babosa", "lombriz", "marisco", "molusco", "lagarto",
    "serpiente", "cocodrilo", "alimento", "comida", "bebida", "vegetal", "planta", "pasto", "césped", "flor",
    "fruta", "semilla", "árbol", "hoja", "raíz", "tallo", "hongo", "ciruela", "pino", "bambú", "nuez", "almendra",
    "castaña", "arroz", "avena", "cebada", "trigo", "verdura", "patatas", "papas", "judías", "guisantes",
    "porotos", "rábano", "zanahoria", "manzana", "naranja", "plátano", "pera", "castaño", "durazno", "tomate",
    "sandía", "carne", "gaseosa", "tiempo", "calendario", "edad", "época", "era", "fecha", "instante", "momento",
    "segundo", "minuto", "hora", "día", "semana", "entre semana", "fin de semana", "mes", "año", "década",
    "siglo", "milenio", "ayer", "hoy", "mañana", "amanecer", "mediodía", "tarde", "anochecer", "noche", "lunes",
    "martes", "miércoles", "jueves", "viernes", "sábado", "domingo", "ambiente", "espacio", "entorno", "área",
    "superficie", "volumen", "región", "zona", "lado", "mundo", "planeta", "sol", "luna", "estrella", "galaxia",
    "universo", "clima", "despejado", "nublado", "lluvia", "nieve", "viento", "trueno", "rayo", "tormenta",
    "cielo", "este", "oeste", "sur", "norte", "derecha", "izquierda", "diagonal", "exterior", "interior",
    "calor", "agua", "hielo", "vapor", "fuego", "gas", "aire", "atmósfera", "tierra", "piso", "suelo", "metal",
    "metálico", "hierro", "oro", "plata", "plomo", "sal", "barro", "lodo", "peso", "metro", "milímetro",
    "centímetro", "kilómetro", "litro", "gramo", "kilo", "cantidad", "total", "medida", "sociedad", "comunidad",
    "reunión", "encuentro", "estructura", "administración", "organización", "asociación", "empresa", "equipo",
    "autoridad", "cargo", "campaña", "club", "comisión", "congreso", "consejo", "partido", "país", "nación",
    "gobierno", "estado", "provincia", "departamento", "municipio", "democracia", "dictadura", "política",
    "político", "presidente", "ministro", "director", "parlamentario", "congresista", "senador", "diputado",
    "representante", "gobernador", "intendente", "alcalde", "policía", "bomberos", "capital", "ciudad",
    "población", "pueblo", "villa", "obligación", "libertad", "derecho", "permiso", "prohibición", "constitución",
    "ley", "decreto", "norma", "economía", "consumo", "demanda", "compañía", "comercio", "mercado", "servicio",
    "producto", "producción", "transacción", "almacén", "hotel", "fábrica", "cuenta", "boleto", "entrada",
    "dinero", "billete", "vuelto", "cambio", "máquina expendedora", "precio", "tarifa", "valor", "escritorio",
    "silla", "mesa", "cama", "dormitorio", "habitación", "cuarto", "oficina", "panel", "puerta", "ventana",
    "entrada", "hogar", "casa", "apartamento", "departamento", "edificio", "construcción", "elevador",
    "ascensor", "escalera", "aparato", "cámara", "aguja", "clavo", "hilo", "cuerda", "cordel", "cordón",
    "bolsillo", "bolso", "bolsa", "paraguas", "parasol", "pantalla", "pomo", "llave", "trancar", "arma",
    "escultura", "libro", "revista", "cuadro", "grabado", "electricidad", "corriente", "base", "pata",
    "conexión", "ropa", "prenda", "manga", "solapa", "cuello", "botón", "cremallera", "cierre", "cinturón",
    "zapato", "gafas", "pantalón", "camisa", "camiseta", "zapatilla", "cordones", "abrigo", "chaqueta",
    "calcetines", "bragas", "calzón", "calzoncillo", "sujetador", "sostén", "falda", "transporte", "transporte público",
    "transporte privado"];

let currentWord = "";
let currentIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

const wordContainer = document.getElementById('wordContainer');
const wordContainer_put = document.getElementById('wordContainer_put');
const scoreContainer = document.getElementById('score');
const timerContainer = document.getElementById('timer');
const restartButton = document.getElementById('restartButton');



function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord(word) {
    wordContainer.textContent = word;
    wordContainer_put.textContent = '';
}

function startNewWord() {
    currentWord = getRandomWord();
    currentIndex = 0;
    displayWord(currentWord);
}

function updateScore() {
    scoreContainer.textContent = score;
}

function updateTimer() {
    timerContainer.textContent = timeLeft;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            restartButton.style.display = 'block';
            alert(`¡Tiempo terminado! Palabras correctas: ${score}`);
        }
    }, 1000);
}

function restartGame() {
    score = 0;
    timeLeft = 60;
    updateScore();
    updateTimer();
    restartButton.style.display = 'none';
    startNewWord();
    startTimer();
}

function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => {
        element.classList.remove('shake');
    }, 500);
}

function handleKeyPress(event) {
    const keyPressed = event.key.toLowerCase();
    const allowedKeys = /^[a-záéíóúñ\s]$/;

    if (!allowedKeys.test(keyPressed)) {
        return;
    }

    const letter = document.createElement('span');

    if (keyPressed === currentWord[currentIndex]) {
        letter.style.color = 'green';
        currentIndex++;

        if (currentIndex === currentWord.length) {
            const audio_point = new Audio('point.mp3');
            audio_point.play();
            score++;
            updateScore();
            setTimeout(startNewWord, 100);
        }
    } else {
        letter.style.color = 'red';
        const audio_error = new Audio('error.mp3');
        audio_error.play();
        shakeElement(wordContainer);
        setTimeout(startNewWord, 500);
    }

    letter.textContent = keyPressed;
    wordContainer_put.appendChild(letter);
}

document.addEventListener('keydown', handleKeyPress);
startNewWord();
startTimer();