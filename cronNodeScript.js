var cron = require('node-cron');

//execute every 1 min
cron.schedule('*/1 * * * *', function(){
    var shell = require('./child_helper');

    var commandList = [
        "node script1.js",
        "npm run script -- PeterGood"
    ]

    shell.series(commandList , function(err){
    //    console.log('execute many commands in a row'); 
        console.log('done')
    });
});
