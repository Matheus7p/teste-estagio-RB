// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

function CountLeterA(string) {
    const match = string.match(/a/gi);

    if (!match) {
        console.log('A letra "a" não foi encontrada na string');
        return;
    }
    console.log(`A letra "a" foi encontrada ${match.length} vezes na string`);
    
}

const string = "Eu preciso de um Trabalho!";

CountLeterA(string);