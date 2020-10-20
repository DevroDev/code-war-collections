var calc = function (expr) {
  var combine = function(op, l, r){
     switch(op){
        case '+': return l + r; case '-': return l - r;
        case '*': return l * r; case '/': return l / r;
     }
  }
  var scan_r = function(op, lb, rb){
    for(var i = expr.length-1, lv = 0; i>=0; --i){
      if(op.indexOf(expr[i])!==-1 && lv == 0) return [combine(expr[i], calc(expr.slice(0, i)), calc(expr.slice(i+1)))];
      else if(expr[i] == rb) ++ lv;
      else if(expr[i] == lb) -- lv;
    }
  };
  var k;
  expr = expr.replace(/^\s*|\s*$/g, "").replace(/([\(+\-*\/]\s*)-/g, "$1%");
  if(k = scan_r("+-", "(", ")"))  return k[0];
  if(k = scan_r("*/", "(", ")"))  return k[0];
  if(expr[0] == '(' && expr[expr.length-1] == ')') return calc(expr.slice(1,-1));
  if(expr[0] == '%')return -calc(expr.slice(1));
  return +expr;
}