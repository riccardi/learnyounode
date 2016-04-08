var mymodule = require('./makingitModularHelper.js') 
var fs = require('fs');
var path = require('path');

mymodule(process.argv[2], process.argv[3], function(err,list) {
	if (err) { 
        return console.error('There was an error:', err)  
    }
       
   list.forEach(function (file) {  
     console.log(file);  
   });

});
