module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri:"mongodb://adminFab:MIldqxmwG3UAarzU@bdd-fab-shard-00-00.mfbyu.mongodb.net:27017,bdd-fab-shard-00-01.mfbyu.mongodb.net:27017,bdd-fab-shard-00-02.mfbyu.mongodb.net:27017/bdd-fab?ssl=true&replicaSet=atlas-kobq6i-shard-0&authSource=admin&retryWrites=true&w=majority"
       // uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
