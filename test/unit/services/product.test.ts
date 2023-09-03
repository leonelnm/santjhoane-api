import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('test de prueba valición', () => {
  it('2 + 2 is 4', () => {
    assert.equal(2 + 2, 4);
  });

  it('2 + 2 is not 5', () => {
    assert.notEqual(2 + 2, 5);
  });

  it('2 - 2 is 0', { skip: true }, () => {
    assert.equal(2 - 2, 0);
  })
})