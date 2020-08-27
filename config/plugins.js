module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: 'fabricework',
      api_key: '256863963365415',
      api_secret: 'CGKymO23mSrDelOqmOkhzuOWqyc',
    },
  },
  // ...
  graphql: {
    endpoint: '/graphql',
    tracing: false,
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 7,
    amountLimit: 100,
  },
});

