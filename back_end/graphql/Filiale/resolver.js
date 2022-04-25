const {singleUpload} =require( "../../middleware/auth")
const {Filiale} =require("../../models/Filiale")


const resolvers = {
  Query: {
    Filiales: async () => await Filiale.find()
  },
  Mutation: {
    addFiliale: async (_, { input }) => {

      console.log(input);
      const { image } = await input

      let { filename, mimetype, encoding } = await singleUpload({ file: image })


      let filialeData = await new Filiale({ ...input, image: { filename, mimetype, encoding } })
      let result = await filialeData.save()
      console.log(result);

      return result
    },
    deleteFiliale: async (_, { id }) => {

      let deleteFiliale = await Filiale.bulkWrite([
        {
          deleteOne: {
            "filter": { _id: id }
          }
        }
      ])

      return deleteFiliale.result.nRemoved ? true : false
    }
  }
};


module.exports = resolvers;