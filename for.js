/*Declare o seguinte Array:

const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

Utilizando o for (não for..in nem for..of), faça as seguintes operações:
1. Liste todos os elementos do Array
2. Liste apenas as notas que forem menor que 1
3. Se houver no Array alguma nota igual a 10, adicione ao final do Array uma nova nota de 9.0
4. Se houver no Array uma nota igual a 6.3, remova o último elemento do Array.*/

const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

//Operação 1
//for (let i = 0; i < notas.length; i++) {
    //console.log(notas[i])
//}

//Operações 2-4
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
    if (notas[i] < 1) {
        console.log(`${notas[i]} é menor que 1.`);
    } else if (notas[i] === 10) {
        notas.push(9.0);
        console.log(`array modificado = [${notas}]`)
    } else if (notas[i] === 6.3) {
        notas.pop();
        console.log(`Bingo -> ${notas[1]}!`);
    } else {
        console.log(`${notas[i]} não se encaixa em nenhuma das condições estipuladas.`)
   }
}

