function nbYear(p0, percent, aug, p) {
    let count = 0
    let newp = percent / 100
    let total = p0
    while (total < p) {
      total += (newp*total) + aug
      count++
    }
    
  return count
}
