import test from 'tape';
import { call } from 'redux-saga/effects';

import { delay, incrementAsync } from './sagas';

test('incrementAsync', (assert) => {
  const generator = incrementAsync();

  assert.deepEqual(
    generator.next().value,
    call(delay, 1000),
    'incrementAsync Saga must call delay(1000)'
  );

  assert.deepEqual(
    generator.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync Saga must dispatch an INCREMENT action'
  );

  assert.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    'incrementAsync Saga must be done'
  );

  assert.end();
});
