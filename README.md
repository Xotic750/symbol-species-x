<a
  href="https://travis-ci.org/Xotic750/symbol-species-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/symbol-species-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/symbol-species-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/symbol-species-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/symbol-species-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/symbol-species-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/symbol-species-x"
  title="npm version">
<img src="https://badge.fury.io/js/symbol-species-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/symbol-species-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/symbol-species-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/symbol-species-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/symbol-species-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/symbol-species-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/symbol-species-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_symbol-species-x"></a>

## symbol-species-x

The system Symbol.species (real or fake)

Possible values are.

- Symbol.species (real)
- '@@species' (fake)

**Example**

```js
import $species$ from 'symbol-species-x';

typeof species === 'symbol'; // true if real
typeof species === 'string'; // true if fake
```
