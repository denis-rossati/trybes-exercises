let firstObject = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log ("A jogadora " + firstObject.name + ' ' + firstObject.lastName + " tem " + firstObject.age + " anos de idade.");

firstObject['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];


console.log ("A jogadora " + firstObject.name + ' ' + firstObject.lastName + ' foi eleita a melhor do mundo por ' + firstObject.bestInTheWorld.length + ' vezes');

console.log ("A jogadora possui " + firstObject.medals.golden + " medalhas de ouro e " + firstObject.medals.silver + " medalhas de prata.");