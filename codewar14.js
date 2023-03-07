function missingWord(nums, str) {
    // Jenny needs your help...
    let newe = ""
    let splited = str.split('').filter(x => x != " ").map(x => x.toLowerCase())
    let sorted = nums.sort((a,b) => a - b)


    for (let element of sorted) {
      if (splited[element]) {
        newe += splited[element]
      } else {
        return "No mission today"
        break
      }
    }
    
  }


