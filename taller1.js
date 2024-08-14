function convertidorTemp(C) {
  let F = (C * 9) / 5 + 32;
  return "el valor de " + C + "C° en F es " + F;
}

function resolvedor(a, b, c, signo) {
  let op = 1;
  if (signo) op = -1;
  return (-b + op * (b ** 2 - 4 * a * c) ** (1 / 2)) / (2 * a);
}

function mejorParidad(x) {
  if (x / 2 === parseInt(x / 2)) {
    return "par";
  } else {
    return "inpar";
  }
}

function peorParidad(x, t = true) {
  let t = [];
  while (x > 0) {
    x = x - 1;
    t.push("!");
  }
  let p = true;
  t.forEach((numero) => (p = numero + p));
  if (p) return "par";
  return "inpar";
}
