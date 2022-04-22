const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs,resolvers } = require("./graphql");
const dbConnection  = require("./database/connection");
const { graphqlUploadExpress } = require('graphql-upload')
const { getUser } = require('./middleware/auth')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express();


app.use(cors({
  origin: "*"
}))

app.use("/images/:id", async (req, res) => {
  const { id } = req.params

  let isExist = fs.readdirSync(path.join(__dirname, "public/Images")).includes(id)
  if (isExist) {
    const imageStreaming = fs.createReadStream(path.join(__dirname, "public/Images/" + id));
    imageStreaming.pipe(res);
  } else {
    res.status(400).send("This Image is not Exist")
  }
})


const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req }) => {

    const token = req.get('Authorization') || ''
    const user = getUser(token.replace('Bearer', ''))
    if (token) {
      if (user?.tokenExpired | user?.tokenInvalid) {
        if (user?.tokenExpired) {
          return { user: "Token Expired" }
        } else {
          return { user: "Invalid Token" }
        }
      } else {
        return { user }
      }
    }
    return { user: "token not exist" }

  },
});

(async () => {
  await dbConnection();
  await server.start();

  app.use(graphqlUploadExpress())
  server.applyMiddleware({ app })

  await new Promise(r => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})();