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
  
  module.exports = {
    addition,
    soustraction,
    multiplication,
    division,
    pourcentage,
    carre,
    racine,
    puissance,
  };
  