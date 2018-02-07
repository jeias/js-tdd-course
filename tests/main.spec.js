import { assert } from 'chai';
import { sum, sub, mult, div } from '../src/main.js'

describe('Calc', () => {


  describe('sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      assert.equal(4, sum(2, 2));
    });
  });

  describe('sub', () => {
    it('should return 2 when `sub(4,2)`', () => {
      assert.equal(2, sub(4, 2));
    });
  });

  describe('mult', () => {
    it('sould return 4 when `mult(2,2)', () => {
      assert.equal(4, mult(2, 2));
    });
  });

  describe('div', () => {
    it('should return 2 when `div(4,2)`', () => {
      assert.equal(2, div(4, 2));
    });

    it('should return `Impossível dividir por zero!` when `div(2,0)`', () => {
      assert.equal('Impossível dividir por zero!', div(2, 0));
    });
  });
});
