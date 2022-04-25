const { GraphQLUpload } = require("graphql-upload");
const { finished } = require("stream/promises");

const resolvers = {
  Upload: GraphQLUpload,

  Mutation: {
    singleUpload: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();

      const out = require("fs").createWriteStream("public/Images/" + filename);
      stream.pipe(out);
      await finished(out);

      return { filename, mimetype, encoding };
    },
  },
};

module.exports = resolvers;
