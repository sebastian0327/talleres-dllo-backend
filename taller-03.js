
function desglosarString(_palabra, tipo) {
    const VV = ["a", "e", "i", "o", "u"]
    let comp = _tipo == "vocales" ? true : false
    let c = 0
    for (let caracter of _palabra) {
        if (VV.includes(caracter)) {
            if (comp) {
                c++
            }
        } else {
            if (!comp) {
                c++
            }
        }
    }
    return c
}

let palabra = "murcielagos"
let tipo = "vocales"
//console.log(desglosarString(palabra, tipo))


function twoSum(_cadena, _vs) {
    let resp
    for (let i = 0; i < _cadena.length - 1; i++) {
        for (let j = i + 1; j < _cadena.length; j++) {
            if (_cadena[i] + _cadena[j] == _vs) {
                return resp = [i, j]
            }
        }
    }
    return resp = [null, null]
}

let cadena = [2, 7, 11, 15]
let vs = 9
//console.log(twoSum(cadena, vs))

function conversionRomana(_roman) {
    let dec = 0
    let prev = 0
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
     for (let i = _roman.length - 1; i >= 0; i--) {
        let valor = valores[_roman[i]]; 
        if (valor < prev) {
            dec -= valor;
        } else {
            dec += valor; 
        }  
        prev = valor; 
    }
    return dec
}

let roman = "XIV"
console.log(conversionRomana(roman))
