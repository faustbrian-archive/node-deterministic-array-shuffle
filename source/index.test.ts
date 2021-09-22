import { shuffle } from "./index";

test("#shuffle", () => {
  expect(shuffle("1", [1, 2, 3, 4, 5])).toStrictEqual([1, 5, 4, 3, 2]);
  expect(shuffle("2", [1, 2, 3, 4, 5])).toStrictEqual([2, 3, 5, 4, 1]);
  expect(shuffle("3", [1, 2, 3, 4, 5])).toStrictEqual([4, 3, 5, 1, 2]);
});
