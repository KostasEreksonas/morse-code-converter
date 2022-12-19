#!/usr/bin/env python3

import re

alphabet = {
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

def translate():
    with open("code.txt", "r") as file:
        for line in file:
            if (line[0] == '.' or line[0] == '-'):
                print(f"Line \"{line.rstrip()}\" is written in morse code.")
                string = ''
                letters = []
                letters = line.split()
                length = len(letters)
                for x in range(length):
                    for key,value in alphabet.items():
                        if (value == letters[x]):
                            if (x == length-1):
                                string += key
                            else:
                                string += key + ' '
                print(f"Decoded message is: \"{string}\".")
            else:
                print(f"Line \"{line.rstrip()}\" is written in plain text.")
                string = ''
                letters = []
                for letter in line:
                    letters.append(letter)
                length = len(letters)
                for x in range(length):
                    for key,value in alphabet.items():
                        if (key == letters[x]):
                            if (x == length-2):
                                string += value
                            else:
                                string += value + ' '

                print(f"Encoded message is: \"{string}\".")

if __name__ == "__main__":
    #codetotext()
    translate()
