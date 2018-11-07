console.log('为了保证eval的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行eval，eval内部一律是全局作用域。');
a = 1;
function f() {
    var a = 2;
    var e = eval;
    e('console.log(a)');
}
f(); // 1

// val的别名调用的形式五花八门，只要不是直接调用，都属于别名调用，因为引擎只能分辨eval()这一种形式是直接调用。
// eval.call(null, '...')
// window.eval('...')
// (1, eval)('...')
// (eval, eval)('...')