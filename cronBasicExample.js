var cron = require('node-cron');

//exceute every 2:30am morning
// cron.schedule('30 2 * * *', function(){
//  console.log('running a task every two minutes');
// });


//exceute every 1 min
cron.schedule('*/1 * * * *', function(){
    console.log('running a task every two minutes');
});