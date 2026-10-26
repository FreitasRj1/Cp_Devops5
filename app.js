// PROVA 2 - SABOTAGEM: uso de eval() com entrada do usuário (injeção de código).
// Use em um branch separado (prova-semgrep). NÃO faça merge na main.
function calcular(req, res) {
  const expressao = req.query.expr;
  const resultado = eval(expressao);   // <- Semgrep deve apontar esta linha
  res.send(String(resultado));
}
module.exports = calcular;
