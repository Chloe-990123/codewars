function XO(str) {
    let counta = 0
    let countb = 0
    
    for (let i = 0; i < str.length; i++)
      {
        if (str[i].toLowerCase() === "x") {
          counta++ 
        } else if (str[i].toLowerCase() === "o") {
          countb++
        } else {
          continue
        }
      }
    if (counta === countb) {
      return true
    } else {
      return false
    }
}