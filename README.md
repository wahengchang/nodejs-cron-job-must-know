# nodejs-cron-job-must-know
it is an example of running Node.js script with every certain period(cron and non-cron job)

## Install 
This is the lib is used to keep the cron-job alive, which triggers the node script at certain time.

```
$ npm install --save node-cron
```

## Usage 
Import node-cron and schedule a task:

[Read more](https://www.npmjs.com/package/node-cron)

```
var cron = require('node-cron');
 
cron.schedule('* * * * *', function(){
  console.log('running a task every minute');
});

```

## Run Node.js script in cron

 - To run script : `$ node script1.js` 
 - And script: `$ npm run script -- PeterGood`
 - `child_help.js` is a amazing Node.js script from [mout](https://github.com/mout/mout/), which helps to manage multiple linux command. 


Start a Daemon, and run 
```
$ node cronNodeScript
```

Exceute scritp every 1 min
```js
//exceute every 1 min
cron.schedule('*/1 * * * *', function(){
    ....
});
```

Exceute `$ node script1.js` and `npm run script -- PeterGood` every 1 min
```js

//exceute every 1 min
cron.schedule('*/1 * * * *', function(){
    var shell = require('./child_helper');

    var commandList = [
        "node script1.js",
        "npm run script -- PeterGood"
    ]

    shell.series(commandList , function(err){
    //    console.log('executed many commands in a row'); 
        console.log('done')
    });
});
```



## Reference:
 - [https://www.npmjs.com/package/node-schedule](https://www.npmjs.com/package/node-schedule)
 - [https://www.npmjs.com/package/node-cron](https://www.npmjs.com/package/node-cron)