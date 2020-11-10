// 2) Escreva uma função que retorne o número de ocorrências de cada palavra em uma frase.

// Frase de exemplo: “Atirei o pau no gato, mas o gato não morreu.”

let phrase_ = 'Atirei o pau no gato, mas o gato não morreu.';

let occurencesOnPhrase = (param) => param.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(' ').reduce((accumulator, current) => {
    if(!accumulator[current]) {
        accumulator[current] = 1;
    } else {
        accumulator[current] += 1;
    }
    return accumulator;
}, {});

console.log(occurencesOnPhrase(phrase_));