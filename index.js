const AWS = require('aws-sdk');
const dotenv = require('dotenv'); 

dotenv.config()

let s3 = new AWS.S3({
region: "us-west-2",
accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const params = {
    Bucket: 'my-bucket-name-test-april-15-23',
    ACL: 'public-read'
  };
  
  s3.createBucket(params, function(err, data) {
    if (err) {
      console.log('Error creating the bucket:', err);
    } else {
      console.log('Bucket created successfully:', data.Location);
    }
  });

