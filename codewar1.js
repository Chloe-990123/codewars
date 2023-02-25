function toCamelCase(str) {
  let newstring = "";
  
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newstring += str[0];
    } else if (str[i] === "_" || str[i] === "-"){
      continue
    }
    else if (str[i-1] === "_" || str[i-1] === "-") {
      newstring += str[i].toUpperCase();
    } else {
      newstring += str[i];
    }
  }

  return newstring;
}