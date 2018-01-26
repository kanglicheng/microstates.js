import 'jest';

import microstate, * as MS from '../../src';

describe('string transitions', () => {
  let ms = microstate(MS.String);
  it('concat', () => {
    expect(ms.concat(' foo').valueOf()).toBe(' foo');
  });
});
