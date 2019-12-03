import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');

export class CdkJestTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new s3.Bucket(this, 'test-bucket', {
      bucketName: 'test-bucket',
      versioned: true
    });
  }
}
