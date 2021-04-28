'use strict'

class CredentialDownstream {
  async handle ({ response }, next) {
    await next()
    response.header('Access-Control-Allow-Credentials', 'true')
  }
}

module.exports = CredentialDownstream
