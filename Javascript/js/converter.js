const alphabet = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
}

function morseToText(text, keys) {
    let string = text.split(/\s/);
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (string[i] === alphabet[keys[j]]) {
                document.getElementById('result').innerHTML += keys[j] + ' ';
            }
        }
    }
}

function textToMorse(text, keys) {
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (text[i] === keys[j]) {
                document.getElementById('result').innerHTML += alphabet[keys[j]] + ' ';
            }
        }
    }
}

function convertText() {
    let alphabetKeys = Object.keys(alphabet);
    let value = document.getElementById('morseCode').value;
    if (value[0] === '.' || value[0] === '-') {
        morseToText(value, alphabetKeys);
    } else {
        textToMorse(value, alphabetKeys);
    }
}

let button = document.getElementById('convert');
button.addEventListener('click', convertText);