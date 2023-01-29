const isPrime = ( number: number ): boolean => {
  if ( number <= 1 ) return false;
  if ( number === 2 ) return true;

  const squareRoot = Math.sqrt( number );
  for ( let index = 2; index <= squareRoot; index++ ) 
  {
    if ( squareRoot % index === 0 ) return false;
  }

  return true;
}

isPrime(521);
isPrime(9801);
isPrime(13037);