const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let box = '';
    let result = '';
    let key = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        box = expr.slice(i, i + 10);
        if (box === '**********') {
            result += ' ';
        }
        else {
            for (let j = 0; j < 10; j = j + 2) {
                if (box[j] === '1') {
                    if (box[j + 1] === '0') {
                        key += '.';
                    }
                    else {
                        key += '-';
                    }
                }
            }
            result += MORSE_TABLE[key];
            key = '';
        }
    }
    return result;
}

module.exports = {
    decode
} 
