// Exercício 4 O código abaixo está em JavaScript . Calcule sua ordem de complexidade para um array de tamanho n .
const numbers = [0,1,2,3,4,5,6,7,8,9]

// a complexidade aqui é O(n)
numbers.map(n => n * n)
        // aqui a entrada é [0, 1, 4, 9, 25, 36, 49, 64, 81]
        // e a complexidade O(n). Junto com a complexidade anterior, O(n * 2)
        .filter(n => n % 2 === 0)
        // aqui a entrada é [0, 4, 46, 64]
        // Aqui a complexidade é O(n), mas somar ao anterior é errado já que N tem outro valor agora
       .reduce((acc, n) => acc + n)
        // aqui o resultado é 114