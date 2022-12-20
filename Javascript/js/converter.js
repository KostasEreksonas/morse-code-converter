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

function convertText() {
    let keys = Object.keys(alphabet);
    let text = document.getElementById('morseCode').value;
    for (let i = 0; i < text.length; i++) {
        //  -------------
        // | NEEDS A FIX |
        //  -------------
        // If a morse code is entered, append . and - symbols until whitespace, then convert a group of them to plain text
        // Repeat the process until end of line
        if (text[0] === '.' || text[0] === '-') {
            let result = text.match(/\s/);
            let string = '';
            while (result === false) {
                string += text[i];
            }
            for (let j = 0; j < keys.length; j++) {
                if (string === alphabet[keys[j]]) {
                    document.getElementById('result').innerHTML += keys[j] + ' ';
                }
            }
        } else {
            for (let j = 0; j < keys.length; j++) {
                if (text[i] === keys[j]) {
                        document.getElementById('result').innerHTML += alphabet[keys[j]] + ' ';
                    }
                }
            }
		}
    }

let button = document.getElementById('convert');
button.addEventListener('click', convertText);
