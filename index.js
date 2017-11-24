function st(seed, step, isDone, completer) {
  while (!isDone(seed)) {
    seed = step(seed);
  }
  return completer(seed);
}

module.exports = st;
