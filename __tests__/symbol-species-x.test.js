import $species$ from 'src/symbol-species-x';

describe('symbol species', function() {
  it('is a symbol or string', function() {
    expect.assertions(1);
    const type = typeof $species$;
    const isType = ['symbol', 'string'].some((val) => val === type);
    expect(isType).toBe(true);
  });
});
