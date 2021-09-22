import { hash } from "@faustbrian/node-sha256";

export const shuffle = <T>(seed: string, items: T[]): T[] => {
  let currentSeed: Buffer = hash(Buffer.from(seed));

  for (let index = 0, itemsCount = items.length; index < itemsCount; index++) {
    for (let x = 0; x < 4 && index < itemsCount; index++, x++) {
      const newIndex = currentSeed[x]! % itemsCount;
      const b = items[newIndex];
      items[newIndex] = items[index]!;
      items[index] = b!;
    }

    currentSeed = hash(currentSeed);
  }

  return items;
};
