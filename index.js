const AWS = require('aws-sdk');
const dotenv = require('dotenv') 
const { v4: uuidv4 } = require('uuid');

dotenv.config()

s3 = new AWS.S3({
accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
region: process.env.REGION,
});

const bucketName = `my-bucket-${uuidv4()}`;

const bucketParams = {
    Bucket: bucketName,
    ACL: 'private'
  };
  
  s3.createBucket(bucketParams, function(err, data) {
    if (err) {
      console.log('Error trying to create your brand new bucket:', err);
    } else {
      console.log('Bucket created ✅', data.Location);
    }
  });

