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
    let text = document.getElementById('morseCode').value;
    for (let i = 0; i < text.length; i++) {
        if (text[0] === '.' || text[0] === '-') {
			document.getElementById('result').innerHTML = text + ' is written in morse code.';
        } else {
            let keys = Object.keys(alphabet);
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
