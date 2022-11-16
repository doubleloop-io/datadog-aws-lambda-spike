# datadog aws lambda

## Usage

### EventBridge

The `validate-checkout` lambda sends an event to EventBridge, that forwards it to `start-checkout` lambda

From the logs you should see the same correlation id is used.

```bash
curl -d '{"name":"john"}' localhost:6000/dev/validate-checkout
```

## Deploy

```bash
export AWS_PROFILE=...
npm run build
npm run deploy
```
