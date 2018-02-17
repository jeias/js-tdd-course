import { assert } from 'chai';
import FizzBuzz from '../src/main';

describe ('Main', () => {

  it('Should return `Fizz` when multiple of 3', () => {
    assert.equal(FizzBuzz(3), 'Fizz');
    assert.equal(FizzBuzz(6), 'Fizz');
  });

  it('Should return `Buzz` when multiple of 5', () => {
    assert.equal(FizzBuzz(5), 'Buzz');
    assert.equal(FizzBuzz(10), 'Buzz');
  });

  it('Should return `FizzBuzz` when multiple of 5 and 3', () => {
    assert.equal(FizzBuzz(15), 'FizzBuzz');
  });

  it('Should return the number when non-multiple', () => {
    assert.equal(FizzBuzz(17), 17);
  });
});
