import hasSymbolSupport from 'has-symbol-support-x';
/**
 * The species accessor property allows subclasses to override the default constructor for objects.
 *
 * Possible values are.
 *
 * Symbol.species
 * '@@species'.
 *
 * @type {symbol|string}
 */

var symbolSpecies = hasSymbolSupport && Symbol.species || '@@species';
/* eslint-disable-line compat/compat */

export default symbolSpecies;

//# sourceMappingURL=symbol-species-x.esm.js.map