function doWork(param) {
  let a = getA(param);
  let b = getB(param);
  let c = sum(a, b);
  return c.toString();
}

function getA(param) {
  return (parseInt(param.a) || 0);
}

function getB(param) {
  return (parseInt(param.b) || 0);
}

function sum(a, b) {
  return a + b;
}

module.exports.doWork = doWork;
