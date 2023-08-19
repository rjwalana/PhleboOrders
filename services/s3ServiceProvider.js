require("dotenv").config();
const AWS = require("aws-sdk");

class s3ServiceProvider {
  constructor() {
    // initialize s3
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(file_data, folderName, file_name) {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Body: file_data,
      Key: `${folderName}/${file_name}`,
    };
    const data = await this.s3.upload(params).promise();
    return params.Key;
  }

  async downloadFile(s3Path) {
    // Download the file from S3
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: s3Path,
    };
    console.log("S3 Object Key:", params.Key);
    const data = await this.s3.getObject(params).promise();
    return data.Body;
  }
}

module.exports = new s3ServiceProvider();
