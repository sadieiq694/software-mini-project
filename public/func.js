function saveData(input) {

    console.log(input)

    const fs = require('fs') 
 
    fs.writeFile('outtest.txt', input, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
}