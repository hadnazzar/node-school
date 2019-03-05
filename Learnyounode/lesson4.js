var fs = require('fs')

function validateData(err,data){
  if (err){
    return console.log(err)
  }
  var lines = data.split('\n').length - 1
  console.log(lines)
}
    
var contents = fs.readFile(process.argv[2], 'utf8', validateData)
