import crypto from 'crypto';

const secret = 'webhookSecret';
const nylasSignature = 'x-nylas-signature'
const rawBody = `rawBody`

const hashAlgorithm = 'sha256'

const digest = crypto
  .createHmac(hashAlgorithm, secret)
  .update(rawBody)
  .digest('hex')

const isValidWebhook = digest === nylasSignature

console.log(isValidWebhook)
