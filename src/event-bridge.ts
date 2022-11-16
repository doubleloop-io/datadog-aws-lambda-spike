// https://github.com/getndazn/dazn-lambda-powertools/blob/master/packages/lambda-powertools-eventbridge-client/index.js

process.env.AWS_NODEJS_CONNECTION_REUSE_ENABLED = "1"
import AwsEventBridge from "aws-sdk/clients/eventbridge"

export const eventBusName = "datadog-aws-lambda-event-bus-dev"
export const eventSource = "datadog-aws-lambda-src"

const client = new AwsEventBridge()

export const EventBridge: AwsEventBridge = client
