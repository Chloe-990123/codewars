function findMultiples(integer, limit) {
    //your code here
    let x = []
    
    for (let i = integer; i <= limit; i+=integer ) {
      x.push(i)
    }
    
    return x
  }