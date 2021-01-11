/* eslint-disable import/no-dynamic-require */
const env = process.env.NODE_ENV || 'development';
const credentials = require(`./.credentials.${env}`);
module.exports = { credentials };
