# js-st
it's not novel or complicated, but:

  const st = require('js-st');
  const seed = "";
  const step = v => v + "a";
  const isDone = v => v.length == 5;
  const completer = v => v.toUpperCase();
  st(seed, step, isDone, completer); // 'AAAAA'
