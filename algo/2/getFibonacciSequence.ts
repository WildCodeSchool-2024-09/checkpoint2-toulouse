function getFibonacciSequence(size: number): number[] {
  if (size > 2) {
    let fibo = getFibonacciSequence(size - 1);
    fibo = fibo.concat(fibo[size - 3] + fibo[size - 2]);

    return fibo;
  }

  if (size === 2) {
    return [0, 1];
  }
  if (size === 1) {
    return [0];
  }

  return [];
}

export default getFibonacciSequence;
