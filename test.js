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
} = require('./calculator');

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


