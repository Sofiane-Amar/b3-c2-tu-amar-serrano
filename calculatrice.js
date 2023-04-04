const readlineSync = require('readline-sync');

function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
    if (b === 0) {
      throw new Error('Division par zéro impossible');
    }
    return a / b;
  }
  

function pourcentage(a, pourcentage) {
  return (a * pourcentage) / 100;
}

function carre(a) {
  return Math.pow(a, 2);
}

function racine(a) {
    if (a < 0) {
      throw new Error('Impossible de prendre la racine carrée d\'un nombre négatif');
    }
    return Math.sqrt(a);
  }


function puissance(a, b) {
  return Math.pow(a, b);
}

const operation = readlineSync.question('Quelle opération voulez-vous effectuer? (+, -, *, /, %, carré, racine, puissance) ');

if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
  const a = parseFloat(readlineSync.question('Premier nombre: '));
  const b = parseFloat(readlineSync.question('Deuxième nombre: '));

  switch (operation) {
    case '+':
      console.log(`${a} + ${b} = ${addition(a, b)}`);
      break;
    case '-':
      console.log(`${a} - ${b} = ${soustraction(a, b)}`);
      break;
    case '*':
      console.log(`${a} * ${b} = ${multiplication(a, b)}`);
      break;
    case '/':
      console.log(`${a} / ${b} = ${division(a, b)}`);
      break;
  }
} else if (operation === '%') {
  const a = parseFloat(readlineSync.question('Nombre: '));
  const pourcentage = parseFloat(readlineSync.question('Pourcentage: '));
  console.log(`${pourcentage}% de ${a} = ${pourcentage(a, pourcentage)}`);
} else if (operation === 'carré' || operation === 'racine' || operation === 'puissance') {
  const a = parseFloat(readlineSync.question('Nombre: '));

  switch (operation) {
    case 'carré':
      console.log(`Le carré de ${a} est ${carre(a)}`);
      break;
    case 'racine':
      console.log(`La racine carrée de ${a} est ${racine(a)}`);
      break;
    case 'puissance':
      const b = parseFloat(readlineSync.question('Puissance: '));
      console.log(`${a} ^ ${b} = ${puissance(a, b)}`);
      break;
  }
} else {
  console.log('Opération non valide');
}
