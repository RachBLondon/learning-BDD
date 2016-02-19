
function nonPositiveRule(n, result){
  if (n<= 0){
    result.push('error.nonpositive');
  }
}

function nonDivisibleRule(divisor, error){
  return function(n, result){
    if (n % divisor===0){
      result.push(error);
    }
  }
}

var validationRules = [
  nonPositiveRule,
  nonDivisibleRule(3, 'error.three'),
  nonDivisibleRule(5, 'error.five')
];


module.exports = function(n){
  return validationRules.reduce(function(result, rule){
    rule(n, result);
    return result;
  },[])
}
