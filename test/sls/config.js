var conf = {
    accessKeyId: process.env.ALIYUN_OSS_ACCESS_KEY_ID,
    secretAccessKey: process.env.ALIYUN_OSS_ACCESS_KEY_SECRET,
    endpoint: process.env.ALIYUN_OSS_ENDPOINT,
    projectName: '',
    logStoreName: ''
};

try{
    module.exports = require('../configuration/sls_config');
}catch(e){
    //if '../configuration/config' does not exists
    module.exports = conf;
}