**You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/faustbrian).**

---

# @faustbrian/node-deterministic-array-shuffle

[![npm version](https://badgen.net/npm/v/@faustbrian/node-deterministic-array-shuffle)](https://npm.im/@faustbrian/node-deterministic-array-shuffle)

## Installation

```
pnpm install @faustbrian/node-deterministic-array-shuffle
```

## Usage

```ts
import { shuffle } from "@faustbrian/node-deterministic-array-shuffle";

shuffle("1", [1, 2, 3, 4, 5]) // [1, 5, 4, 3, 2]
shuffle("2", [1, 2, 3, 4, 5]) // [2, 3, 5, 4, 1]
shuffle("3", [1, 2, 3, 4, 5]) // [4, 3, 5, 1, 2]
```

## License

This is an open-sourced software licensed under the [AGPL-3.0-or-later](LICENSE).
