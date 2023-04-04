const assert = require('assert');
const {
  addition,
  soustraction,
  multiplication,
  division,
  pourcentage,
  carre,
  racine,
  puissance
} = require('./calculatricetu');

describe('Tests de la calculatrice', () => {
  describe('addition()', () => {
    it('devrait retourner 4 pour 2 + 2', () => {
      assert.equal(addition(2, 2), 4);
    });

    it('devrait retourner 0 pour -2 + 2', () => {
      assert.equal(addition(-2, 2), 0);
    });

    it('devrait retourner 0 pour 0 + 0', () => {
      assert.equal(addition(0, 0), 0);
    });
  });

  describe('soustraction()', () => {
    it('devrait retourner 0 pour 2 - 2', () => {
      assert.equal(soustraction(2, 2), 0);
    });

    it('devrait retourner -4 pour -2 - 2', () => {
      assert.equal(soustraction(-2, 2), -4);
    });

    it('devrait retourner 0 pour 0 - 0', () => {
      assert.equal(soustraction(0, 0), 0);
    });
  });

  describe('multiplication()', () => {
    it('devrait retourner 4 pour 2 * 2', () => {
      assert.equal(multiplication(2, 2), 4);
    });

    it('devrait retourner -4 pour -2 * 2', () => {
      assert.equal(multiplication(-2, 2), -4);
    });

    it('devrait retourner 0 pour 0 * 0', () => {
      assert.equal(multiplication(0, 0), 0);
    });
  });

  describe('division()', () => {
    it('devrait retourner 1 pour 2 / 2', () => {
      assert.equal(division(2, 2), 1);
    });

    it('devrait retourner -1 pour -2 / 2', () => {
      assert.equal(division(-2, 2), -1);
    });

    it('devrait retourner 0 pour 0 / 2', () => {
      assert.equal(division(0, 2), 0);
    });

    it('devrait retourner "Erreur: division par zéro" pour 2 / 0', () => {
      assert.equal(division(2, 0), 'Erreur: division par zéro');
    });
  });

  describe('pourcentage()', () => {
    it('devrait retourner 10 pour 10% de 100', () => {
      assert.equal(pourcentage(100, 10), 10);
    });

    it('devrait retourner 100 pour 50% de 200', () => {
      assert.equal(pourcentage(200, 50), 100);
    });

    it('devrait retourner 0 pour 0% de 10', () => {
      assert.equal(pourcentage(10, 0), 0);
    });
    });
    
    describe('carre()', () => {
    it('devrait retourner 4 pour le carré de 2', () => {
    assert.equal(carre(2), 4);
    });

    it('devrait retourner 0 pour le carré de 0', () => {
      assert.equal(carre(0), 0);
    });
    
    it('devrait retourner 1 pour le carré de -1', () => {
      assert.equal(carre(-1), 1);
    });

  });

  describe('racine()', () => {
  it('devrait retourner 2 pour la racine carrée de 4', () => {
  assert.equal(racine(4), 2);
  });

  it('devrait retourner 0 pour la racine carrée de 0', () => {
    assert.equal(racine(0), 0);
  });
  
  it('devrait retourner "Erreur: nombre négatif" pour la racine carrée de -1', () => {
    assert.equal(racine(-1), 'Erreur: nombre négatif');
  });

});

describe('puissance()', () => {
it('devrait retourner 8 pour 2 à la puissance 3', () => {
assert.equal(puissance(2, 3), 8);
});

it('devrait retourner 0.25 pour 2 à la puissance -2', () => {
  assert.equal(puissance(2, -2), 0.25);
});

it('devrait retourner 1 pour 2 à la puissance 0', () => {
  assert.equal(puissance(2, 0), 1);
});

  });
});


