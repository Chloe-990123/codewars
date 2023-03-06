function arithmeticSequenceElements(a, d, n) {
	let ar = [a]
  let x = a
  for (let i = 0; i < n-1; i++) {
    x = x + d
    ar.push(x)
    
  }
  return ar.join(', ')
}