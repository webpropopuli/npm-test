function isPrime(n)
{
  for(x=2; x<Math.floor(x/2); x++)
    if(n % x == 0)
      return false;
  return true;
}
function sumPrimes(numMax) {
  var primes = [1,2,3];
  
  for(x=1; x<numMax; x++)
    if(isPrime(x))
       primes.push(x); 
  

  return primes.reduce(function (acc, cur) {
    return (acc + cur);
});
}


sumPrimes(10);
