const assert = require('assert');
const st = require('../index');

describe('st', () => {
  it("should run until it's done and then complete", () => {
    let seed = 0,
        step = x => x + 1,
        isDone = x => x === 10,
        completer = x => x / 2;
    assert.equal(5, st(seed, step, isDone, completer))
  });
  it("shouldn't run if step isDone already", () => {
    let seed = -1,
        step = x => { throw "step shouldn't run" },
        isDone = x => x < 0,
        completer = x => x - 1;
    assert.equal(-2, st(seed, step, isDone, completer))
  });
});
