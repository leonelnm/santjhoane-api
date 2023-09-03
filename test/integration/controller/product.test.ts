import test from 'node:test';
import assert from 'node:assert';

test('top level test', async (t) => {
  const response = await fetch('api/products/2', { signal: t.signal });
  const data = await response.json();
  console.log(data);

  assert(data.ok, data.message);

});