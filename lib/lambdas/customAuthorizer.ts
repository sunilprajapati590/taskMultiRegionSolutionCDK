import { aws_lambda_nodejs, Duration, Stack } from "aws-cdk-lib";
import { Role } from "aws-cdk-lib/aws-iam";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export function createCustomAuthorizer(scope: Stack, region: string, role: Role): NodejsFunction {
  return new aws_lambda_nodejs.NodejsFunction(scope, "ApplicationAuthLambda", {
    timeout: Duration.seconds(5),
    entry: "functions/authorizer.ts",
    environment: {
      region,
    },
    role: role
  });
}
