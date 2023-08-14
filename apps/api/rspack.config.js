const { composePlugins, withNx } = require('@nx/rspack');

module.exports = composePlugins(withNx(), (config) => {
  return {
    ...config,
    externals: [
      '@as-integrations/fastify',
      '@apollo/gateway',
      '@apollo/subgraph',
      '@nestjs/microservices/microservices-module',
      '@nestjs/microservices',
      'ts-morph',
      'class-transformer/storage',
      'fsevents',
      '@apollo/utils.createhash',
      '@nestjs/websockets/socket-module',
      '@apollo/subgraph/dist/directives',
      '@apollo/subgraph/package.json',
    ],
  };
});
