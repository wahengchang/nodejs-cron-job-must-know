# nodejs-cron-job-must-know
it is an example of running Node.js script with every certain period(cron and non-cron job)

#### Why don't we use Linux `crontab` 
 - We can provide the full path to node `/usr/local/bin/node` in your cron job like:
    - `30 6 1 * * /usr/local/bin/node /home/steve/example/script.js`
 - Or making a script with the command, and then adding that to cron:
    ```
    #!/usr/bin/env sh 
    node /home/campaigns/reporting/UNIT_TESTS/testCron.js > /home/campaigns/reporting/UNIT_TESTS/cron.log
    ```
- The problem with the two above methods is messing up the path. The command is in `absolute path`, but the Node.js script uses `relative path` to import/require other modules. It causes the error of file not found. __*So we need to execute the cron under the directory of Node.js script, which contains all the modules which will be used*__.



## Install 
This lib is used to keep the cron-job alive, which triggers the node script at a certain time.

```
$ npm install --save node-cron
```

## Usage 
Import node-cron and schedule a task:

[Read more](https://www.npmjs.com/package/node-cron)

```js
var cron = require('node-cron');
 
cron.schedule('* * * * *', function(){
  console.log('running a task every minute');
});

```

## Run Node.js script in cron

 - To run script : `$ node script1.js` 
 - And script: `$ npm run script -- PeterGood`
 - `child_help.js` is an amazing Node.js script from [mout](https://github.com/mout/mout/), which helps to manage multiple linux commands. 


Start a Daemon, and run 
```
$ node cronNodeScript
```

Execute script every 1 min
```js
//execute every 1 min
cron.schedule('*/1 * * * *', function(){
    ....
});
```

Execute `$ node script1.js` and `npm run script -- PeterGood` every 1 min
```js

//execute every 1 min
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
 - [https://stackoverflow.com/questions/7194102/node-js-script-not-executing-from-crontab](https://stackoverflow.com/questions/7194102/node-js-script-not-executing-from-crontab)
 - [https://stackoverflow.com/questions/5849402/how-can-you-execute-a-node-js-script-via-a-cron-job](https://stackoverflow.com/questions/5849402/how-can-you-execute-a-node-js-script-via-a-cron-job)
