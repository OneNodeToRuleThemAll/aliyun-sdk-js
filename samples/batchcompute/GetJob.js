var batchcompute = require('./batchcompute');

/**
*
*/
var jobId = 'job-00000000559638EC00005F780000069A';

batchcompute.getJob({
    jobId:jobId
},function(err, result) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
});
