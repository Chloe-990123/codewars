function addLength(str) {
    //start-here
      return str.split(' ').map(element => `${element} ${element.length}`)
    }