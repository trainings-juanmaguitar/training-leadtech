function f(x, y, z) {
  return x + y + z;
}

var arr = [1, 2, 3];

f(...arr) === 6; // true

[0, ...arr, 4, 5, 6, 7]; // [0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]; // [0, 1, 2, 3, 4, 5, 6, 7]