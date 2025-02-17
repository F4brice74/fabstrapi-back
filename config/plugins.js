module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
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

