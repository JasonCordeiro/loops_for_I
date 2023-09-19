//    Escreva uma função chamada renderUpToTwenty. Quando a função for chamada, os números de 0 a 20 devem ser impressos no console.
//    Exemplo de
//    chamada da função: renderUpToTwenty()
//    saída: 0,1,2,3,4,5...20

function renderUpToTwenty(){
    for (let panda = 0; panda <= 20; panda++) {
        console.log(panda)
        }
}

//renderUpToTwenty()


//    Escreva uma função chamada tenInTenToAHundred(). Quando a função for chamada, os números de 10 a 100, contando de 10 em 10, devem ser impressos no console.
//    Exemplo:
//    Chamada da função: ⁠tenInTenToAHundred()
//    Saída: 10,20,30,40,50... 100


function tenInTenToAHundred() {
    for (let panda = 10; panda <= 100; panda += 10) {
        console.log(panda)
    }
} 

//tenInTenToAHundred()

//    Escreva uma função chamada oddUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem ímpares.
//    Exemplo:
//    Chamada da função: oddUpToTwenty()
//    Saída: 1,3,5,7,9 ...19

function oddUpToTwenty() {
    for (let panda = 0; panda <= 20; panda++) {
        if(panda % 2 == 1) {
            console.log(panda)
        }
    }
}

//oddUpToTwenty()

//    Escreva uma função chamada evenUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem pares.
//    Exemplo:
//    Chamada da função: evenUpToTwenty()
//    Saída: 0,2,4,6,8 ...20

function evenUpToTwenty() {
    for (let panda = 0; panda <= 20; panda++) {
        if(panda % 2 == 0) {
            console.log(panda)
        }
    }
}

//evenUpToTwenty()

//    Escreva uma função chamada fromNegativeToPositive(). Quando a função for chamada, apresente os valores de -10 a 0.
//    Exemplo:
//    Chamada da função: fromNegativeToPositive()
//    Saída: -10,-9,-8,-7 ...0

function fromNegativeToPositive() {
    for (let panda = -10; panda <= 0; panda++) {
        console.log(panda)
    }
}

//fromNegativeToPositive()

//    Escreva uma função chamada inDescendingDirection. Quando a função for chamada, apresente valores de 10 a 0 no console.
//    Exemplo:
//    Chamada da função: inDescendingDirection()
//    Saída: 10,9,8,7...0

function inDescendingDirection() {
    for (let panda = 10; panda >= 0; panda--) {
        console.log(panda)
    }
}

//inDescendingDirection()

//    Escreva uma função chamada toSquare(). Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.
//    Exemplo:
//    Chamada da função: toSquare()
//    Saída: 1,4,9,16...100

function toSquare() {
    for (let panda = 1; panda <= 10; panda++) {
        console.log(panda*panda)
    }
}

//toSquare()