var fs = require('fs');
 
// read file sample.json file
fs.readFile('../brexbit.json',
    // callback function that is called when reading file is done
    function(err, data) { 
        // json data
        var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(jsonData);
 
        // access elements
        console.log(jsonParsed.bitcoin.compra);
        
});