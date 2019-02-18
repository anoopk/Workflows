'use strict';
const AWS = require('aws-sdk');

module.exports.writeS3 = (event, context, callback) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'sls-logs-bukect',
    Key: 'success!!'
 }

  return s3.putObject(params).promise().then(() => {
    callback(null, `a log writed successfully`);
  }).catch(error => {
    callback(error.message);
  });
};